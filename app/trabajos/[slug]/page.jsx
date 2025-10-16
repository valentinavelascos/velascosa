// [Slug] de los trabajos

// nuevo markdown
import ReactMarkdown from 'react-markdown';

// markdown imports
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';


// imports
import Image from "next/image";
import trabajos from "@/data/trabajos";

export async function generateStaticParams() {
  return trabajos.map((trabajo) => ({ slug: trabajo.slug }));
}

// Load the Markdown content
async function gettrabajoContent(slug) {
  const filePath = path.join(process.cwd(), 'content/trabajos', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf8');

  const { content, data } = matter(fileContent);

  return {
    markdown: content,
    metadata: data,
  };
}


export default async function trabajoDetail({ params }) {
  const trabajo = trabajos.find((p) => p.slug === params.slug);
  const markdown = await gettrabajoContent(params.slug);

  if (!trabajo) return <div className="p-10">Producto no encontrado</div>;

  return (
    <main className="min-h-screen px-6 md:px-20 py-40 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10">

        {/* Columna 1: Image */}
        <div className="relative w-full h-[400px] rounded-xl overflow-hidden">
          <Image
            src={trabajo.image}
            alt={trabajo.title}
            fill
            className="object-contain"
          />
        </div>

        {/* Columna 2: Product Info */}
        <div className='place-content-center'>
          <h2 className="text-4xl font-bold mb-4">{trabajo.title}</h2>

          <p className="px-4 py-2 rounded-full border max-w-fit text-gray-600 mb-1">{trabajo.tag}</p>
        </div>
        </div>

        {/* Markdown Description */}
        <div className="markdown">
      <ReactMarkdown>{markdown.markdown}</ReactMarkdown>
        </div>

        
    </main>
  );
}

