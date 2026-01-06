"use client";

import { motion } from "framer-motion";

export default function TextAnimation({ children }) {
  return (
    <section className="grid place-content-center gap-4 px text-(--verdeVelascosa)">
      <FlipLetter>{children}</FlipLetter>
    </section>
  );
}

const DURATION = 0.35;
const STAGGER = 0.025;

const FlipLetter = ({ children }) => {
  const text = String(children ?? "");

  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-2xl uppercase"
      style={{ lineHeight: 0.8 }}
    >
      <div>
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="absolute inset-0">
        {text.split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};

