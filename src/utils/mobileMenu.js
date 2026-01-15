export const attachMobileMenu = () => {
  const toggle = document.querySelector('[data-mobile-toggle]')
  const menu = document.querySelector('[data-mobile-menu]')

  if (!toggle || !menu) {
    return
  }

  const setOpen = (open) => {
    menu.classList.toggle('hidden', !open)
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false')
  }

  setOpen(false)

  toggle.addEventListener('click', () => {
    setOpen(menu.classList.contains('hidden'))
  })

  menu.addEventListener('click', (event) => {
    const link = event.target.closest('a')
    if (link) {
      setOpen(false)
    }
  })
}
