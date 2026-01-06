"use client";

import { cards } from "@/app/lib/cards";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTheme } from "next-themes";
import Card from "./card"


export default function Contact( { content } ) {
    const { theme } = useTheme()

  return (
      <section id="contact" className="mt-20">

       {/*desktop logo card*/}
        <section className="hidden xl:block">

          <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr]">
            
            <h2 className="ml-10 font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

            {cards.contact.map((card) => {
            const textObj = content.contactCards.find(
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
                id={card.id}
                text={textObj?.text}
                img={img}
                href={card.href}
              />
            )
          })}
          </div> 

        </section>

        {/*medium logo card*/}
        <section className="hidden xl:hidden md:block">

        <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

        <div className="flex gap-6 overflow-x-auto overflow-y-hidden py-4">
          {cards.contact.map((card) => {
            const textObj = content.contactCards.find(
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
                id={card.id}
                text={textObj?.text}
                img={img}
                href={card.href}
              />
            )
          })}
         
        </div>

        </section>

        {/*mobile logo card*/}
        <section className="md:hidden xl:hidden">

        <h2 className="font-semibold text-3xl mb-5 place-content-center">{content.title}</h2>

        <div className="">
          {cards.contact.map((card) => {
            const textObj = content.contactCards.find(
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
                id={card.id}
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