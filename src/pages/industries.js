import { header } from '../components/header.js'
import { pageHero } from '../components/pageHero.js'
import { industryGrid } from '../components/industryGrid.js'
import { testimonials } from '../components/testimonials.js'
import { cta } from '../components/cta.js'
import { footer } from '../components/footer.js'
import { getContent } from '../data/content.js'

export const industriesPage = () => `
  <div class="flex min-h-screen flex-col">
    ${header()}
    <main class="flex-1">
      ${pageHero(
        getContent().pages.industries.title,
        getContent().pages.industries.subtitle
      )}
      ${industryGrid()}
      ${testimonials()}
      ${cta()}
    </main>
    ${footer()}
  </div>
`
