"use client";

import { cards } from "@/app/lib/cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import HoverCard from "./hoverCard";
import Card from "./card";


export default function Work( { content } ) {
    const { theme } = useTheme()

  return (
      <section id="work" className="mt-20">

       {/*desktop logo card*/}
        <section className="hidden xl:block">
         
          <h2 className="max-w-md mx-[auto] font-semibold text-3xl text-center">{content.title}</h2>

          <div className="mt-20 grid grid-cols-5">
          {cards.work.map((card) => {
            const textObj = content.workCards.find(
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
          </div>

        </section>


        {/*mobile logo card*/}
        <section className="xl:hidden">

        <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

        <div className="flex gap-6 overflow-x-auto overflow-y-hidden py-4">
            {cards.work.map((card) => {
            const textObj = content.workCards.find(
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