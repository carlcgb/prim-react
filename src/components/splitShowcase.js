import { getContent } from '../data/content.js'

export const splitShowcase = () => `
  <section class="section-space bg-neutral-100">
    <div class="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
      <div class="space-y-4">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600">
          ${getContent().splitShowcase.eyebrow}
        </p>
        <h2 class="text-3xl font-semibold text-brand-navy-900 sm:text-4xl">
          ${getContent().splitShowcase.title}
        </h2>
        <p class="text-sm text-neutral-600 sm:text-base">
          ${getContent().splitShowcase.subtitle}
        </p>
        <ul class="mt-4 space-y-2 text-sm text-neutral-700">
          ${getContent()
            .splitShowcase.bullets.map((item) => `<li>• ${item}</li>`)
            .join('')}
        </ul>
      </div>
      <div class="rounded-3xl bg-white p-6 shadow-md">
        <div class="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
          <div class="flex items-center justify-between text-xs uppercase text-neutral-500">
            <span>${getContent().splitShowcase.panelLabel}</span>
            <span>${getContent().splitShowcase.panelStatus}</span>
          </div>
          <div class="mt-4 space-y-3 text-sm text-neutral-700">
            ${getContent()
              .splitShowcase.panelItems.map(
                (item) => `
                  <div class="rounded-xl bg-white px-4 py-3 shadow-sm">
                    ${item}
                  </div>
                `
              )
              .join('')}
          </div>
        </div>
      </div>
    </div>
  </section>
`
