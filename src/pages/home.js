import { header } from '../components/header.js'
import { hero } from '../components/hero.js'
import { features } from '../components/features.js'
import { statsStrip } from '../components/statsStrip.js'
import { splitShowcase } from '../components/splitShowcase.js'
import { testimonials } from '../components/testimonials.js'
import { pricing } from '../components/pricing.js'
import { faq } from '../components/faq.js'
import { cta } from '../components/cta.js'
import { footer } from '../components/footer.js'

export const homePage = () => `
  <div class="flex min-h-screen flex-col">
    ${header()}
    <main class="flex-1">
      ${hero()}
      ${statsStrip()}
      ${features()}
      ${splitShowcase()}
      ${testimonials()}
      ${pricing()}
      ${faq()}
      ${cta()}
    </main>
    ${footer()}
  </div>
`
