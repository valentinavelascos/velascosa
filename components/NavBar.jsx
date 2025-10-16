"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav
      className="fixed flex max-w-fit p-6">

        <a href="/">
             <Image
            src="/images/VelascosaLogo.png" 
            alt="Velascosa Logo"
            width={200}
            height={100}
            className="object-contain"/>
        </a>

      <a href="/">
         <Image
            src="/images/AtlasLogo.png" 
            alt="Atlas"
            width={80}
            height={100}
            className="object-contain"/>
      </a>
    </nav>
  );
}
