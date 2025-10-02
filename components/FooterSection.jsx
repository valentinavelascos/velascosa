
"use client";
// Imports
import Image from "next/image";
import { useState } from "react";

export default function FooterSection() {
    const [hovered, setHovered] = useState(false);


  return (
    <footer id="footer" className="bg-blue-700 text-white min-h-screen py-20 px-10">
      <div className="max-w-full mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
        {/* Columna 1 */}
        <div>
          <h1 className="text-7xl font-bold mt-10">Velascosa_</h1>
          <p className="mt-4 text-4xl font-semibold hover:text-blue-700">
            Gráfica Web_ Diseño, Desarrollo, Ilustración y Storytelling.
          </p>
          <div className="mt-20 text-5xl font-semibold">
          <a href="https://www.instagram.com/velascosa__/" target="_blank">Instagram</a>
          <p className="mt-2">contacto@velascosa.com</p>

          <p className="text-2xl text-white font-bold mt-40 hover:text-blue-700">
        {'<'}Copyright{'>'} Velascosa. Todos los derechos reservados. {new Date().getFullYear()}</p>
          </div>
        </div>

        {/* Columna 2 */}
        <div>
          <div 
            className="relative w-full h-120 mt-8 cursor-pointer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            <Image
              src={hovered ? "/images/Footer/Logo1.png" : "/images/Footer/Logo3.png"}
              alt="Decorative Footer Image"
              fill
              className="object-contain transition-opacity duration-500"
              priority
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
