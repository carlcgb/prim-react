import { getContent } from '../data/content.js'

export const howItWorks = () => {
  const content = getContent().howItWorks

  return `
    <section class="section-space parallax-section bg-gradient-to-b from-transparent via-brand-accent-50/30 to-transparent dark:via-brand-navy-900/50">
      <div class="container-shell">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
            ${content.eyebrow}
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
            ${content.title}
          </h2>
          <p class="mt-4 text-base text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
            ${content.subtitle}
          </p>
        </div>
        <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          ${content.steps.map(
            (step, index) => `
              <article class="card text-center group" data-reveal style="--reveal-delay: ${index * 100}ms">
                <div class="mb-4 flex justify-center">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-brand-accent-50 dark:bg-brand-accent-900/30 text-3xl group-hover:scale-110 transition-transform duration-300">
                    ${step.icon}
                  </div>
                </div>
                <h3 class="text-lg font-semibold text-brand-navy-900 dark:text-white mb-3">
                  ${step.title}
                </h3>
                <p class="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  ${step.description}
                </p>
              </article>
            `
          ).join('')}
        </div>
        <div class="mt-10 text-center">
          <a 
            href="${content.cta.link}" 
            class="pill-btn inline-flex bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 shadow-sm transition-colors"
          >
            ${content.cta.text}
            <svg class="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  `
}
