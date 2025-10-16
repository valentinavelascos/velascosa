'use client';
import HumbertoSection from "@/components/HumbertoSection";
import GlobalSection from "@/components/GlobalSection";
import JorgeOrlandoSection from "@/components/JorgeOrlandoSection";
import SieteLomasSection from "@/components/SieteLomasSection"; 
import { motion } from "framer-motion";

const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0.3 }
};

export default function Home() {
  return (
    <main className="min-h-screen py-10">

  {/* Logos Atlas navegación - About Us */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 group">
        <a href="/about">
        <img src="/images/AtlasRosado.png" alt="About Us" className="w-20 cursor-pointer rounded hover:scale-105" />
        <span className="absolute w-20 text-center left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
          Atlas asks about us
        </span>
        </a>
      </div>

      <div className="border-dashed border-b-2 mt-10 pb-30 mix-blend-difference">
        <img src="/images/AtlasBlanco.png" alt="Atlas trabajando" className="w-40 translate-y-70"/>
        <h1 className="text-4xl">Nuestro Trabajo</h1>
        <p className="w-180">Para nosotros, el trabajo es encontrar la historia única del cliente y contarla de la mejor manera posible. Empezamos en el 2025 y ya hemos trabajado con clientes en Colombia, México y Canadá en todo tipo de industrias.</p> 
      </div>

<HumbertoSection />
<GlobalSection />
<SieteLomasSection />
<JorgeOrlandoSection />


    {/* Atlas está durmiento - gif */}
    <div className="mb-20">
      <div>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 mb-10">
        <img src="/images/gif/AtlasDurmiendo.gif" alt="Atlas durmiendo" className="w-40 mt-10 mb-10" />
      </div>

    </div>
    </main>
  );
}