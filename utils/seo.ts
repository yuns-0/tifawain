import type { MetaTags } from '@nuxtjs/seo'

export interface SEOConfig {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: 'website' | 'article' | 'profile'
  publishedTime?: string
  modifiedTime?: string
  author?: string
  tags?: string[]
}

export function generateSEOTags(config: SEOConfig): MetaTags {
  const siteUrl = useRuntimeConfig().public.siteUrl
  const defaultTitle = 'Tifawin Automation Agency - Automate. Design. Grow.'
  const defaultDescription = 'We help businesses streamline operations with custom automation, beautiful design, and scalable development. From idea to live in weeks, not months.'

  const title = config.title ? `${config.title} | Tifawin` : defaultTitle
  const description = config.description || defaultDescription
  const image = config.image || `${siteUrl}/og-image.jpg`
  const url = config.url || siteUrl

  return {
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogUrl: url,
    ogType: config.type || 'website',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
    canonical: url,
    ...(config.publishedTime && { articlePublishedTime: config.publishedTime }),
    ...(config.modifiedTime && { articleModifiedTime: config.modifiedTime }),
    ...(config.author && { articleAuthor: config.author }),
    ...(config.tags && { articleTag: config.tags })
  }
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Tifawin Automation Agency',
    alternateName: 'Tifawin',
    url: 'https://tifawin.agency',
    logo: 'https://tifawin.agency/logo.png',
    description: 'Automate. Design. Grow. We help businesses streamline operations with custom automation, beautiful design, and scalable development.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Casablanca',
      addressCountry: 'Morocco'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-555-0199',
      contactType: 'customer service',
      email: 'hello@tifawin.agency'
    },
    sameAs: [
      'https://linkedin.com/company/tifawin',
      'https://twitter.com/tifawin',
      'https://github.com/tifawin',
      'https://behance.net/tifawin',
      'https://dribbble.com/tifawin'
    ],
    offers: {
      '@type': 'AggregateOffer',
      offerCount: '6',
      offers: [
        {
          '@type': 'Offer',
          name: 'Code Development',
          description: 'Custom web applications, APIs, and integrations'
        },
        {
          '@type': 'Offer',
          name: 'Branding',
          description: 'Brand strategy, visual identity, and guidelines'
        },
        {
          '@type': 'Offer',
          name: 'Design',
          description: 'UI/UX design, prototypes, and design systems'
        },
        {
          '@type': 'Offer',
          name: 'Automation',
          description: 'Workflow automation with n8n, Zapier, and custom solutions'
        },
        {
          '@type': 'Offer',
          name: 'Social Media',
          description: 'Content strategy, scheduling, and analytics'
        },
        {
          '@type': 'Offer',
          name: 'AI Agents',
          description: 'Conversational bots and intelligent automation'
        }
      ]
    }
  }
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tifawin Automation Agency',
    url: 'https://tifawin.agency',
    description: 'Automate. Design. Grow. We help businesses streamline operations with custom automation, beautiful design, and scalable development.',
    publisher: {
      '@type': 'Organization',
      name: 'Tifawin Automation Agency'
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://tifawin.agency/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateArticleSchema(article: {
  title: string
  description: string
  url: string
  image?: string
  publishedTime: string
  modifiedTime?: string
  author: string
  tags?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: article.url,
    image: article.image || 'https://tifawin.agency/og-image.jpg',
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tifawin Automation Agency',
      logo: {
        '@type': 'ImageObject',
        url: 'https://tifawin.agency/logo.png'
      }
    },
    ...(article.tags && {
      keywords: article.tags.join(', ')
    })
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  url: string
  price?: string
  priceCurrency?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'Organization',
      name: 'Tifawin Automation Agency'
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: service.priceCurrency || 'USD'
      }
    })
  }
}
