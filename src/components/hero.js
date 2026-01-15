import { getContent } from '../data/content.js'

export const hero = () => `
  <section class="relative overflow-hidden bg-gradient-to-br from-brand-navy-900 via-brand-navy-800 to-brand-teal-600 text-white parallax-surface">
    <div class="pointer-events-none absolute inset-0 z-0">
      <span class="parallax-orb parallax-orb--one"></span>
      <span class="parallax-orb parallax-orb--two"></span>
    </div>
    <div class="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-brand-navy-900/70 via-brand-navy-800/35 to-brand-navy-900/85"></div>
    <div class="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_30%_15%,rgba(255,255,255,0.2),transparent_45%),radial-gradient(circle_at_70%_20%,rgba(28,155,220,0.35),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(42,199,176,0.3),transparent_42%),radial-gradient(circle_at_10%_80%,rgba(246,141,66,0.28),transparent_38%)]"></div>
    <div class="container-shell relative z-10 grid gap-12 pb-16 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div class="space-y-6">
        <span class="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white" data-reveal>
          ${getContent().hero.badge}
        </span>
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-white/70" data-reveal style="--reveal-delay: 80ms">
          ${getContent().slogan}
        </p>
        <h1 class="text-4xl font-semibold leading-tight sm:text-5xl text-shadow-soft" data-reveal style="--reveal-delay: 120ms">
          ${getContent().hero.title}
        </h1>
        <p class="text-base text-neutral-100/80 sm:text-lg" data-reveal style="--reveal-delay: 160ms">
          ${getContent().hero.subtitle}
        </p>
        <div class="flex flex-wrap gap-4" data-reveal style="--reveal-delay: 200ms">
          <a class="pill-btn bg-white text-brand-navy-900 hover:bg-neutral-100" href="/solutions.html">
            ${getContent().hero.primaryCta}
          </a>
          <a class="pill-btn border border-white/40 text-white hover:border-white" href="/solutions.html">
            ${getContent().hero.secondaryCta}
          </a>
        </div>
        <div class="grid gap-4 text-sm text-white/80 sm:grid-cols-3" data-reveal style="--reveal-delay: 240ms">
          ${getContent()
            .hero.stats.map(
              (stat) => `
                <div>
                  <p class="text-2xl font-semibold text-white">${stat.value}</p>
                  <p>${stat.label}</p>
                </div>
              `
            )
            .join('')}
        </div>
      </div>
      <div class="rounded-3xl bg-white/10 p-6 shadow-lg float-slow">
        <div class="rounded-2xl bg-white/10 p-6 backdrop-blur">
          <div class="space-y-4">
            <div class="flex items-center justify-between text-xs uppercase text-white/70">
              <span>${getContent().hero.panelLabel}</span>
              <span>${getContent().hero.panelVersion}</span>
            </div>
            <div class="grid gap-3">
              ${getContent()
                .hero.panelItems.map(
                  (item) => `
                    <div class="rounded-xl bg-white/15 px-4 py-3 text-sm">
                      ${item}
                    </div>
                  `
                )
                .join('')}
            </div>
          </div>
        </div>
        <p class="mt-4 text-xs text-white/70">
          ${getContent().hero.panelNote}
        </p>
      </div>
    </div>
  </section>
`
