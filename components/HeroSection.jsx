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
  "/images/Hero/1.jpg",
  "/images/Hero/2.jpg",
  "/images/Hero/3.jpeg",
  "/images/Hero/4.jpg",
  "/images/Hero/1.jpg",
  "/images/Hero/2.jpg",
];

function getRandomCoords () {
  return {
    top: `${Math.random() * 90}vh`,
    left: `${Math.random() * 90}vw`,
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
          className="absolute mix-blend-multiply opacity-90 pointer-events-none transition-all"
          animate={positions[index]}
          transition={{ duration: 7, ease: "easeInOut" }}
        >
        <Image src={src} alt={`bg-${index}`} width={180} height={180} />
        </motion.div>
    ))}
 
{/*Texto*/}

  <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 mb-20">
  
  {/* Columna 1*/} 
    <div 
    className="relative h-8 text-7xl font-semibold pt-50 hover:text-blue-700">
      <p> Agencia especializada en Diseño y Desarrollo Web, Ilustración y Storytelling.</p>
    </div>

{/* Columna 2*/} 
    <div className="relative h-8 text-6xl pt-20 font-semibold hover:text-white">
    <p> Velascosa_ Bogotá, Colombia.</p>
    </div>
  </div>
    </section>

    );
}

