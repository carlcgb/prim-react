import '../styles/main.css'
import { companyPage } from '../pages/company.js'
import { applyDocumentLang, attachLangToggle } from '../utils/i18n.js'
import { attachMobileMenu } from '../utils/mobileMenu.js'
import { initAnimations } from '../utils/animations.js'

const app = document.querySelector('#app')
const render = () => {
  applyDocumentLang()
  app.innerHTML = companyPage()
  attachLangToggle(render)
  attachMobileMenu()
  initAnimations()
}

render()
