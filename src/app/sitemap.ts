import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { siteConfig } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  const routes = ['', '/delete-account', '/privacy'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  let legalRoutes: MetadataRoute.Sitemap = []
  try {
    const docsDir = path.join(process.cwd(), 'public', 'documents')
    if (fs.existsSync(docsDir)) {
      const files = fs.readdirSync(docsDir)
      legalRoutes = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const slug = file.replace('.md', '')
          return {
            url: `${baseUrl}/legal/${slug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
          }
        })
    }
  } catch (error) {
    console.error('Failed to generate sitemap for legal pages:', error)
  }

  return [...routes, ...legalRoutes]
}
