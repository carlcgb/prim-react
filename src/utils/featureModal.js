// Gestion du modal de fonctionnalités pour la page solutions
import { getContent } from '../data/content.js'

let isModalOpen = false

const disableScroll = () => {
  const scrollY = window.scrollY
  document.body.style.position = 'fixed'
  document.body.style.top = `-${scrollY}px`
  document.body.style.width = '100%'
}

const enableScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
  if (scrollY) {
    window.scrollTo(0, parseInt(scrollY || '0') * -1)
  }
}

export const initFeatureModal = () => {
  const modal = document.getElementById('feature-modal')
  if (!modal) return

  const backdrop = modal.querySelector('.feature-modal-backdrop')
  const closeBtn = modal.querySelector('.feature-modal-close')
  const content = modal.querySelector('.feature-modal-content')
  const featureCards = document.querySelectorAll('[data-feature-index]')

  // Mapping des images pour chaque feature (index-based)
  const featureImages = [
    'https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/mockups/PRIM Trio.png', // ATS + CRM
    'https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/mockups/PRIM Trio different.png', // Recruitment automation
    'https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/mockups/Cell Connection.png', // Scheduling + staffing
    'https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/mockups/Cell communications.png', // Billing + payroll
    'https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/mockups/Cell tableau bord.png', // BI dashboards
    'https://34.23.76.77/wp-content/uploads/nouveau%20site%202026/mockups/Phone Dashboard.png', // Collaboration
  ]

  // Ouvrir le modal
  const openModal = (index) => {
    const contentData = getContent()
    const features = contentData?.features?.items || []
    const feature = features[index]
    
    if (!feature) return

    // Mettre à jour le contenu
    const titleEl = document.getElementById('modal-title')
    const descEl = document.getElementById('modal-description')
    const screenshotEl = document.getElementById('modal-screenshot')
    
    if (titleEl) titleEl.textContent = feature.title
    if (descEl) descEl.textContent = feature.description
    
    // Mettre à jour l'image selon l'index
    if (screenshotEl && featureImages[index]) {
      screenshotEl.src = featureImages[index]
      screenshotEl.alt = `${feature.title} screenshot`
    }
    
    // Afficher le modal
    modal.classList.remove('hidden')
    disableScroll()
    isModalOpen = true

    // Animation d'entrée
    requestAnimationFrame(() => {
      content.classList.remove('scale-95', 'opacity-0')
      content.classList.add('scale-100', 'opacity-100')
    })
  }

  // Fermer le modal
  const closeModal = () => {
    content.classList.remove('scale-100', 'opacity-100')
    content.classList.add('scale-95', 'opacity-0')
    
    setTimeout(() => {
      modal.classList.add('hidden')
      enableScroll()
      isModalOpen = false
    }, 300)
  }

  // Attacher les événements aux cartes
  featureCards.forEach((card) => {
    card.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      const index = parseInt(card.getAttribute('data-feature-index'), 10)
      if (!isNaN(index)) {
        openModal(index)
      }
    })
  })

  // Fermer au clic sur le backdrop
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        closeModal()
      }
    })
  }

  // Fermer au clic sur le bouton de fermeture
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal)
  }

  // Fermer avec la touche Escape
  const handleEscape = (e) => {
    if (e.key === 'Escape' && isModalOpen) {
      closeModal()
    }
  }
  
  document.addEventListener('keydown', handleEscape)

  // Nettoyer les event listeners si nécessaire
  return () => {
    document.removeEventListener('keydown', handleEscape)
  }
}

