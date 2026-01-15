import { getContent } from '../data/content.js'
import { sectionHeader } from './sectionHeader.js'

export const contact = () => `
  <section class="section-space" id="contact">
    <div class="container-shell">
      ${sectionHeader(
        getContent().company.sectionEyebrows.contact,
        getContent().company.contact.title,
        getContent().company.contact.subtitle
      )}
      <div class="mt-8 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div class="space-y-4" data-reveal style="--reveal-delay: 0ms">
          <p class="text-sm text-neutral-600 dark:text-neutral-300">${getContent().company.contact.address}</p>
          <a class="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-brand-accent-600 dark:hover:text-brand-accent-400 transition-colors" href="tel:${getContent().company.contact.phone.replace(/\\s/g, '')}">
            ${getContent().company.contact.phone}
          </a>
          <a class="block text-sm text-neutral-600 dark:text-neutral-300 hover:text-brand-accent-600 dark:hover:text-brand-accent-400 transition-colors" href="mailto:${getContent().company.contact.email}">
            ${getContent().company.contact.email}
          </a>
          <a class="pill-btn bg-brand-accent-500 text-white hover:bg-brand-accent-600 dark:bg-brand-accent-600 dark:hover:bg-brand-accent-700" href="mailto:${getContent().company.contact.email}">
            ${getContent().company.contact.cta}
          </a>
        </div>
        <div class="overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800" data-reveal style="--reveal-delay: 120ms">
          <iframe
            title="PRIMLogix map"
            class="h-64 w-full border-0 lg:h-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="${getContent().company.contact.mapEmbedUrl}"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
`
