import "server-only"

import en from "@/app/locales/en.json"
import es from "@/app/locales/es.json"

export function getDictionary(lang) {
  const dictionaries = { en, es }
  return dictionaries[lang] || dictionaries.en
}
