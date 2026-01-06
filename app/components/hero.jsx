"use client";

import { cards } from "@/app/lib/cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import Card from "./card"
import HoverCard from "./hoverCard";
import { useEffect, useState } from "react";



export default function Hero( { content } ) {
    const { theme } = useTheme()

    const [mounted, setMounted] = useState(false)
    
        useEffect(() => {
        setMounted(true)
        }, [])
    
      if (!mounted) return null

  return (
      <section id="hero">

       {/*desktop*/}
        <section className="hidden xl:flex">
          {cards.logo.map((card) => {
            const textObj = content.aboutUsCards.find(
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

          <h2 className="ml-10 font-semibold text-3xl mb-5 place-content-center">{content.title}.<br></br>{content.text}</h2>

        </section>

        {/*about us*/}
        <section className="hidden xl:block mt-15">
            <div className="grid grid-cols-[1fr_1fr_1fr_2fr] gap-0">
            {cards.about.map((card) => {
                const textObj = content.aboutUsCards.find(
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

            <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.subtitle}</h2>

            </div>

            
            <div className="grid grid-cols-5 gap-0 mt-10">
            {cards.weMakeGreat.map((card) => {
                const textObj = content.weMakeGreatCards.find(
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

        </section>

        {/*mobile*/}
        <section className="xl:hidden">

        <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

           {cards.logo.map((card) => {
                const textObj = content.aboutUsCards.find(
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
                />
                )
            })} 

        </section>

        {/*about us*/}
        <section className="xl:hidden mt-10">
            <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.subtitle}</h2>

            <div className="flex gap-6 overflow-x-auto overflow-y-hidden py-4">
            {cards.about.map((card) => {
            const textObj = content.aboutUsCards.find(
            (item) => item.id === card.id
            );

            const img =
            typeof card.image === "string"
            ? card.image
            : theme === "dark"
            ? card.image.dark
            : card.image.light;

            return (
            <motion.div
            key={card.id}
            className="relative overflow-hidden flex-none"
            >
                <p className="text-xs mb-2">0{textObj?.id}</p>

                <Image
                src={img}
                alt={textObj?.text}
                width={200}
                height={200}
                className="w-[196px] h-[174px] object-cover"
                />

                <p className="mt-2 text-xs w-[196px]">{textObj?.text}</p>
           
            </motion.div>
            );
            })}
            </div>

            <div className="flex gap-6 overflow-x-auto overflow-y-hidden py-4">
            {cards.weMakeGreat.map((card) => {
            const textObj = content.weMakeGreatCards.find(
            (item) => item.id === card.id
            );

            const img =
            typeof card.image === "string"
            ? card.image
            : theme === "dark"
            ? card.image.dark
            : card.image.light;

            return (
            <motion.div
            key={card.id}
            className="relative overflow-hidden flex-none"
            >
                <p className="text-xs mb-2">0{textObj?.id}</p>

                <Image
                src={img}
                alt={textObj?.text}
                width={200}
                height={200}
                className="w-[196px] h-[174px] object-cover"
                />

                <p className="mt-2 text-xs w-[196px]">{textObj?.text}</p>
           
            </motion.div>
            );
            })}
            </div>

        </section>

      </section>
  );


}