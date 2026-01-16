import { getContent } from '../data/content.js'

export const splitShowcase = () => `
  <section class="section-space parallax-section bg-neutral-100 dark:bg-neutral-950 bg-gradient-to-b from-transparent via-brand-accent-50/20 to-transparent dark:via-brand-navy-900/40">
    <div class="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
          ${getContent().splitShowcase.eyebrow}
        </p>
        <h2 class="text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
          ${getContent().splitShowcase.title}
        </h2>
        <p class="text-sm text-neutral-600 dark:text-neutral-300 sm:text-base">
          ${getContent().splitShowcase.subtitle}
        </p>
        <ul class="mt-4 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          ${getContent()
            .splitShowcase.bullets.map((item) => `<li>• ${item}</li>`)
            .join('')}
        </ul>
      </div>
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy-50 to-brand-accent-50 dark:from-brand-navy-900 dark:to-brand-navy-800 p-6 shadow-lg dark:shadow-neutral-900/50 float-slow">
        <div class="relative z-10 rounded-2xl bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm p-4 shadow-xl">
          <img
            src="./nouveau%20site%202026/PRIM%20Trio.png"
            alt="PRIMLogix Dashboard Mockup"
            class="w-full h-auto rounded-xl object-contain shadow-2xl transition-transform duration-300 hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div class="absolute inset-0 bg-gradient-to-br from-brand-accent-500/10 via-transparent to-brand-teal-500/10 pointer-events-none"></div>
      </div>
    </div>
  </section>
`
