export const initScrollReveal = (root = document) => {
  const elements = Array.from(root.querySelectorAll('[data-reveal]'))
  if (!elements.length) {
    return
  }

  if (!('IntersectionObserver' in window)) {
    elements.forEach((el) => el.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 }
  )

  elements.forEach((el) => observer.observe(el))
}

export const initCounters = (root = document) => {
  const counters = Array.from(root.querySelectorAll('[data-count]'))
  if (!counters.length) {
    return
  }

  const animate = (el) => {
    if (el.dataset.animated) {
      return
    }
    el.dataset.animated = 'true'
    const target = Number(el.dataset.count)
    if (!Number.isFinite(target)) {
      return
    }
    const duration = 1200
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const value = Math.floor(target * progress)
      el.textContent = value.toString()
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        el.textContent = target.toString()
      }
    }

    requestAnimationFrame(step)
  }

  if (!('IntersectionObserver' in window)) {
    counters.forEach(animate)
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.6 }
  )

  counters.forEach((el) => observer.observe(el))
}

export const initAnimations = (root = document) => {
  initScrollReveal(root)
  initCounters(root)
}
