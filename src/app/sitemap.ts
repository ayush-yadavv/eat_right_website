import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'
import { siteConfig } from '@/data/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url
  const fallbackDate = new Date('2026-10-14T00:00:00.000Z')

  const getFileDate = (relativeFilePath: string) => {
    try {
      const fullPath = path.join(process.cwd(), relativeFilePath)
      if (fs.existsSync(fullPath)) {
        return fs.statSync(fullPath).mtime
      }
    } catch {
      // Fallback
    }
    return fallbackDate
  }

  const routes = [
    {
      url: baseUrl,
      lastModified: getFileDate('src/app/page.tsx'),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/delete-account`,
      lastModified: getFileDate('src/app/delete-account/page.tsx'),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  let legalRoutes: MetadataRoute.Sitemap = []
  try {
    const docsDir = path.join(process.cwd(), 'public', 'documents')
    if (fs.existsSync(docsDir)) {
      const files = fs.readdirSync(docsDir)
      legalRoutes = files
        .filter((file) => file.endsWith('.md'))
        .map((file) => {
          const slug = file.replace('.md', '')
          let mtime = fallbackDate
          try {
            mtime = fs.statSync(path.join(docsDir, file)).mtime
          } catch {
            // Keep fallback
          }
          return {
            url: `${baseUrl}/legal/${slug}`,
            lastModified: mtime,
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
