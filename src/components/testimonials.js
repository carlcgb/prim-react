import { getContent } from '../data/content.js'

export const testimonials = () => `
  <section class="section-space">
    <div class="container-shell">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600">
          ${getContent().testimonials.eyebrow}
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 sm:text-4xl">
          ${getContent().testimonials.title}
        </h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        ${getContent().testimonials.items.map(
          (item, index) => `
            <article class="card" data-reveal style="--reveal-delay: ${index * 80}ms">
              <div class="text-sm text-brand-accent-500">${getContent().testimonials.starsLabel}</div>
              <p class="mt-4 text-sm text-neutral-600">${item.quote}</p>
              <div class="mt-6">
                <p class="text-sm font-semibold text-brand-navy-900">${item.name}</p>
                <p class="text-xs text-neutral-500">${item.title}</p>
              </div>
            </article>
          `
        ).join('')}
      </div>
    </div>
  </section>
`
