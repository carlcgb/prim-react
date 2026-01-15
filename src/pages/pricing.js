import { header } from '../components/header.js'
import { pageHero } from '../components/pageHero.js'
import { pricing } from '../components/pricing.js'
import { faq } from '../components/faq.js'
import { cta } from '../components/cta.js'
import { footer } from '../components/footer.js'
import { getContent } from '../data/content.js'

export const pricingPage = () => `
  <div class="flex min-h-screen flex-col">
    ${header()}
    <main class="flex-1">
      ${pageHero(
        getContent().pages.pricing.title,
        getContent().pages.pricing.subtitle
      )}
      ${pricing()}
      ${faq()}
      ${cta()}
    </main>
    ${footer()}
  </div>
`
