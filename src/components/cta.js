import { getContent } from '../data/content.js'

export const cta = () => `
  <section class="section-space parallax-surface">
    <div class="container-shell">
      <div class="rounded-3xl bg-brand-navy-900 p-8 text-white shadow-lg sm:p-12">
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div class="space-y-4">
            <h2 class="text-3xl font-semibold sm:text-4xl">
              ${getContent().cta.title}
            </h2>
            <p class="text-sm text-white/80 sm:text-base">
              ${getContent().cta.subtitle}
            </p>
          </div>
          <form
            class="grid gap-4 rounded-2xl bg-white/10 p-6 text-sm text-white/80"
            action="mailto:info@primlogix.com"
            method="post"
            enctype="text/plain"
          >
            <label class="grid gap-2">
              <span class="text-xs uppercase tracking-[0.2em]">${getContent().cta.form.nameLabel}</span>
              <input
                class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/60"
                name="name"
                placeholder="${getContent().cta.form.namePlaceholder}"
                required
              />
            </label>
            <label class="grid gap-2">
              <span class="text-xs uppercase tracking-[0.2em]">${getContent().cta.form.emailLabel}</span>
              <input
                class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/60"
                type="email"
                name="email"
                placeholder="${getContent().cta.form.emailPlaceholder}"
                required
              />
            </label>
            <label class="grid gap-2">
              <span class="text-xs uppercase tracking-[0.2em]">${getContent().cta.form.companyLabel}</span>
              <input
                class="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/60"
                name="company"
                placeholder="${getContent().cta.form.companyPlaceholder}"
              />
            </label>
            <label class="grid gap-2">
              <span class="text-xs uppercase tracking-[0.2em]">${getContent().cta.form.messageLabel}</span>
              <textarea
                class="min-h-[110px] rounded-2xl border border-white/30 bg-white/10 px-4 py-2 text-white placeholder:text-white/60"
                name="message"
                placeholder="${getContent().cta.form.messagePlaceholder}"
                required
              ></textarea>
            </label>
            <button class="pill-btn w-full justify-center bg-white text-brand-navy-900 hover:bg-neutral-100" type="submit">
              ${getContent().cta.form.submitLabel}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
`
