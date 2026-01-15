import { getContent } from '../data/content.js'

export const resourceGrid = () => `
  <section class="section-space">
    <div class="container-shell">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
          ${getContent().resourceGrid.eyebrow}
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
          ${getContent().resourceGrid.title}
        </h2>
      </div>
      <div class="mt-10 grid gap-6 lg:grid-cols-3">
        ${getContent().resourceGrid.items.map(
          (item, index) => `
            <article class="card" data-reveal style="--reveal-delay: ${index * 80}ms">
              <h3 class="text-lg font-semibold text-brand-navy-900 dark:text-white">${item.title}</h3>
              <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">${item.desc}</p>
              <button class="mt-5 text-sm font-semibold text-brand-accent-600 dark:text-brand-accent-400 hover:text-brand-accent-700 dark:hover:text-brand-accent-300 transition-colors">
                ${getContent().resourceGrid.cta}
              </button>
            </article>
          `
        ).join('')}
      </div>
    </div>
  </section>
`
