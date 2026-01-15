import { header } from '../components/header.js'
import { pageHero } from '../components/pageHero.js'
import { features } from '../components/features.js'
import { splitShowcase } from '../components/splitShowcase.js'
import { cta } from '../components/cta.js'
import { footer } from '../components/footer.js'
import { getContent } from '../data/content.js'

export const solutionsPage = () => `
  <div class="flex min-h-screen flex-col">
    ${header()}
    <main class="flex-1">
      ${pageHero(
        getContent().pages.solutions.title,
        getContent().pages.solutions.subtitle
      )}
      ${features()}
      ${splitShowcase()}
      ${cta()}
    </main>
    ${footer()}
  </div>
`
