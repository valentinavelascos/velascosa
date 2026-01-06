"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function Card({ id, text, img, href, children }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
    setMounted(true)
    }, [])

  if (!mounted) return null
    
    const isExternal =
    href?.startsWith("http://") || href?.startsWith("https://")

  const CardContent = (
    <motion.div className="relative overflow-hidden flex-none">
      <p className="text-xs mb-2">{id}</p>

      <Image
        src={img}
        alt={text}
        width={200}
        height={200}
        className="w-[196px] h-[174px] object-cover"
      />

      <p className="mt-2 text-xs w-[196px]">
        {text}
      </p>

      {children}
    </motion.div>
  )

  if (href && isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {CardContent}
      </a>
    )
  }

  if (href) {
    return (
      <Link href={href} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
