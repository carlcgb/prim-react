import { getContent } from '../data/content.js'
import { getLocale } from '../utils/i18n.js'

export const header = () => `
  <header class="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 shadow-sm backdrop-blur">
    <div class="container-shell py-5">
      <div class="flex items-center justify-between">
      <a href="/index.html" class="flex items-center gap-2 text-lg font-semibold text-brand-navy-900">
        <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-brand-navy-900 text-white">
          P
        </span>
        ${getContent().brandName}
      </a>
      <nav class="hidden items-center gap-6 text-sm text-neutral-600 lg:flex">
        ${getContent().navLinks
          .map(
            (link) => `
              <a class="hover:text-brand-navy-900" href="${link.href}">
                ${link.label}
              </a>
            `
          )
          .join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button
          class="rounded-full border border-neutral-300 px-3 py-1 text-xs font-semibold text-neutral-600 hover:border-brand-accent-500 hover:text-brand-accent-600"
          type="button"
          data-lang-toggle
          aria-label="Toggle language"
        >
          ${getLocale() === 'en' ? 'FR' : 'EN'}
        </button>
        <button
          class="inline-flex items-center justify-center rounded-full border border-neutral-300 p-2 text-neutral-600 hover:border-brand-accent-500 hover:text-brand-accent-600 lg:hidden"
          type="button"
          data-mobile-toggle
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span class="sr-only">Open menu</span>
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 7H20M4 12H20M4 17H20"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
            />
          </svg>
        </button>
        <a
          class="pill-btn hidden bg-brand-accent-500 text-white shadow-sm hover:bg-brand-accent-600 sm:inline-flex"
          href="/company.html#contact"
        >
          ${getContent().cta.form.submitLabel}
        </a>
      </div>
      </div>
      <div
        id="mobile-menu"
        class="mobile-nav mt-4 hidden flex-col gap-4 rounded-2xl border border-neutral-200 bg-white/95 p-4 text-sm text-neutral-700 shadow-sm lg:hidden"
        data-mobile-menu
      >
        ${getContent().navLinks
          .map(
            (link) => `
              <a class="hover:text-brand-navy-900" href="${link.href}">
                ${link.label}
              </a>
            `
          )
          .join('')}
        <a
          class="pill-btn w-full justify-center bg-brand-accent-500 text-white shadow-sm hover:bg-brand-accent-600"
          href="/company.html#contact"
        >
          ${getContent().cta.form.submitLabel}
        </a>
      </div>
    </div>
  </header>
`
