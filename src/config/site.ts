export const siteConfig = {
  name: 'Eat Right',
  description: 'Nutrition that fits your day.',
  url: 'https://app.ay7.me',
  ogImage: 'https://app.ay7.me/og-image.jpg',
  contact: {
    email: 'support@app.ay7.me',
    phone: '+1 (234) 567-890',
    address: {
      street: '123 Health Way',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'US',
      full: '123 Health Way, San Francisco, CA 94105',
    }
  },
  links: {
    twitter: 'https://twitter.com/eatright',
    github: 'https://github.com/eatright',
  },
}

export type SiteConfig = typeof siteConfig
