"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      {
        threshold: 0.9,
      }
    );

    if (footer) {
      observer.observe(footer);
    }

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 px-6 py-1 shadow-md flex gap-6 z-50 max-w-fit rounded-sm items-center backdrop-blur-xl
        ${isFooterVisible ? "text-white" : "text-black"} transition-colors duration-300`}>

        <a href="/atlas">
             <Image
            src="/images/Footer/logo1.png"  // Replace with your logo path
            alt="Atlas,Velascosa Logo"
            width={40}
            height={40}
            className="object-contain"/>
        </a>

      <p className="text-xs font-semibold text-black/30 hover:text-red-500">
        {"<"}navbar{">"}
      </p>

      <Link href="/" className="font-semibold text-xs">
        Velascosa
      </Link>
      <Link href="#trabajo" className="font-semibold text-xs">
        Trabajo
      </Link>
      <Link href="/about" className="font-semibold text-xs">
        Quiénes somos
      </Link>
      <Link href="#footer" className="font-semibold text-xs">
        Contacto
      </Link>
    </nav>
  );
}
