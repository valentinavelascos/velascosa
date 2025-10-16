
"use client"; 

// Imports
import Link from "next/link";
import Image from "next/image"
import trabajos from "@/data/trabajos";
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const tags = ['Todos', 'Experiencia digital', 'Identidad visual']


export default function Home() {

    // Constantes y estados para filtro
  const [activeTag, setActiveTag] = useState('Todos')

  const filteredtrabajos = activeTag === 'Todos'
  ? trabajos
  : trabajos.filter(trabajo =>
      Array.isArray(trabajo.tag)
        ? trabajo.tag.includes(activeTag)
        : trabajo.tag === activeTag
    );

   // Constantes y estados para imágenes en hover
   const [isHovered, setIsHovered] = useState(false);
   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
   const [imageIndex, setImageIndex] = useState(0);

    // Imágenes
      const images = [
    "/images/humberto/1.png",
    "/images/humberto/2.png",
    "/images/humberto/3.png",
    "/images/humberto/4.png",
    "/images/humberto/5.png",
    "/images/global/1.png",
    "/images/global/2.png",
    "/images/global/3.png",
    "/images/sieteLomas/4.png",
    "/images/sieteLomas/5.png",
  ];

  // Mouse move tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (isHovered) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  // Image cycling
  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 500); // change every 500ms
    } else {
      setImageIndex(0); // reset when not hovering
    }

    return () => clearInterval(interval);
  }, [isHovered, images.length]);

  return (
    <main className="min-h-screen pb-40 text-white">

{/* Título */}
<motion.section className="pt-50 grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-6 border-b-2 border-dashed mb-5"
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Hover image */}
      {isHovered && (
        <motion.div
          className="pointer-events-none fixed z-[-10]"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 150,
          }}

          initial={{ opacity: 0.99 }}
          animate={{ opacity: 0.99 }}
          transition={{ duration: 0.9 }}
        >
          <Image
            src={images[imageIndex]}
            alt={`Hover image ${imageIndex + 1}`}
            width={400}
            height={300}
            className="shadow-xl"
          />
        </motion.div>
      )}
       
        <div className="pb-5 pr-5">
         <h1 className="mb-5 text-4xl mix-blend-difference">Nuestro trabajo_</h1>
         <p className="w-180 mix-blend-difference">Para nosotros, el trabajo es encontrar la historia única del cliente y contarla de la mejor manera posible. Empezamos en el 2025 y ya hemos trabajado con clientes en Colombia, Perú, México, Costa Rica y Canadá en todo tipo de industrias.</p>
         <img src="/images/AtlasBlanco.png" alt="Atlas trabajando" className="w-40 translate-y-15" />
        </div>

        <div className=""> 
        </div>

     </motion.section>

{/* Filter buttons */}
      <div className="flex flex-wrap gap-4 mb-10">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-2 py-2 text-md hover:cursor-pointer
              ${activeTag === tag
                ? 'underline underline-offset-4'
                : 'hover:border-black'}`}
          >
            {tag}
          </button>
        ))}
      </div>

{/* Función que trae los trabajos */}

   {/* Grid Animated cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 gap-y-15 px-10">
        <AnimatePresence mode="wait">

    {filteredtrabajos.map((trabajo) => (
      <motion.div
              key={trabajo.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
      <Link 
      href={`/trabajos/${trabajo.slug}`} 
      key={trabajo.id}>
      
     <div className="hover:transition cursor-pointer">
     <div className="w-full mb-5 h-[200px] relative overflow-hidden hover:scale-105 shadow-md transition-all duration-300 ease-in-out">
     <Image src={trabajo.image} alt={trabajo.title} fill className="object-cover"/>
    </div>
     <p className="text-xs mb-1">
      {Array.isArray(trabajo.tag)
        ? trabajo.tag.join(' + ')
        : trabajo.tag}
    </p>
    <h3 className="font-semibold text-md mt-2 hover:underline">{trabajo.title}</h3>
    <p className="mt-2 text-sm text-white"> <strong>Cliente_</strong> {trabajo.client}</p>
    <p className="mt-2 text-sm text-white">{trabajo.description}</p>
</div>
    </Link>
 </motion.div>
          ))}
        </AnimatePresence>
      </div>


  {/* Atlas está durmiento - gif */}
      <div className="mb-20 absolute left-1/2 transform -translate-x-1/2 mb-10">
        <img src="/images/gif/AtlasDurmiendo.gif" alt="Atlas durmiendo" className="w-40 mt-10 mb-10" />
      </div>

       </main>
  );
}