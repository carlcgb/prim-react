import { getContent } from '../data/content.js'

export const footer = () => `
  <footer class="relative bg-brand-navy-800 dark:bg-brand-navy-900 py-12 text-white border-t border-brand-navy-700 dark:border-brand-navy-800">
    <div class="container-shell grid gap-8 lg:grid-cols-[1.3fr_2fr]">
      <div>
        <div class="flex items-center">
          <img 
            src="https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/logo/prim-logo-white.png" 
            alt="${getContent().brandName}"
            class="h-10 w-auto max-w-[180px] flex-shrink-0 object-contain"
            style="aspect-ratio: auto;"
          />
        </div>
        <p class="mt-4 text-sm text-white/70">
          ${getContent().footer.tagline}
        </p>
        <div class="mt-6 flex gap-3 text-xs text-white/70">
          ${getContent()
            .footer.badges.map((badge) => `<span class="rounded-full border border-white/20 px-3 py-1">${badge}</span>`)
            .join('')}
        </div>
      </div>
      <div class="grid gap-6 sm:grid-cols-3">
        ${getContent().footerColumns
          .map(
            (column) => `
              <div>
                <p class="text-sm font-semibold">${column.title}</p>
                <ul class="mt-4 space-y-2 text-sm text-white/70">
                  ${column.links
                    .map(
                      (link) => `
                        <li>
                          <a class="hover:text-white" href="${link.href}">
                            ${link.label}
                          </a>
                        </li>
                      `
                    )
                    .join('')}
                </ul>
              </div>
            `
          )
          .join('')}
      </div>
    </div>
    <div class="container-shell mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
      <span>(c) 2026 PRIMLogix. ${getContent().footer.copy}</span>
      <div class="flex gap-4">
        ${getContent()
          .footer.legal.map(
            (item) => `<a class="hover:text-white" href="${item.href}">${item.label}</a>`
          )
          .join('')}
      </div>
    </div>
  </footer>
`

