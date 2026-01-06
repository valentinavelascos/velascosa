"use client";

import { cards } from "@/app/lib/cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import HoverCard from "./hoverCard";
import Card from "./card";
import { useState, useEffect } from "react"


export default function Services( { content } ) {
    const { theme } = useTheme()

    const [mounted, setMounted] = useState(false)
    
        useEffect(() => {
        setMounted(true)
        }, [])
    
      if (!mounted) return null

  return (
      <section className="mt-20">

       {/*desktop logo card*/}
        <section className="hidden xl:block">

          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr]">
            
            <h2 className="ml-10 font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

            {cards.services1.map((card) => {
              const textObj = content.services1Cards.find(
                (item) => item.id === card.id
              )
  
              const img =
                typeof card.image === "string"
                  ? card.image
                  : theme === "dark"
                  ? card.image.dark
                  : card.image.light
  
              return (
                <HoverCard
                  key={card.id}
                  id={textObj?.id}
                  text={textObj?.text}
                  img={img}
                />
              )
            })}
          </div> 

          <div className="mt-20 hidden sm:grid grid-cols-[1fr_1fr_1fr_2fr]">
            
            {cards.services2.map((card) => {
              const textObj = content.services2Cards.find(
                (item) => item.id === card.id
              )
  
              const img =
                typeof card.image === "string"
                  ? card.image
                  : theme === "dark"
                  ? card.image.dark
                  : card.image.light
  
              return (
                <HoverCard
                  key={card.id}
                  id={textObj?.id}
                  text={textObj?.text}
                  img={img}
                  href={card.href}
                />
              )
            })}

          <h2 className="ml-10 font-semibold text-3xl mb-5 place-content-center">{content.subtitle}</h2>

          </div>  

        </section>


        {/*mobile logo card*/}
        <section className="xl:hidden">

        <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

        <div className="flex gap-6 overflow-x-auto overflow-y-hidden py-4">
          {cards.services1.map((card) => {
              const textObj = content.services1Cards.find(
                (item) => item.id === card.id
              )
  
              const img =
                typeof card.image === "string"
                  ? card.image
                  : theme === "dark"
                  ? card.image.dark
                  : card.image.light
  
              return (
                <Card
                  key={card.id}
                  id={textObj?.id}
                  text={textObj?.text}
                  img={img}
                  href={card.href}
                />
              )
            })}
         
        {cards.services2.map((card) => {
              const textObj = content.services2Cards.find(
                (item) => item.id === card.id
              )
  
              const img =
                typeof card.image === "string"
                  ? card.image
                  : theme === "dark"
                  ? card.image.dark
                  : card.image.light
  
              return (
                <Card
                  key={card.id}
                  id={textObj?.id}
                  text={textObj?.text}
                  img={img}
                  href={card.href}
                />
              )
            })}
        </div>

        </section>


      </section>
  );


}