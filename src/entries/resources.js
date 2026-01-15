import '../styles/main.css'
import { resourcesPage } from '../pages/resources.js'
import { applyDocumentLang, attachLangToggle } from '../utils/i18n.js'
import { initTheme, attachThemeToggle } from '../utils/theme.js'
import { attachMobileMenu } from '../utils/mobileMenu.js'
import { initAnimations } from '../utils/animations.js'

const app = document.querySelector('#app')
const render = () => {
  applyDocumentLang()
  app.innerHTML = resourcesPage()
  attachLangToggle(render)
  attachThemeToggle(render)
  attachMobileMenu()
  initAnimations()
}

initTheme()
render()
