"use client";

// Animaciones y constantes
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0.3 }
};

const images = [
  "/images/Hero/1.png",
  "/images/Hero/2.png",
  "/images/Hero/3.png",
  "/images/Hero/4.png",
  "/images/Hero/5.png",
  "/images/Hero/6.png",
  "/images/Hero/7.png",
  "/images/Hero/8.png",
];

function getRandomCoords () {
  return {
    top: `${Math.random() * 90}vh`,
    left: `${30 + Math.random() * 60}vw`,
  };
}

// Contenido
export default function HeroSection () {

  const [positions, setPositions] = useState(images.map(() => getRandomCoords()));

  // Ramdomly update position every few seconts
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions(images.map(() => getRandomCoords()));
    }, 5000); //update every 3 seconds
    return () => clearInterval(interval);
  }, []);

    return (
  <section id="hero" className="relative w-full h-screen overflow-visible">

    {/* Animate images*/}
    {images.map((src, index) => (
      <motion.div
          key={index}
          className="absolute mix-blend-difference opacity-100 pointer-events-none transition-all"
          animate={positions[index]}
          transition={{ duration: 7, ease: "easeInOut" }}
        >
        <Image src={src} alt={`bg-${index}`} width={400} height={180} />
        </motion.div>
    ))}
 
{/*Texto*/}

  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-20">
  
  {/* Columna 1*/} 
    <div 
    className="fixed h-8 text-md max-w-100 pt-40 pl-10">
      <p className="cursor-vertical-text"> <strong>Diseñamos</strong> y <strong>desarrollamos</strong> páginas web no convencionales.</p>
      <br></br>
      <p className="cursor-vertical-text">La página web como medio visual, textual y de comunicación.</p>
      <br></br>
      <p className="cursor-vertical-text">Trabajamos con clientes de diversas industrias, desde desarrollos inmobiliarios a portafolios de diseño y arte. Con clientes ubicados en Colombia, Perú, México, Canadá, y Costa Rica.</p>
      <br></br>
      <p>Contactanos:</p>
      <a href="https://www.instagram.com/velascosa__/" target="blank" className="uppercase underline cursor-alias">Instagram</a>
    </div>

{/* Columna 2 - vacía*/} 
  </div>
    </section>
    );
}

