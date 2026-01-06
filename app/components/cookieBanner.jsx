"use client"

import { useEffect, useState } from "react"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Check stored consent
    const consent = localStorage.getItem("cookieConsent")

    if (!consent) {
      setVisible(true)

      // Default: deny analytics
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: "consent_default",
        analytics_storage: "granted"
      })
    }
  }, [])

  const acceptCookies = () => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
    event: "consent_granted",
    analytics_storage: "granted"
    });

    setVisible(false)
  }

   const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "denied")

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: "consent_denied",
      analytics_storage: "denied"
    })

    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-1/2 z-50 w-[90%] max-w-xl -translate-x-1/2 min-h-32 bg-(--grayVelascosa) text-(--greenVelascosa) py-8 px-5 shadow-lg">
      <p className="text-sm mb-5">
        Welcome to Velascosa. We use third party cookies to understand how our site is used and improve the experience and make better websites.
        <br></br>-----<br></br>
        Bienvenido a Velascosa. Utilizamos cookies para entender cómo se está interactuando con nuestra página y poder hacer mejores páginas web.
      </p>

      <div className="flex justify-end gap-10">
        <button
          onClick={rejectCookies}
          className="text-xs opacity-70 hover:opacity-100"
        >
          Reject
        </button>

        <button
          onClick={acceptCookies}
          className="text-xs underline font-semibold"
        >
          Accept
        </button>
      </div>
    </div>
  )
}
