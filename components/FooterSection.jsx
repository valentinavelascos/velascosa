
"use client";
// Imports
import Image from "next/image";
import { useState } from "react";

export default function FooterSection() {

  return (
    <footer id="footer" className="pb-30" style={{ backgroundColor: 'var(--foreground)', color: 'var(--background)' }}>
      <div className="items-center justify-center text-center">

        <div className="flex h-30 pt-10 justify-center space-x-6 mb-4 font-semibold">
          <a href="">
          Sobre nosotros
        </a>
        <a href="">
           Nuestro trabajo
        </a>
        <a href="">
          ¿Quiés es Atlas?
        </a>
        </div>
        
        <p>Shhh... Atlas está durmiendo</p>

        {/* Banner*/} 
        <div className="mt-20 h-40 overflow-hidden whitespace-nowrap py-2" style={{color: 'var(--background)' }}>
          <div className="inline-block animate-marquee">
            <span className="text-9xl font-bold">Diseño//</span>
            <span className="text-9xl font-bold">Desarrollo//</span>
            <span className="text-9xl font-bold">Ilustración//</span>
            <span className="text-9xl font-bold">Diseño//</span>
            <span className="text-9xl font-bold">Desarrollo//</span>
            <span className="text-9xl font-bold">Ilustración//</span>
            <span className="text-9xl font-bold">Diseño//</span>
            <span className="text-9xl font-bold">Desarrollo//</span>
            <span className="text-9xl font-bold">Ilustración//</span>
            <span className="text-9xl font-bold">Diseño//</span>
            <span className="text-9xl font-bold">Desarrollo//</span>
            <span className="text-9xl font-bold">Ilustración//</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
