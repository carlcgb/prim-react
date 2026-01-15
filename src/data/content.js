import { getLocale } from '../utils/i18n.js'

const CONTENT = {
  en: {
    brandName: 'PRIMLogix',
    slogan: 'Innovative Staffing Software: Automate, Collaborate, Succeed – Pleasure Included.',
    definition:
      'PRIMLogix is an all-in-one ATS/CRM platform for staffing agencies, automating recruitment, candidate matching, scheduling, billing, and payroll while prioritizing human connections and efficiency.',
    navLinks: [
      { label: 'Home', href: '/index.html' },
      { label: 'Solutions', href: '/solutions.html' },
      { label: 'Industries', href: '/industries.html' },
      { label: 'Resources', href: '/resources.html' },
      { label: 'Pricing', href: '/pricing.html' },
      { label: 'Company', href: '/company.html' }
    ],
    hero: {
      badge: 'Staffing software for agencies',
      title: 'Automate recruitment, matching, and management with PRIMLogix.',
      subtitle:
        'PRIMLogix is an all-in-one ATS/CRM platform for staffing agencies, automating recruitment, candidate matching, scheduling, billing, and payroll while prioritizing human connections and efficiency.',
      primaryCta: 'Schedule a demo',
      secondaryCta: 'Explore the platform',
      stats: [
        { value: '75%', label: 'Faster placement cycles' },
        { value: '99.9%', label: 'Uptime target' },
        { value: '2017', label: 'CHUV success since' }
      ],
      panelLabel: 'Operations snapshot',
      panelVersion: '2026 Release',
      panelItems: [
        'Automated candidate matching in minutes',
        'Compliance-ready workflows and audit trails',
        'Billing & payroll in one flow'
      ],
      panelNote: 'Clear dashboards built for modern staffing teams.'
    },
    statsStrip: [
      { value: '20+', label: 'Experts in dev, QA, and support' },
      { value: '3x', label: 'More operational visibility' },
      { value: '24/7', label: 'Global client support' }
    ],
    features: {
      eyebrow: 'Core value',
      title: 'End-to-end staffing software that scales with your agency.',
      items: [
        {
          title: 'ATS + CRM unified',
          description: 'Track candidates, clients, and placements in one workspace.'
        },
        {
          title: 'Recruitment automation',
          description: 'Automate sourcing, matching, and follow-ups without losing the human touch.'
        },
        {
          title: 'Scheduling + staffing',
          description: 'Plan shifts, manage availability, and keep teams aligned.'
        },
        {
          title: 'Billing + payroll',
          description: 'Generate invoices and payroll faster with fewer errors.'
        },
        {
          title: 'BI dashboards',
          description: 'Make confident decisions with real-time KPIs and reports.'
        },
        {
          title: 'Collaboration',
          description: 'Share notes, tasks, and approvals across the agency.'
        }
      ]
    },
    splitShowcase: {
      eyebrow: 'Human-first experience',
      title: 'Put people at the center while your operations run on autopilot.',
      subtitle:
        'Surface the right data, automate routine steps, and keep every stakeholder aligned in a secure workspace.',
      bullets: [
        'Live dashboards for recruiters and managers',
        'Fast approvals with automated workflows',
        'Complete history with export-ready records'
      ],
      panelLabel: 'Recruiting team',
      panelStatus: 'Updated',
      panelItems: [
        'Compliance report ready for review',
        'Automation workflow running',
        'Personalized notifications delivered'
      ]
    },
    testimonials: {
      eyebrow: 'Client results',
      title: 'Agencies moving faster with PRIMLogix.',
      starsLabel: '5 stars',
      items: [
        {
          name: 'Operations Director',
          title: 'National Staffing Group',
          quote: 'We cut placement time dramatically while keeping candidates engaged.'
        },
        {
          name: 'VP Technology',
          title: 'Healthcare Staffing',
          quote: 'The ATS/CRM is finally unified—our teams see the same data in real time.'
        },
        {
          name: 'Client Success Lead',
          title: 'Multi-branch Agency',
          quote: 'PRIMLogix made onboarding smooth and metrics easy to track.'
        }
      ]
    },
    pricing: {
      eyebrow: 'Pricing',
      title: 'Flexible plans that grow with your agency.',
      introTitle: 'Modern staffing ops, beautifully surfaced.',
      introText:
        'Explore dashboards, mobile timesheets, and communications built for recruiters, managers, and candidates.',
      introHighlights: [
        'Executive dashboards with live KPIs',
        'Mobile-friendly timesheets and approvals',
        'In-app communications for faster placement'
      ],
      gallery: [
        {
          src: '/nouveau%20site%202026/PRIM%20Trio%20different.png',
          alt: 'PRIMLogix desktop dashboards preview'
        }
      ],
      plans: [
        {
          name: 'Recruiter',
          price: '$129',
          priceNote: 'License / Month (Billed Yearly)',
          monthlyAlt: 'Monthly option: $140 / license',
          description: 'Core recruitment stack for staffing agencies.',
          features: [
            'Files management',
            'CRM',
            'Permanent recruitment (ATS)',
            'Invoicing',
            'Staff remuneration',
            'Resume parsing',
            'Web portal',
            'Support and training center'
          ]
        },
        {
          name: 'Complete',
          price: '$179',
          priceNote: 'License / Month (Billed Yearly)',
          monthlyAlt: 'Monthly option: $195 / license',
          description: 'Includes all Recruiter features plus advanced staffing.',
          features: [
            'All Recruiter features',
            'Payroll preparation',
            'Timesheets',
            'Employee geolocated timestamp',
            'Multi-level paid rate management',
            'Multi-level billing rate management',
            'Work history management',
            'Preferences history management',
            'Temporary staffing and replacements',
            'Batch request entry',
            'Complex schedules management',
            'Group requests management',
            'Event management',
            'Assignment of candidates'
          ],
          highlight: true
        },
        {
          name: 'Mobile App Option',
          price: '$204',
          priceNote: 'License / Month (Billed Yearly)',
          monthlyAlt: 'Monthly option: $220 / license',
          description: 'Includes Complete plus mobile app capabilities.',
          features: [
            'All Complete features',
            'White label',
            'Available in Apple Store/Google Play',
            'Push notifications',
            'Social media authentication'
          ]
        }
      ],
      cta: 'Request more info',
      minimumNote: 'A minimum of five (5) licenses is required.',
      setupNote: 'These prices are subject to setup costs.',
      osNote:
        'For an additional $50 per license/month, add Android and iOS access (tablet recommended).'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers to get started faster.',
      items: [
        {
          q: 'How fast can we go live?',
          a: 'Most teams launch in weeks, with guided onboarding and migration support.'
        },
        {
          q: 'Is data secure and compliant?',
          a: 'Yes. Role-based access, encryption, secure hosting, and GDPR/Quebec privacy alignment.'
        },
        {
          q: 'Does PRIMLogix integrate with existing tools?',
          a: 'We support modern APIs and can tailor integrations for payroll and reporting.'
        }
      ]
    },
    resourceGrid: {
      eyebrow: 'Resources',
      title: 'Guides and tools for modern staffing teams.',
      items: [
        {
          title: 'ATS/CRM buyer guide',
          desc: 'Questions to evaluate staffing software and automation ROI.'
        },
        {
          title: 'Implementation checklist',
          desc: 'Launch plan for recruiters, clients, and compliance.'
        },
        {
          title: 'Security brief',
          desc: 'A quick overview of PRIMLogix security and privacy controls.'
        }
      ],
      cta: 'Download'
    },
    industryGrid: {
      eyebrow: 'Industries',
      title: 'Built for agencies across sectors.',
      items: [
        { title: 'Healthcare', note: 'Credential tracking and compliance workflows.' },
        { title: 'Manufacturing', note: 'Shift planning and time-sensitive staffing.' },
        { title: 'Technology', note: 'Fast placements with skills-based matching.' },
        { title: 'Hospitality', note: 'High-volume scheduling with real-time updates.' },
        { title: 'Logistics', note: 'Dispatch-ready staffing and workforce visibility.' },
        { title: 'Professional services', note: 'Client-ready reporting and CRM insights.' }
      ]
    },
    cta: {
      title: 'Ready to automate staffing with PRIMLogix?',
      subtitle:
        'Book a demo to see recruitment automation, matching, and management in one platform.',
      form: {
        nameLabel: 'Full name',
        namePlaceholder: 'Your name',
        emailLabel: 'Work email',
        emailPlaceholder: 'name@company.com',
        companyLabel: 'Company',
        companyPlaceholder: 'Agency name',
        messageLabel: 'Message',
        messagePlaceholder: 'Tell us about your staffing needs.',
        submitLabel: 'Schedule a demo'
      }
    },
    footer: {
      tagline: 'Staffing software that keeps people at the center.',
      badges: ['GDPR', 'Loi 25', 'SOC 2 aligned'],
      legal: [
        { label: 'Legal notice', href: '/company.html' },
        { label: 'Privacy policy', href: '/company.html' }
      ],
      copy: 'All rights reserved.'
    },
    footerColumns: [
      {
        title: 'Solutions',
        links: [
          { label: 'ATS & CRM', href: '/solutions.html' },
          { label: 'Recruitment automation', href: '/solutions.html' },
          { label: 'Scheduling', href: '/solutions.html' },
          { label: 'Billing & payroll', href: '/solutions.html' }
        ]
      },
      {
        title: 'Company',
        links: [
          { label: 'About PRIMLogix', href: '/company.html' },
          { label: 'Team', href: '/company.html#team' },
          { label: 'Timeline', href: '/company.html#timeline' },
          { label: 'Security', href: '/company.html#security' }
        ]
      },
      {
        title: 'Contact',
        links: [
          { label: 'Schedule a demo', href: '/company.html#contact' },
          { label: 'info@primlogix.com', href: 'mailto:info@primlogix.com' },
          { label: '1 844-849-7746', href: 'tel:18448497746' }
        ]
      }
    ],
    pages: {
      solutions: {
        title: 'Staffing solutions that fit your workflows',
        subtitle: 'Modular capabilities for recruitment, matching, and agency operations.'
      },
      industries: {
        title: 'Staffing software for every sector',
        subtitle: 'Adaptable workflows for healthcare, tech, manufacturing, and more.'
      },
      resources: {
        title: 'Resources for staffing leaders',
        subtitle: 'Guides, templates, and checklists to accelerate adoption.'
      },
      pricing: {
        title: 'Transparent pricing built for growth',
        subtitle: 'Choose a plan, then scale with integrations and automation.'
      },
      company: {
        title: 'Meet the team behind PRIMLogix',
        subtitle: 'Innovation, collaboration, and measurable results since 2004.'
      }
    },
    company: {
      sectionEyebrows: {
        missionVision: 'Mission & Vision',
        team: 'Leadership',
        timeline: 'History',
        security: 'Security',
        contact: 'Contact'
      },
      missionVisionTitle: 'Built for people-first staffing',
      mission: {
        title: 'Mission',
        text:
          'Empower staffing agencies to automate operations, match candidates perfectly, and grow sustainably with intuitive, end-to-end software tailored to HR needs.'
      },
      vision: {
        title: 'Vision',
        text:
          'Become the worldwide leader in staffing tech: a scalable, AI-enhanced platform redefining recruitment through innovation, collaboration, and unmatched client success.'
      },
      objectives: {
        title: 'Objectives',
        items: [
          'Boost placement efficiency by 75% through automation.',
          'Scale agencies with open, collaborative tools.',
          'Deliver responsive, human support for seamless onboarding.'
        ]
      },
      security: {
        title: 'Security you can trust',
        text:
          'PRIMLogix uses robust encryption, role-based access, secure cloud hosting, and regular audits. Client data stays confidential with 99.9% uptime targets and SOC 2-aligned practices compliant with GDPR and Quebec privacy laws.'
      },
      team: {
        title: 'Leadership team',
        subtitle: '20+ experts in development, QA, and support behind every release.',
        members: [
          {
            name: 'Etienne Paquette',
            role: 'CEO & CTO',
            bio: '20+ years evolving PRIM from dental staffing to a global agency platform.',
            photo:
              'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop'
          },
          {
            name: 'Isabelle Caussignac',
            role: 'Client Success Lead',
            bio: 'Guides agencies through onboarding with a focus on measurable outcomes.',
            photo:
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop'
          },
          {
            name: 'Bruno Pelletier',
            role: 'Lead Developer',
            bio: 'Drives product quality, automation, and reliable deployments.',
            photo:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop'
          },
          {
            name: 'Product & QA Team',
            role: '20+ specialists',
            bio: 'Experts in automation, compliance, and performance across industries.',
            photo:
              'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=600&auto=format&fit=crop'
          }
        ]
      },
      timeline: {
        title: 'PRIMLogix timeline',
        items: [
          { year: '2004', detail: 'First code written.' },
          { year: '2005', detail: 'PRIMLogix v1 launched.' },
          { year: '2009', detail: 'Redesigned for staffing agencies.' },
          { year: '2010', detail: 'v3 released and incorporation.' },
          { year: '2016', detail: 'PRIM Web and CV parsing.' },
          { year: '2017', detail: 'v4 and CHUV (Switzerland) adoption.' },
          { year: '2022', detail: 'v5 modernized platform launch.' },
          { year: '2023', detail: 'Mobile app release.' },
          { year: '2024', detail: 'Swiss expansions.' },
          { year: '2025-2026', detail: 'AI matching and global rollouts.' }
        ]
      },
      contact: {
        title: 'Contact PRIMLogix',
        subtitle: 'Schedule a demo or visit us in Quebec.',
        address: '201 Rue Saint-Louis, Local 103, Saint-Jean-sur-Richelieu, Quebec J3B 1X9',
        phone: '1 844-849-7746',
        email: 'info@primlogix.com',
        cta: 'Schedule a demo',
        mapEmbedUrl:
          'https://www.google.com/maps?q=201%20Rue%20Saint-Louis%2C%20Local%20103%2C%20Saint-Jean-sur-Richelieu%2C%20QC%20J3B%201X9&output=embed'
      }
    }
  },
  fr: {
    brandName: 'PRIMLogix',
    slogan:
      'Logiciel de placement innovant : automatisez, collaborez, reussissez – le plaisir en plus.',
    definition:
      'PRIMLogix est une plateforme ATS/CRM tout-en-un pour agences de placement, qui automatise le recrutement, le matching, les horaires, la facturation et la paie tout en priorisant le lien humain.',
    navLinks: [
      { label: 'Accueil', href: '/index.html' },
      { label: 'Solutions', href: '/solutions.html' },
      { label: 'Industries', href: '/industries.html' },
      { label: 'Ressources', href: '/resources.html' },
      { label: 'Tarifs', href: '/pricing.html' },
      { label: 'Entreprise', href: '/company.html' }
    ],
    hero: {
      badge: 'Logiciel de placement pour agences',
      title: 'Automatisez le recrutement, le matching et la gestion avec PRIMLogix.',
      subtitle:
        'PRIMLogix est une plateforme ATS/CRM tout-en-un pour agences de placement, qui automatise le recrutement, le matching, les horaires, la facturation et la paie tout en priorisant le lien humain.',
      primaryCta: 'Planifier une demo',
      secondaryCta: 'Explorer la plateforme',
      stats: [
        { value: '75%', label: 'Placements plus rapides' },
        { value: '99,9%', label: 'Cible de disponibilite' },
        { value: '2017', label: 'Succes CHUV depuis' }
      ],
      panelLabel: 'Instantane operations',
      panelVersion: 'Version 2026',
      panelItems: [
        'Matching automatise en quelques minutes',
        'Workflows conformes et traces d’audit',
        'Facturation et paie dans un meme flux'
      ],
      panelNote: 'Tableaux clairs pour les equipes de placement modernes.'
    },
    statsStrip: [
      { value: '20+', label: 'Experts en dev, QA et support' },
      { value: '3x', label: 'Plus de visibilite operationnelle' },
      { value: '24/7', label: 'Support client mondial' }
    ],
    features: {
      eyebrow: 'Valeur cle',
      title: 'Un ATS/CRM complet qui evolue avec votre agence.',
      items: [
        {
          title: 'ATS + CRM unifies',
          description: 'Suivez candidats, clients et placements dans un seul espace.'
        },
        {
          title: 'Automatisation du recrutement',
          description: 'Sourcing, matching et relances sans perdre le lien humain.'
        },
        {
          title: 'Horaires + affectations',
          description: 'Planifiez les quarts, la disponibilite et les equipes.'
        },
        {
          title: 'Facturation + paie',
          description: 'Accélérez la paie et la facturation avec moins d’erreurs.'
        },
        {
          title: 'BI et tableaux de bord',
          description: 'Decidez vite avec des KPI et rapports temps reel.'
        },
        {
          title: 'Collaboration',
          description: 'Notes, taches et validations partagees pour l’agence.'
        }
      ]
    },
    splitShowcase: {
      eyebrow: 'Experience humaine',
      title: 'Mettez les personnes au centre, laissez l’operationnel en pilote automatique.',
      subtitle:
        'Mettez en avant les bons indicateurs, automatisez les routines et alignez chaque intervenant dans un environnement securise.',
      bullets: [
        'Tableaux en temps reel pour recruteurs et gestionnaires',
        'Validations rapides par workflow',
        'Historique complet et exportable'
      ],
      panelLabel: 'Equipe de recrutement',
      panelStatus: 'Mise a jour',
      panelItems: [
        'Rapport de conformite pret',
        'Workflow d’automatisation actif',
        'Notifications personnalisees envoyees'
      ]
    },
    testimonials: {
      eyebrow: 'Resultats clients',
      title: 'Des agences qui avancent plus vite avec PRIMLogix.',
      starsLabel: '5 etoiles',
      items: [
        {
          name: 'Directeur des operations',
          title: 'Groupe de placement national',
          quote: 'Nous avons reduit le cycle de placement tout en gardant l’humain au centre.'
        },
        {
          name: 'VP Technologie',
          title: 'Placement en sante',
          quote: 'ATS et CRM enfin unifies, la donnee est coherente partout.'
        },
        {
          name: 'Responsable experience client',
          title: 'Agence multi-sites',
          quote: 'L’onboarding est fluide et les KPI sont simples a suivre.'
        }
      ]
    },
    pricing: {
      eyebrow: 'Tarifs',
      title: 'Des forfaits flexibles pour la croissance.',
      introTitle: 'Des operations modernes, visuellement claires.',
      introText:
        'Tableaux de bord, feuilles de temps mobiles et communications concues pour les recruteurs, gestionnaires et candidats.',
      introHighlights: [
        'Tableaux de bord avec KPI en temps reel',
        'Feuilles de temps et approbations sur mobile',
        'Messagerie integree pour accelerer le placement'
      ],
      gallery: [
        {
          src: '/nouveau%20site%202026/PRIM%20Trio%20different.png',
          alt: 'Apercu des tableaux de bord PRIMLogix'
        }
      ],
      plans: [
        {
          name: 'Recruiter',
          price: '129 $',
          priceNote: 'Licence / mois (facture annuellement)',
          monthlyAlt: 'Option mensuelle : 140 $ / licence',
          description: 'Socle complet pour agences de placement.',
          features: [
            'Gestion des dossiers',
            'CRM',
            'Recrutement permanent (ATS)',
            'Facturation',
            'Rémunération du personnel',
            'Parsing de CV',
            'Portail web',
            'Centre de support et formation'
          ]
        },
        {
          name: 'Complete',
          price: '179 $',
          priceNote: 'Licence / mois (facture annuellement)',
          monthlyAlt: 'Option mensuelle : 195 $ / licence',
          description: 'Inclut toutes les fonctions Recruiter plus la gestion avancée.',
          features: [
            'Toutes les fonctions Recruiter',
            'Préparation de la paie',
            'Feuilles de temps',
            'Pointage géolocalisé',
            'Gestion multi-niveaux des taux payés',
            'Gestion multi-niveaux des taux facturés',
            'Historique de travail',
            'Historique des préférences',
            'Placement temporaire et remplacements',
            'Saisie de demandes en lot',
            'Gestion des horaires complexes',
            'Gestion des demandes de groupe',
            'Gestion d’événements',
            'Affectation des candidats'
          ],
          highlight: true
        },
        {
          name: 'Option app mobile',
          price: '204 $',
          priceNote: 'Licence / mois (facture annuellement)',
          monthlyAlt: 'Option mensuelle : 220 $ / licence',
          description: 'Inclut Complete plus les capacités mobiles.',
          features: [
            'Toutes les fonctions Complete',
            'White label',
            'Disponible sur App Store/Google Play',
            'Notifications push',
            'Authentification via réseaux sociaux'
          ]
        }
      ],
      cta: 'Demander plus d’info',
      minimumNote: 'Un minimum de cinq (5) licences est requis.',
      setupNote: 'Ces prix sont sujets à des frais de mise en place.',
      osNote:
        'Pour 50 $ par licence/mois, ajoutez l’accès Android et iOS (tablette recommandée).'
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Des reponses pour demarrer plus vite.',
      items: [
        {
          q: 'Combien de temps pour le lancement ?',
          a: 'La plupart des equipes demarrent en quelques semaines avec accompagnement.'
        },
        {
          q: 'La securite des donnees est-elle garantie ?',
          a: 'Oui. Acces par role, chiffrement, hebergement securise, conformite RGPD et Loi 25.'
        },
        {
          q: 'PRIMLogix s’integre-t-il aux outils existants ?',
          a: 'Oui, via API modernes et integrations adaptees aux besoins.'
        }
      ]
    },
    resourceGrid: {
      eyebrow: 'Ressources',
      title: 'Guides et outils pour equipes de placement modernes.',
      items: [
        {
          title: 'Guide d’achat ATS/CRM',
          desc: 'Questions pour evaluer un logiciel de placement et son ROI.'
        },
        {
          title: 'Checklist de demarrage',
          desc: 'Plan de lancement pour recruteurs, clients et conformite.'
        },
        {
          title: 'Brief securite',
          desc: 'Resume des controles securite et confidentialite.'
        }
      ],
      cta: 'Telecharger'
    },
    industryGrid: {
      eyebrow: 'Industries',
      title: 'Concu pour les agences de tous secteurs.',
      items: [
        { title: 'Sante', note: 'Suivi des certifications et workflows conformes.' },
        { title: 'Manufacturier', note: 'Gestion des quarts et placements urgents.' },
        { title: 'Technologie', note: 'Matching rapide et compétences precises.' },
        { title: 'Hotellerie', note: 'Planification a volume eleve.' },
        { title: 'Logistique', note: 'Visibilite terrain et suivi des effectifs.' },
        { title: 'Services professionnels', note: 'Reporting client et CRM solide.' }
      ]
    },
    cta: {
      title: 'Pret a automatiser le placement avec PRIMLogix ?',
      subtitle:
        'Planifiez une demo pour decouvrir l’automatisation, le matching et la gestion.',
      form: {
        nameLabel: 'Nom complet',
        namePlaceholder: 'Votre nom',
        emailLabel: 'Email professionnel',
        emailPlaceholder: 'nom@entreprise.com',
        companyLabel: 'Entreprise',
        companyPlaceholder: 'Nom de l’agence',
        messageLabel: 'Message',
        messagePlaceholder: 'Parlez-nous de vos besoins en placement.',
        submitLabel: 'Planifier une demo'
      }
    },
    footer: {
      tagline: 'Un logiciel de placement qui garde l’humain au centre.',
      badges: ['RGPD', 'Loi 25', 'SOC 2 aligne'],
      legal: [
        { label: 'Mentions legales', href: '/company.html' },
        { label: 'Politique de confidentialite', href: '/company.html' }
      ],
      copy: 'Tous droits reserves.'
    },
    footerColumns: [
      {
        title: 'Solutions',
        links: [
          { label: 'ATS & CRM', href: '/solutions.html' },
          { label: 'Automatisation', href: '/solutions.html' },
          { label: 'Planification', href: '/solutions.html' },
          { label: 'Facturation & paie', href: '/solutions.html' }
        ]
      },
      {
        title: 'Entreprise',
        links: [
          { label: 'A propos', href: '/company.html' },
          { label: 'Equipe', href: '/company.html#team' },
          { label: 'Timeline', href: '/company.html#timeline' },
          { label: 'Securite', href: '/company.html#security' }
        ]
      },
      {
        title: 'Contact',
        links: [
          { label: 'Planifier une demo', href: '/company.html#contact' },
          { label: 'info@primlogix.com', href: 'mailto:info@primlogix.com' },
          { label: '1 844-849-7746', href: 'tel:18448497746' }
        ]
      }
    ],
    pages: {
      solutions: {
        title: 'Des solutions de placement adapteés a vos workflows',
        subtitle: 'Fonctions modulaires pour recrutement, matching et operations.'
      },
      industries: {
        title: 'Logiciel de placement pour chaque secteur',
        subtitle: 'Workflows adaptables pour la sante, la tech, le manufacturier et plus.'
      },
      resources: {
        title: 'Ressources pour leaders en placement',
        subtitle: 'Guides, templates et checklists pour accelerer l’adoption.'
      },
      pricing: {
        title: 'Des tarifs transparents pour grandir',
        subtitle: 'Choisissez un plan puis augmentez les integrations et l’automatisation.'
      },
      company: {
        title: 'L’equipe derriere PRIMLogix',
        subtitle: 'Innovation, collaboration et resultats mesurables depuis 2004.'
      }
    },
    company: {
      sectionEyebrows: {
        missionVision: 'Mission & Vision',
        team: 'Equipe',
        timeline: 'Historique',
        security: 'Securite',
        contact: 'Contact'
      },
      missionVisionTitle: 'Concu pour un placement humain',
      mission: {
        title: 'Mission',
        text:
          'Donner aux agences de placement les moyens d’automatiser les operations, d’aligner candidats et clients, et de croitre durablement.'
      },
      vision: {
        title: 'Vision',
        text:
          'Devenir la reference mondiale en technologies de placement : une plateforme evolutive qui redefinit le recrutement par l’innovation et la collaboration.'
      },
      objectives: {
        title: 'Objectifs',
        items: [
          'Ameliorer l’efficacite de placement de 75% grace a l’automatisation.',
          'Aider les agences a grandir avec des outils ouverts et collaboratifs.',
          'Assurer un support humain et reactif pour un onboarding fluide.'
        ]
      },
      security: {
        title: 'Securite et conformite',
        text:
          'Chiffrement robuste, acces par role, hebergement securise et audits reguliers. Confidentialite des donnees, cible 99,9% de disponibilite, alignement SOC 2, RGPD et Loi 25.'
      },
      team: {
        title: 'Equipe dirigeante',
        subtitle: '20+ experts en dev, QA et support derriere chaque livraison.',
        members: [
          {
            name: 'Etienne Paquette',
            role: 'CEO et CTO',
            bio: 'Plus de 20 ans a faire evoluer PRIM vers une plateforme mondiale.',
            photo:
              'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop'
          },
          {
            name: 'Isabelle Caussignac',
            role: 'Responsable succes client',
            bio: 'Accompagne les agences vers des resultats mesurables.',
            photo:
              'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=600&auto=format&fit=crop'
          },
          {
            name: 'Bruno Pelletier',
            role: 'Lead developpeur',
            bio: 'Pilote la qualite produit, l’automatisation et les deploiements.',
            photo:
              'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=600&auto=format&fit=crop'
          },
          {
            name: 'Equipe produit & QA',
            role: '20+ specialistes',
            bio: 'Experts en automatisation, conformite et performance multisecteur.',
            photo:
              'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=600&auto=format&fit=crop'
          }
        ]
      },
      timeline: {
        title: 'Timeline PRIMLogix',
        items: [
          { year: '2004', detail: 'Premier code ecrit.' },
          { year: '2005', detail: 'Lancement de PRIMLogix v1.' },
          { year: '2009', detail: 'Refonte pour les agences de placement.' },
          { year: '2010', detail: 'v3 et incorporation.' },
          { year: '2016', detail: 'PRIM Web et parsing de CV.' },
          { year: '2017', detail: 'v4 et adoption par le CHUV (Suisse).' },
          { year: '2022', detail: 'Lancement de la plateforme v5.' },
          { year: '2023', detail: 'Sortie de l’app mobile.' },
          { year: '2024', detail: 'Expansion en Suisse.' },
          { year: '2025-2026', detail: 'Matching IA et deploiements globaux.' }
        ]
      },
      contact: {
        title: 'Contacter PRIMLogix',
        subtitle: 'Planifiez une demo ou visitez-nous au Quebec.',
        address: '201 Rue Saint-Louis, Local 103, Saint-Jean-sur-Richelieu, Quebec J3B 1X9',
        phone: '1 844-849-7746',
        email: 'info@primlogix.com',
        cta: 'Planifier une demo',
        mapEmbedUrl:
          'https://www.google.com/maps?q=201%20Rue%20Saint-Louis%2C%20Local%20103%2C%20Saint-Jean-sur-Richelieu%2C%20QC%20J3B%201X9&output=embed'
      }
    }
  }
}

export const getContent = () => CONTENT[getLocale()]
