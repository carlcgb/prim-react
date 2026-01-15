export const sectionHeader = (eyebrow, title, subtitle) => `
  <div class="text-center">
    <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
      ${eyebrow}
    </p>
    <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
      ${title}
    </h2>
    ${
      subtitle
        ? `<p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">${subtitle}</p>`
        : ''
    }
  </div>
`
