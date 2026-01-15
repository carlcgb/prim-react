import { getContent } from '../data/content.js'

export const pageHero = (title, subtitle) => `
  <section class="bg-brand-navy-900 text-white">
    <div class="container-shell py-16">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
        ${getContent().brandName}
      </p>
      <h1 class="mt-3 text-4xl font-semibold sm:text-5xl">${title}</h1>
      <p class="mt-4 max-w-2xl text-sm text-white/80 sm:text-base">${subtitle}</p>
    </div>
  </section>
`
