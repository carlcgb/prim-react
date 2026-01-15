import { getContent } from '../data/content.js'
import { sectionHeader } from './sectionHeader.js'

const getInitials = (name) =>
  name
    .split(' ')
    .map((part) => part[0])
    .slice(0, 2)
    .join('')

export const team = () => `
  <section class="section-space bg-neutral-100" id="team">
    <div class="container-shell">
      ${sectionHeader(
        getContent().company.sectionEyebrows.team,
        getContent().company.team.title,
        getContent().company.team.subtitle
      )}
      <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        ${getContent()
          .company.team.members.map(
            (member, index) => `
              <article class="card" data-reveal style="--reveal-delay: ${index * 80}ms">
                ${
                  member.photo
                    ? `<img class="h-14 w-14 rounded-full object-cover" src="${member.photo}" alt="${member.name}" loading="lazy" />`
                    : `<div class="flex h-14 w-14 items-center justify-center rounded-full bg-brand-navy-900 text-sm font-semibold text-white">${getInitials(member.name)}</div>`
                }
                <h3 class="mt-4 text-base font-semibold text-brand-navy-900">${member.name}</h3>
                <p class="text-xs text-brand-accent-600">${member.role}</p>
                <p class="mt-3 text-sm text-neutral-600">${member.bio}</p>
              </article>
            `
          )
          .join('')}
      </div>
    </div>
  </section>
`
