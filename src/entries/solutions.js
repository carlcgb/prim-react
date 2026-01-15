import '../styles/main.css'
import { solutionsPage } from '../pages/solutions.js'
import { applyDocumentLang, attachLangToggle } from '../utils/i18n.js'
import { initTheme, attachThemeToggle } from '../utils/theme.js'
import { attachMobileMenu } from '../utils/mobileMenu.js'
import { initAnimations } from '../utils/animations.js'
import { initFeatureModal } from '../utils/featureModal.js'
import { getContent } from '../data/content.js'

// Exposer getContent globalement pour le modal
if (typeof window !== 'undefined') {
  window.getContent = getContent
}

const app = document.querySelector('#app')
const render = () => {
  applyDocumentLang()
  app.innerHTML = solutionsPage()
  attachLangToggle(render)
  attachThemeToggle(render)
  attachMobileMenu()
  initAnimations()
  initFeatureModal()
}

initTheme()
render()
