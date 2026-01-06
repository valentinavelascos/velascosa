import { getDictionary } from "@/app/lib/getDictionary";
import NavBar from "@/app/components/navBar";

export function generateStaticParams() {
  return [
    { lang: "en" },
    { lang: "es" },
  ]
}

export default async function LangLayout({ children, params }) {
  const { lang } = await params
  const dict = getDictionary(lang)

  return (
    <>
      <NavBar lang={lang} text={dict.nav}/>
      {children}
    </>
  )
}
