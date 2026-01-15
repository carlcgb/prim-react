const STORAGE_KEY = 'primlogix_theme'
const THEMES = {
  SYSTEM: 'system',
  LIGHT: 'light',
  DARK: 'dark'
}

// Obtenir le thème système du navigateur
const getSystemTheme = () => {
  if (typeof window === 'undefined') {
    return THEMES.LIGHT
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT
}

// Obtenir le thème effectif (résolu depuis system si nécessaire)
export const getEffectiveTheme = () => {
  const stored = getTheme()
  if (stored === THEMES.SYSTEM) {
    return getSystemTheme()
  }
  return stored
}

// Obtenir le thème stocké
export const getTheme = () => {
  if (typeof window === 'undefined') {
    return THEMES.SYSTEM
  }
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored && Object.values(THEMES).includes(stored) ? stored : THEMES.SYSTEM
}

// Définir le thème
export const setTheme = (theme) => {
  if (typeof window === 'undefined') {
    return
  }
  if (!Object.values(THEMES).includes(theme)) {
    return
  }
  window.localStorage.setItem(STORAGE_KEY, theme)
  applyTheme()
}

// Appliquer le thème au document
export const applyTheme = () => {
  if (typeof document === 'undefined') {
    return
  }
  const effectiveTheme = getEffectiveTheme()
  const root = document.documentElement
  
  if (effectiveTheme === THEMES.DARK) {
    root.classList.add('dark')
  } else {
    root.classList.remove('dark')
  }
}

// Toggle entre les thèmes (system -> light -> dark -> system)
export const toggleTheme = () => {
  const current = getTheme()
  let next
  
  if (current === THEMES.SYSTEM) {
    next = THEMES.LIGHT
  } else if (current === THEMES.LIGHT) {
    next = THEMES.DARK
  } else {
    next = THEMES.SYSTEM
  }
  
  setTheme(next)
}

// Obtenir l'icône du thème pour l'affichage
export const getThemeIcon = () => {
  const theme = getTheme()
  if (theme === THEMES.SYSTEM) {
    return `
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    `
  } else if (theme === THEMES.LIGHT) {
    return `
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    `
  } else {
    return `
      <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    `
  }
}

// Attacher le toggle de thème
export const attachThemeToggle = (render) => {
  const toggle = document.querySelector('[data-theme-toggle]')
  if (!toggle) {
    return
  }
  toggle.addEventListener('click', () => {
    toggleTheme()
    if (render) {
      render()
    }
  })
}

// Écouter les changements du thème système
export const watchSystemTheme = () => {
  if (typeof window === 'undefined') {
    return
  }
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  mediaQuery.addEventListener('change', () => {
    if (getTheme() === THEMES.SYSTEM) {
      applyTheme()
    }
  })
}

// Initialiser le thème au chargement
export const initTheme = () => {
  applyTheme()
  watchSystemTheme()
}
