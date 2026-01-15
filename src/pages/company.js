import { header } from '../components/header.js'
import { pageHero } from '../components/pageHero.js'
import { missionVision } from '../components/missionVision.js'
import { team } from '../components/team.js'
import { timeline } from '../components/timeline.js'
import { security } from '../components/security.js'
import { contact } from '../components/contact.js'
import { testimonials } from '../components/testimonials.js'
import { cta } from '../components/cta.js'
import { footer } from '../components/footer.js'
import { getContent } from '../data/content.js'

export const companyPage = () => `
  <div class="flex min-h-screen flex-col">
    ${header()}
    <main class="flex-1">
      ${pageHero(
        getContent().pages.company.title,
        getContent().pages.company.subtitle
      )}
      ${missionVision()}
      ${team()}
      ${timeline()}
      ${security()}
      ${contact()}
      ${testimonials()}
      ${cta()}
    </main>
    ${footer()}
  </div>
`
