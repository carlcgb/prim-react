import { getContent } from '../data/content.js'
import { getLocale } from '../utils/i18n.js'
import { getThemeIcon } from '../utils/theme.js'

export const header = () => `
  <header class="sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 shadow-sm backdrop-blur">
    <div class="container-shell py-5">
      <div class="flex items-center justify-between">
      <a href="/" class="flex items-center">
        <img 
          src="https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/logo/prim-logo-black.png" 
          alt="${getContent().brandName}"
          class="h-10 w-auto dark:hidden object-contain"
          style="max-width: 180px;"
        />
        <img 
          src="https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/logo/prim-logo-white.png" 
          alt="${getContent().brandName}"
          class="h-10 w-auto hidden dark:block object-contain"
          style="max-width: 180px;"
        />
      </a>
      <nav class="hidden items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300 xl:flex">
        ${getContent().navLinks
          .map(
            (link) => `
              <a class="hover:text-brand-navy-900 dark:hover:text-white transition-colors" href="${link.href}">
                ${link.label}
              </a>
            `
          )
          .join('')}
      </nav>
      <div class="flex items-center gap-3">
        <button
          class="rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:border-brand-accent-500 hover:text-brand-accent-600 dark:hover:border-brand-accent-400 dark:hover:text-brand-accent-400 transition-colors"
          type="button"
          data-theme-toggle
          aria-label="Toggle theme"
          title="Toggle theme"
        >
          ${getThemeIcon()}
        </button>
        <button
          class="rounded-full border border-neutral-300 dark:border-neutral-700 px-3 py-1 text-xs font-semibold text-neutral-600 dark:text-neutral-300 hover:border-brand-accent-500 hover:text-brand-accent-600 dark:hover:border-brand-accent-400 dark:hover:text-brand-accent-400 transition-colors"
          type="button"
          data-lang-toggle
          aria-label="Toggle language"
        >
          ${getLocale() === 'en' ? 'EN' : 'FR'}
        </button>
        <button
          class="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 p-2 text-neutral-600 dark:text-neutral-300 hover:border-brand-accent-500 hover:text-brand-accent-600 dark:hover:border-brand-accent-400 dark:hover:text-brand-accent-400 transition-colors xl:hidden"
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
          class="pill-btn hidden bg-orange-500 text-white shadow-sm hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 xl:inline-flex transition-colors"
          href="https://outlook.office365.com/book/CalendrierPRIMLogix@primlogix.com/s/Ti69MelPTkWrwygAg8qxBg2?ismsaljsauthenabled=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${getContent().cta.form.submitLabel}
        </a>
      </div>
      </div>
      <div
        id="mobile-menu"
        class="mobile-nav mt-4 hidden flex flex-col gap-4 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-neutral-900/95 p-4 text-sm shadow-sm xl:hidden"
        data-mobile-menu
      >
        ${getContent().navLinks
          .map(
            (link) => `
              <a class="block py-2 text-neutral-700 dark:text-neutral-200 hover:text-brand-navy-900 dark:hover:text-white transition-colors font-medium" href="${link.href}">
                ${link.label}
              </a>
            `
          )
          .join('')}
        <a
          class="pill-btn w-full justify-center bg-orange-500 text-white shadow-sm hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700 transition-colors mt-2"
          href="https://outlook.office365.com/book/CalendrierPRIMLogix@primlogix.com/s/Ti69MelPTkWrwygAg8qxBg2?ismsaljsauthenabled=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          ${getContent().cta.form.submitLabel}
        </a>
      </div>
    </div>
  </header>
`

