import { getContent } from '../data/content.js'
import { sectionHeader } from './sectionHeader.js'

export const timeline = () => `
  <section class="section-space" id="timeline">
    <div class="container-shell">
      ${sectionHeader(
        getContent().company.sectionEyebrows.timeline,
        getContent().company.timeline.title,
        null
      )}
      <div class="mt-10 space-y-6 border-l border-neutral-200 pl-6">
        ${getContent()
          .company.timeline.items.map(
            (item, index) => `
              <article class="relative" data-reveal style="--reveal-delay: ${index * 60}ms">
                <span class="absolute -left-[10px] top-2 h-3 w-3 rounded-full bg-brand-accent-500"></span>
                <div class="card">
                  <p class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-accent-600">${item.year}</p>
                  <p class="mt-2 text-sm text-neutral-600">${item.detail}</p>
                </div>
              </article>
            `
          )
          .join('')}
      </div>
    </div>
  </section>
`
