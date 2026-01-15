import { getContent } from '../data/content.js'

export const industryGrid = () => {
  const content = getContent().industryGrid
  
  return `
    <section class="section-space">
      <div class="container-shell">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
            ${content.eyebrow}
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
            ${content.title}
          </h2>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2">
          ${content.sections.map(
            (section, index) => {
              const isAgences = section.title.toLowerCase().includes('agence') || section.title === 'Agences'
              const isGrandesEntreprises = section.title.toLowerCase().includes('grandes entreprises') || section.title === 'Grandes entreprises'
              return `
              <article class="industry-section card group cursor-pointer transition-all duration-300 hover:shadow-md dark:hover:shadow-neutral-900/50 hover:-translate-y-1 ${isAgences ? 'agences-section' : ''}" data-reveal style="--reveal-delay: ${index * 80}ms">
                <h1 class="text-2xl font-semibold text-brand-navy-900 dark:text-white ${isAgences ? 'group-hover:text-red-600 dark:group-hover:text-red-500' : isGrandesEntreprises ? 'group-hover:text-blue-600 dark:group-hover:text-blue-500' : 'group-hover:text-brand-accent-600 dark:group-hover:text-brand-accent-400'} transition-colors duration-300">
                  ${section.title}
                </h1>
                <p class="mt-3 text-base text-neutral-600 dark:text-neutral-300">
                  ${section.description}
                </p>
                <ul class="mt-6 space-y-3">
                  ${section.points.map(
                    point => `
                      <li class="flex items-start text-sm text-neutral-700 dark:text-neutral-300">
                        <svg class="mt-0.5 mr-3 h-5 w-5 flex-shrink-0 text-neutral-700 dark:text-neutral-300 ${isAgences ? 'group-hover:text-red-600 dark:group-hover:text-red-500' : isGrandesEntreprises ? 'group-hover:text-blue-600 dark:group-hover:text-blue-500' : ''} transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>${point}</span>
                      </li>
                    `
                  ).join('')}
                </ul>
              </article>
            `
            }
          ).join('')}
        </div>
      </div>
    </section>
  `
}
