import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.konnectionsimag.com'
  const currentDate = new Date()
  
  // Main pages
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/appointment`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ]
  
  // Service pages
  const servicePages = [
    'public-relations',
    'crisis-management',
    'digital-media',
    'corporate-communications',
    'financial-communications',
    'specialized-services'
  ]
  
  const serviceRoutes = servicePages.map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Main services page
  const servicesIndexRoute = {
    url: `${baseUrl}/services`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }
  
  // Add blog and other potential pages here in the future
  const otherRoutes = [
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    }
  ]

  return [
    ...routes,
    servicesIndexRoute,
    ...serviceRoutes,
    ...otherRoutes
  ]
}