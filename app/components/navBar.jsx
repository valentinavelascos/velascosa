"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavBar({ lang, text }) {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <nav className="mx-5">
      
      {/* Desktop navigation */}
      <div className="hidden sm:flex text-sm md:justify-between md:mx-10 md:mt-5">
      
        <div className="fixed left-10">
          {/* Language toggle */}
          <button
            className="px-2 italic hover:not-italic"
            onClick={() =>
              router.push(`/${lang === "en" ? "es" : "en"}`)
            }
          >
            {lang === "en" ? "En español" : "In English"}
          </button>
          
          {/* Dark mode toggle */}
          <button
            className="px-2"
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>

        <div className="fixed right-10">
          <Link href={`/${lang}#work`} className="px-2">
            {text.work}
          </Link>
          <Link href={`/${lang}#contact`} className="px-2">
            {text.contact}
          </Link>
        </div>
      </div>

      {/* Mobile navigation */}
      <div className="visible flex justify-between my-5 sm:invisible">

        {/* Language toggle */}
        <button
          className="px-2 italic hover:not-italic"
          onClick={() =>
            router.push(`/${lang === "en" ? "es" : "en"}`)
          }
        >
          {lang === "en" ? "En español" : "In English"}
        </button>
        
        {/* Dark mode toggle */}
        <button
          className="px-2"
          onClick={() =>
            setTheme(theme === "dark" ? "light" : "dark")
          }
        >
          {theme === "dark" ? "Light" : "Dark"}
        </button>
      
        <Link href={`/${lang}#work`} className="px-2">
          {text.work}
        </Link>
        <Link href={`/${lang}#contact`} className="px-2">
          {text.contact}
        </Link>
      </div>
    </nav>
  )
}

