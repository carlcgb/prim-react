import { getContent } from '../data/content.js'

export const testimonials = () => `
  <section class="section-space parallax-section bg-gradient-to-b from-transparent via-brand-teal-50/20 to-transparent dark:via-brand-navy-800/30">
    <div class="container-shell">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
          ${getContent().testimonials.eyebrow}
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
          ${getContent().testimonials.title}
        </h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        ${getContent().testimonials.items.map(
          (item, index) => `
            <article class="card" data-reveal style="--reveal-delay: ${index * 80}ms">
              <div class="text-sm text-brand-accent-500 dark:text-brand-accent-400">${getContent().testimonials.starsLabel}</div>
              <p class="mt-4 text-sm text-neutral-600 dark:text-neutral-300">${item.quote}</p>
              <div class="mt-6">
                <p class="text-sm font-semibold text-brand-navy-900 dark:text-white">${item.name}</p>
                <p class="text-xs text-neutral-500 dark:text-neutral-400">${item.title}</p>
              </div>
            </article>
          `
        ).join('')}
      </div>
    </div>
  </section>
`
