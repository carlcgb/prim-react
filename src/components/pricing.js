import { getContent } from '../data/content.js'

export const pricing = () => `
  <section class="section-space parallax-section bg-neutral-100 dark:bg-neutral-950 bg-gradient-to-b from-brand-navy-50/40 via-neutral-100 to-brand-accent-50/40 dark:from-brand-navy-900/50 dark:via-neutral-950 dark:to-brand-navy-900/50">
    <div class="container-shell">
      <div class="text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
          ${getContent().pricing.eyebrow}
        </p>
        <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
          ${getContent().pricing.title}
        </h2>
      </div>
      <div class="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div class="space-y-4">
          <h3 class="text-2xl font-semibold text-brand-navy-900 dark:text-white">
            ${getContent().pricing.introTitle}
          </h3>
          <p class="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
            ${getContent().pricing.introText}
          </p>
          <ul class="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
            ${getContent()
              .pricing.introHighlights.map((item) => `<li>• ${item}</li>`)
              .join('')}
          </ul>
        </div>
        <div class="pricing-gallery">
          <div class="pricing-image overflow-hidden rounded-2xl" style="--float-delay: 0s">
            <img
              src="${getContent().pricing.gallery[0].src}"
              alt="${getContent().pricing.gallery[0].alt}"
              class="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div class="mt-12 grid gap-6 lg:grid-cols-3">
        ${getContent().pricing.plans.map(
          (plan, index) => `
            <article class="card ${
              plan.highlight ? 'border-brand-accent-200 dark:border-brand-accent-700 shadow-md' : ''
            }" data-reveal style="--reveal-delay: ${index * 80}ms">
              <p class="text-sm font-semibold text-brand-navy-900 dark:text-white">${plan.name}</p>
              <div class="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-300">
                <p class="text-3xl font-semibold text-brand-navy-900 dark:text-white">${plan.price}</p>
                <p class="text-xs uppercase tracking-[0.15em]">${plan.priceNote}</p>
                <p class="text-xs text-neutral-500 dark:text-neutral-400">${plan.monthlyAlt}</p>
              </div>
              <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">${plan.description}</p>
              <ul class="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                ${plan.features.map((feature) => `<li>• ${feature}</li>`).join('')}
              </ul>
              <a
                class="pill-btn mt-6 w-full justify-center bg-brand-accent-500 text-white hover:bg-brand-accent-600 dark:bg-brand-accent-600 dark:hover:bg-brand-accent-700"
                href="/company.html#contact"
              >
                ${getContent().pricing.cta}
              </a>
            </article>
          `
        ).join('')}
      </div>
      <div class="mt-8 text-center text-xs text-neutral-600 dark:text-neutral-400">
        <p>${getContent().pricing.minimumNote}</p>
        <p>${getContent().pricing.setupNote}</p>
        <p>${getContent().pricing.osNote}</p>
      </div>
    </div>
  </section>
`
