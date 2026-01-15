import { getContent } from '../data/content.js'

export const features = () => `
  <section class="section-space">
    <div class="container-shell">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600">
          ${getContent().features.eyebrow}
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 sm:text-4xl">
          ${getContent().features.title}
        </h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        ${getContent().features.items.map(
          (item, index) => `
            <article class="card" data-reveal style="--reveal-delay: ${index * 70}ms">
              <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent-50 text-brand-accent-600">
                <span class="text-sm font-semibold">+</span>
              </div>
              <h3 class="text-lg font-semibold text-brand-navy-900">${item.title}</h3>
              <p class="mt-3 text-sm text-neutral-600">${item.description}</p>
            </article>
          `
        ).join('')}
      </div>
    </div>
  </section>
`
