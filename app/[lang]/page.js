
export const dynamic = "force-dynamic";


import Hero from "@/app/components/hero";
import Work from "@/app/components/work";
import Services from "@/app/components/services";
import Contact from "@/app/components/contact";


import { getDictionary } from "@/app/lib/getDictionary";


export default async function Home( { params }) {

  const { lang } = await params;
  const dict = getDictionary(lang);

  return (
      <main className="mx-10 mb-20 sm:mx-5 lg:mx-20">

        {/*Logo not mobile*/}
        <div className="absolute invisible sm:visible flex place-content-between z-10 mt-50">
          <h1 className="fixed left-5 font-semibold text-4xl text-(--greenVelascosa)">VELAS</h1>
          <h1 className="fixed right-5 font-bold text-4xl text-(--greenVelascosa)">COSA_</h1>
        </div>

        {/*Logo mobile*/}
        <div className="flex place-content-between mb-5 z-10 sm:invisible">
          <h1 className="font-semibold text-4xl text-(--greenVelascosa)">VELAS</h1>
          <h1 className="font-bold text-4xl text-(--greenVelascosa)">COSA_</h1>
        </div>

        <Hero lang= {lang} content={dict.hero} />
        <Work content={dict.work} />
        <Services content={dict.services} />
        <Contact content={dict.contact} />
       
      </main>
  );
}
