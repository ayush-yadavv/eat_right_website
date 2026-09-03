export const siteConfig = {
  name: 'Annura AI',
  tagLine: 'Every bite, understood.',
  description: 'The ancient art of mindful eating, powered by modern AI. Know your food, fuel your energy.',
  logo: '/images/logo/annura-icon.svg',
  url: 'https://app.ay7.me',
  ogImage: 'https://app.ay7.me/og-image.jpg',
  contact: {
    email: 'play.ay11@gmail.com',
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
export const testimonials = [
  { quote: "So quiet and out of the way.", name: "Sarah L.", role: "Early Adopter" },
  { quote: "Doesn't feel like a spreadsheet.", name: "Mark T.", role: "Beta Tester" },
  { quote: "Reminders that actually help.", name: "Elena G.", role: "Early Adopter" },
];

export const faqs = [
  {
    question: "How do I get an invite to the beta?",
    answer: "We are rolling out invites on a weekly basis to ensure server stability. Join the waitlist below to reserve your spot in line."
  },
  {
    question: "Is my health data private?",
    answer: "Absolutely. We believe your health data is yours. We never sell your information to third parties, and your data is stored securely using industry best practices."
  },
  {
    question: "Will the app always be free?",
    answer: "During the invite-only beta period, Annura AI is completely free. We will introduce optional premium features later, but core tracking will remain accessible."
  }
];

export const features = [
  {
    id: "ai-vision",
    title: "The Art of Presence",
    description: "Pause. Breathe. Nourish. We've replaced the anxiety of data-entry with a gentle, visual way to remain present and grateful for every meal.",
    image: "https://picsum.photos/seed/dashboard/1200/900",
    imageAlt: "Aesthetic lifestyle imagery",
    layout: "col-span-1 md:col-span-2 row-span-1",
    type: "image-right"
  },
  {
    id: "pure-ingredients",
    title: "Uncompromising Purity",
    description: "Protect your inner harmony. Gain the clarity to effortlessly avoid what drains you, empowering you to choose foods that elevate your life force.",
    layout: "col-span-1 row-span-1",
    type: "text-only"
  },
  {
    id: "ai-coach",
    title: "Empathetic Guidance",
    description: "Never walk alone. Experience personalized, deeply intuitive support that adapts to your body, your routines, and your wellness journey.",
    image: "https://picsum.photos/seed/sync/800/800",
    imageAlt: "Wellness guide",
    layout: "col-span-1 row-span-1",
    type: "image-bg"
  },
  {
    id: "privacy",
    title: "Your Private Sanctuary",
    description: "Trust is the foundation of wellbeing. Our platform is built as a highly secure vault, ensuring your personal health journey remains entirely yours.",
    image: "https://picsum.photos/seed/privacybowl/800/800",
    imageAlt: "Privacy and sanctuary",
    layout: "col-span-1 md:col-span-2 row-span-1",
    type: "image-side"
  }
];

export const projects = [
  {
    title: "The Art of Presence",
    description: "A gentle, visual way to remain present and grateful for every meal, without the anxiety of tracking.",
    src: "/images/lummi/img8.png",
    tag: "Mindfulness",
  },
  {
    title: "Harmony in Motion",
    description: "Adaptive, gentle cues that fit seamlessly into your natural daily rhythm.",
    src: "/images/lummi/img14.png",
    tag: "Rhythm",
  },
  {
    title: "Uncompromising Purity",
    description: "Effortlessly uncover what nourishes you, empowering you to choose foods that elevate your life force.",
    src: "/images/lummi/img10.png",
    tag: "Purity",
  },
  {
    title: "Your Digital Sanctuary",
    description: "A peaceful space that travels with you, keeping your wellness journey close at hand wherever you go.",
    src: "/images/lummi/img15.png",
    tag: "Sanctuary",
  },
  {
    title: "Sacred Privacy",
    description: "Built as a secure vault. Your personal health journey remains entirely yours, free from algorithmic noise.",
    src: "/images/lummi/img12.png",
    tag: "Trust",
  },
];

export const navLinks = [
  { label: "Workflow", href: "#workflow" },
  { label: "Showcase", href: "#showcase" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

export const footerLinks = [
  { label: "Privacy", href: "/legal/privacy_policies" },
  { label: "Terms", href: "/legal/terms_of_service" },
  { label: "Delete Account", href: "/delete-account" },
];

export const workflowSteps = [
  {
    prefix: "A daily ritual of awareness.",
    highlight: "Cultivate a deeply mindful relationship with every meal."
  },
  {
    prefix: "Choose pure nourishment.",
    highlight: "Protect your energy by surrounding your body with foods that heal."
  },
  {
    prefix: "Guidance you can trust.",
    highlight: "Find the perfect balance for your unique lifestyle and radiant wellbeing."
  }
];
