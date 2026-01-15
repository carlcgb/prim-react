import { getContent } from '../data/content.js'
import { sectionHeader } from './sectionHeader.js'

export const missionVision = () => `
  <section class="section-space" id="mission">
    <div class="container-shell">
      ${sectionHeader(
        getContent().company.sectionEyebrows.missionVision,
        getContent().company.missionVisionTitle,
        null
      )}
      <div class="mt-8 grid gap-6 lg:grid-cols-3">
        <article class="card" data-reveal style="--reveal-delay: 0ms">
          <h3 class="text-lg font-semibold text-brand-navy-900 dark:text-white">${getContent().company.mission.title}</h3>
          <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">${getContent().company.mission.text}</p>
        </article>
        <article class="card" data-reveal style="--reveal-delay: 80ms">
          <h3 class="text-lg font-semibold text-brand-navy-900 dark:text-white">${getContent().company.vision.title}</h3>
          <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">${getContent().company.vision.text}</p>
        </article>
        <article class="card" data-reveal style="--reveal-delay: 160ms">
          <h3 class="text-lg font-semibold text-brand-navy-900 dark:text-white">${getContent().company.objectives.title}</h3>
          <ul class="mt-3 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
            ${getContent()
              .company.objectives.items.map((item) => `<li>• ${item}</li>`)
              .join('')}
          </ul>
        </article>
      </div>
    </div>
  </section>
`
