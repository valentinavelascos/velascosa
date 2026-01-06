"use client"

import { easeInOut, easeOut, motion } from "framer-motion"
import { useState } from "react"
import Card from "./card"

export default function HoverCard(props) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{
            opacity: {
            duration: hovered ? 0 : 0.8,
            delay: hovered ? 0 : 3.5,
            easeInOut
            }
        }}
      >
        <Card {...props} />
      </motion.div>
    </motion.div>
  )
}

