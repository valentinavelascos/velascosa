import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import Script from "next/script"
import CookieBanner from "@/app/components/cookieBanner"

const getInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});



export const metadata = {
  title: "Velascosa",
  description: "Velascosa is a web design agency in Bogotá, Colombia, focused on making beautiful websites.",
  icons: {
    icon: "/icon.png",
  }
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head>
        {/*Google Tag Manager*/}
        <Script
        id="GTM"
        strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5MP98L2J');`}
        </Script>
      </head>

      <body>
        {/*Google Tag Manager noscript*/}
        <noscript>
          <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-5MP98L2J"
          height="0" 
          width="0" 
          style={{ display: "none", visibility: "hidden" }}>
          </iframe>
        </noscript>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        {children}
        <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
