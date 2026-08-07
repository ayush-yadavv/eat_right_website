import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Eat Right | Modern Premium Nutrition',
  description: 'Discover delicious, highly nutritious, and vibrant healthy food tailored for your well-being.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
