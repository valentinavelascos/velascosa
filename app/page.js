'use client';
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
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

  {/* Logos Atlas navegación */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 group">
        <a href="/about">
        <img src="/images/AtlasRosado.png" alt="About Us" className="w-20 cursor-pointer rounded hover:scale-105" />
        <span className="absolute w-20 text-center left-1/2 top-full mt-2 -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
          Atlas asks about us
        </span>
        </a>
      </div>
      <div className="fixed top-1/2 right-4 transform -translate-y-1/2 z-50 group">
      <a href="/trabajo">
        <img src="/images/AtlasBlanco.png" alt="Action" className="w-30 cursor-pointer rounded hover:scale-105" />
        <span className="absolute right-full top-1/2 -translate-y-1/2 mr-2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
          Atlas is working
        </span>
      </a>
      </div>
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 group">
        <a href="/playing">
        <img src="/images/AtlasVerde.png" alt="About Us" className="w-20 cursor-pointer rounded hover:scale-105" />
        <span className="absolute w-20 text-center left-1/2 bottom-full mt-2 -translate-x-1/2 px-2 py-1 text-xs rounded opacity-0 group-hover:opacity-100 transition" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
          Atlas is playing
        </span>
        </a>
      </div>

<HeroSection />
<IntroSection />

    {/* Atlas está durmiento */}
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-0">
      <div>
      </div>

      <div className="">
        <img src="/images/gif/AtlasDurmiendo.gif" alt="Atlas durmiendo" className="w-40 mt-10 mb-20 -translate-y-60 cursor-cell" />
        <motion.h1
          variants={scrollFadeUp}
          initial="initial"
          whileInView="whileInView"
          transition={scrollFadeUp.transition}
          viewport={scrollFadeUp.viewport}>
          Mmm... parece que Atlas se está quedando dormido.
          <br></br>Este es un gran momento para explorar los otros Atlas... 
         </motion.h1>
         <motion.h1 className="mt-3">...O ponerse en <a href="https://www.instagram.com/velascosa__/" className="underline cursor-alias">contacto</a> con nosotros.</motion.h1>
         </div>

    </div>

    </main>
  );
}