import { getContent } from '../data/content.js'

export const features = (enableModal = false) => {
  return `
    <section class="section-space parallax-section bg-gradient-to-b from-transparent via-brand-accent-50/30 to-transparent dark:via-brand-navy-900/50">
      <div class="container-shell">
        <div class="text-center">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-brand-accent-600 dark:text-brand-accent-400">
            ${getContent().features.eyebrow}
          </p>
          <h2 class="mt-3 text-3xl font-semibold text-brand-navy-900 dark:text-white sm:text-4xl">
            ${getContent().features.title}
          </h2>
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          ${getContent().features.items.map(
            (item, index) => `
              <article 
                class="card ${enableModal ? 'cursor-pointer' : ''}" 
                data-reveal 
                ${enableModal ? `data-feature-index="${index}"` : ''}
                style="--reveal-delay: ${index * 70}ms"
              >
                <div class="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent-50 dark:bg-brand-accent-900/30 text-brand-accent-600 dark:text-brand-accent-400">
                  <span class="text-sm font-semibold">+</span>
                </div>
                <h3 class="text-lg font-semibold text-brand-navy-900 dark:text-white">${item.title}</h3>
                <p class="mt-3 text-sm text-neutral-600 dark:text-neutral-300">${item.description}</p>
              </article>
            `
          ).join('')}
        </div>
      </div>
      ${enableModal ? `
        <div id="feature-modal" class="feature-modal hidden fixed inset-0 z-50 flex items-center justify-center p-4">
          <div class="feature-modal-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
          <div class="feature-modal-content relative z-10 w-full max-w-4xl rounded-3xl bg-white dark:bg-neutral-800 shadow-2xl overflow-hidden transform transition-all duration-300 scale-95 opacity-0">
            <button 
              class="feature-modal-close absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 dark:bg-neutral-700/90 text-neutral-600 dark:text-neutral-300 hover:bg-white dark:hover:bg-neutral-600 transition-colors shadow-lg"
              aria-label="Close modal"
            >
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div class="grid gap-6 lg:grid-cols-2">
              <div class="p-8 lg:p-12">
                <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent-50 dark:bg-brand-accent-900/30 text-brand-accent-600 dark:text-brand-accent-400">
                  <span class="text-lg font-semibold">+</span>
                </div>
                <h3 class="text-3xl font-semibold text-brand-navy-900 dark:text-white mb-4" id="modal-title"></h3>
                <p class="text-base text-neutral-600 dark:text-neutral-300 leading-relaxed" id="modal-description"></p>
              </div>
              <div class="bg-gradient-to-br from-brand-navy-50 to-brand-accent-50 dark:from-brand-navy-900 dark:to-brand-navy-800 p-8 lg:p-12 flex items-center justify-center">
                <div class="w-full max-w-md">
                  <img
                    id="modal-screenshot"
                    src="/nouveau site 2026/PRIM Trio.png"
                    alt="Feature screenshot"
                    class="w-full h-auto rounded-xl shadow-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ` : ''}
    </section>
  `
}
