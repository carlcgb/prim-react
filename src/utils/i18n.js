const STORAGE_KEY = 'primlogix_lang'
const DEFAULT_LANG = 'en'

export const getLocale = () => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANG
  }
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'fr' ? 'fr' : DEFAULT_LANG
}

export const setLocale = (lang) => {
  if (typeof window === 'undefined') {
    return
  }
  window.localStorage.setItem(STORAGE_KEY, lang)
}

export const toggleLocale = () => {
  const next = getLocale() === 'en' ? 'fr' : 'en'
  setLocale(next)
}

export const attachLangToggle = (render) => {
  const toggle = document.querySelector('[data-lang-toggle]')
  if (!toggle) {
    return
  }
  toggle.addEventListener('click', () => {
    toggleLocale()
    render()
  })
}

export const applyDocumentLang = () => {
  if (typeof document === 'undefined') {
    return
  }
  document.documentElement.lang = getLocale()
}
