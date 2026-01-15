import { getContent } from '../data/content.js'
import { sectionHeader } from './sectionHeader.js'

export const security = () => {
  const securityData = getContent().company.security
  const certifications = securityData.certifications || []
  
  return `
    <section class="section-space bg-neutral-100 dark:bg-neutral-950" id="security">
      <div class="container-shell">
        ${sectionHeader(
          getContent().company.sectionEyebrows.security,
          securityData.title,
          null
        )}
        <div class="mt-6 card" data-reveal>
          <p class="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">${securityData.text}</p>
        </div>
        ${certifications.length > 0 ? `
          <div class="mt-8">
            <h3 class="text-xl font-semibold text-brand-navy-900 dark:text-white mb-6 text-center">
              Certifications et accréditations
            </h3>
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              ${certifications.map(
                (cert, index) => {
                  const statusColor = cert.status.toLowerCase().includes('conforme') || cert.status.toLowerCase().includes('compliant') || cert.status.toLowerCase().includes('align') || cert.status.toLowerCase().includes('aligned')
                    ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                    : cert.status.toLowerCase().includes('en cours') || cert.status.toLowerCase().includes('progress')
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                    : 'bg-brand-accent-100 dark:bg-brand-accent-900/30 text-brand-accent-700 dark:text-brand-accent-400 border-brand-accent-200 dark:border-brand-accent-800'
                  
                  return `
                    <div class="card group hover:shadow-lg transition-all duration-300" data-reveal style="--reveal-delay: ${index * 100}ms">
                      <div class="flex items-start justify-between gap-4">
                        <div class="flex-1">
                          <h4 class="text-lg font-semibold text-brand-navy-900 dark:text-white mb-2">
                            ${cert.name}
                          </h4>
                          <p class="text-sm text-neutral-600 dark:text-neutral-300 mb-3">
                            ${cert.description}
                          </p>
                          <span class="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${statusColor}">
                            ${cert.status}
                          </span>
                        </div>
                        <div class="flex-shrink-0">
                          <svg class="h-8 w-8 text-brand-accent-500 dark:text-brand-accent-400 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  `
                }
              ).join('')}
            </div>
          </div>
        ` : ''}
      </div>
    </section>
  `
}
