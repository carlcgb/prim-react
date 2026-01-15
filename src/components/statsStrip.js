import { getContent } from '../data/content.js'

const splitStat = (value) => {
  const match = value.match(/^(\d+(?:\.\d+)?)/)
  if (!match) {
    return { text: value }
  }
  return {
    number: match[1],
    suffix: value.slice(match[1].length)
  }
}

export const statsStrip = () => `
  <section class="bg-white dark:bg-neutral-900">
    <div class="container-shell grid gap-6 border-y border-neutral-200 dark:border-neutral-800 py-8 text-center sm:grid-cols-3">
      ${getContent().statsStrip.map(
        (stat, index) => {
          const parts = splitStat(stat.value)
          const delay = index * 90
          return `
          <div>
            ${
              parts.number
                ? `<p class="text-2xl font-semibold text-brand-navy-900 dark:text-white" data-reveal style="--reveal-delay: ${delay}ms">
                    <span data-count="${parts.number}">${parts.number}</span>${parts.suffix ? `<span class="ml-1">${parts.suffix}</span>` : ''}
                  </p>`
                : `<p class="text-2xl font-semibold text-brand-navy-900 dark:text-white" data-reveal style="--reveal-delay: ${delay}ms">${parts.text}</p>`
            }
            <p class="mt-1 text-sm text-neutral-600 dark:text-neutral-300">${stat.label}</p>
          </div>
        `
        }
      ).join('')}
    </div>
  </section>
`
