import { getContent } from '../data/content.js'

export const faq = () => `
  <section class="section-space">
    <div class="container-shell">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
          ${getContent().faq.eyebrow}
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
          ${getContent().faq.title}
        </h2>
      </div>
      <div class="mt-10 grid gap-4 lg:grid-cols-3">
        ${getContent().faq.items.map(
          (item) => `
            <article class="card">
              <p class="text-sm font-semibold text-brand-navy-900 dark:text-white">${item.q}</p>
              <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">${item.a}</p>
            </article>
          `
        ).join('')}
      </div>
    </div>
  </section>
`
