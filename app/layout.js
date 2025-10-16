
// Imports
import { Geist, Geist_Mono, Domine } from "next/font/google";
import "./globals.css";
import Link from "next/link";
// import FooterSection from "@/components/FooterSection"; 
import Navbar from "@/components/NavBar";
//import Vercel analytics 

import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const getDomine = Domine({
  variable: "--domine",
  subsets: ["latin"],
})

export const metadata = {
  title: "Velascosa",
  description: "Hacemos páginas web no convencionales",
  icons: {
    icon: "/images/AtlasLogo.jpeg",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${getDomine.variable} antialiased text-gray-900`}>
      <Navbar />
        <main className="p-6">{children}</main>
        {/* <FooterSection /> */ }
      </body>
    </html>
  );
}

