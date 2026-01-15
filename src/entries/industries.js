import '../styles/main.css'
import { industriesPage } from '../pages/industries.js'
import { applyDocumentLang, attachLangToggle } from '../utils/i18n.js'
import { initTheme, attachThemeToggle } from '../utils/theme.js'
import { attachMobileMenu } from '../utils/mobileMenu.js'
import { initAnimations } from '../utils/animations.js'

const app = document.querySelector('#app')
const render = () => {
  applyDocumentLang()
  app.innerHTML = industriesPage()
  attachLangToggle(render)
  attachThemeToggle(render)
  attachMobileMenu()
  initAnimations()
}

initTheme()
render()
