'use client';

import { motion } from 'framer-motion';



const scrollFadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: false, amount: 0.3 }
};

export default function Home() {
  return (
    <main className="min-h-screen py-10">

    <div>
        
    </div>

{/* Banner trabajo*/}
  <motion.section id="trabajo" {...scrollFadeUp} className="pl-4 pt-2 bg-gray-200 text-sm text-black/20 font-bold min-h-110">
     <p className="hover:text-pink-600">{'<'}image{'>'}</p>
  </motion.section>

 
  
    </main>
  );
}