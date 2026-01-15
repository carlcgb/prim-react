import { header } from '../components/header.js'
import { pageHero } from '../components/pageHero.js'
import { resourceGrid } from '../components/resourceGrid.js'
import { faq } from '../components/faq.js'
import { cta } from '../components/cta.js'
import { footer } from '../components/footer.js'
import { getContent } from '../data/content.js'

export const resourcesPage = () => `
  <div class="flex min-h-screen flex-col">
    ${header()}
    <main class="flex-1">
      ${pageHero(
        getContent().pages.resources.title,
        getContent().pages.resources.subtitle
      )}
      ${resourceGrid()}
      ${faq()}
      ${cta()}
    </main>
    ${footer()}
  </div>
`
