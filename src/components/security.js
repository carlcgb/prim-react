import { getContent } from '../data/content.js'
import { sectionHeader } from './sectionHeader.js'

export const security = () => `
  <section class="section-space bg-neutral-100" id="security">
    <div class="container-shell">
      ${sectionHeader(
        getContent().company.sectionEyebrows.security,
        getContent().company.security.title,
        null
      )}
      <div class="mt-6 card" data-reveal>
        <p class="text-sm text-neutral-600">${getContent().company.security.text}</p>
      </div>
    </div>
  </section>
`
