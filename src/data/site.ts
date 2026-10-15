export const siteConfig = {
  name: 'Annura AI',
  tagLine: 'Every bite, understood.',
  description: 'Annura AI is a mindful nutrition companion and calorie tracker. Snap meal photos for instant AI macros, sync fasting routines, and connect Google Health.',
  logo: '/images/logo/annura-icon.svg',
  url: 'https://annura.ay7.me',
  ogImage: 'https://annura.ay7.me/og-image.webp',
  contact: {
    email: 'play.ay11@gmail.com',
    supportEmail: 'yadav.ayushx1@gmail.com',
  },
  links: {
    playStore: 'https://play.google.com/store/apps/details?id=com.annura.ai',
  },
}

export type SiteConfig = typeof siteConfig

export const brandHighlights = [
  { label: "AI Vision Meal Recognition", tag: "Instant Macros" },
  { label: "Food Purity & Additive Alerts", tag: "Open Food Facts" },
  { label: "Intermittent Fasting Timers", tag: "Circadian Rhythm" },
  { label: "Empathetic AI Nutritionist", tag: "24/7 Coaching" },
  { label: "Mindful Daily Health Score", tag: "Holistic Habits" },
  { label: "100% Ad-Free Private Vault", tag: "Zero Data Selling" },
  { label: "Google Health & Apple Health", tag: "Wearable Sync" },
]

export const faqs = [
  {
    question: "How do I join the Closed Beta?",
    answer: "We are currently in Google Play Closed Testing. Submit your Google Play email address via the form at the bottom of this page. We will manually add you to the testing list and send you the official download link!"
  },
  {
    question: "Is the app available on iOS?",
    answer: "Currently, Annura AI is available exclusively on Android via the Google Play Store. We are working hard on an iOS version for the future."
  },
  {
    question: "Is my health data private?",
    answer: "Absolutely. We believe your health data is yours. We never sell your information to third parties, and your data is stored securely using industry best practices."
  },
  {
    question: "Will the app always be free?",
    answer: "During the invite-only beta period, Annura AI is completely free. We will introduce optional premium features later, but core tracking will remain accessible."
  }
]

export const pillars = [
  {
    id: "ai-vision",
    title: "The Art of Presence",
    description: "Pause. Breathe. Nourish. We've replaced the anxiety of data-entry with a gentle, visual way to remain present and grateful for every meal.",
    image: "/images/app/featured-graphic.webp",
    imageAlt: "Mindful meal nutritional breakdown and macro analysis with Annura AI",
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
    image: "/images/app/sync-guidance.webp",
    imageAlt: "Mindful wellness companion and empathetic lifestyle guidance",
    layout: "col-span-1 row-span-1",
    type: "image-bg"
  },
  {
    id: "privacy",
    title: "Your Private Sanctuary",
    description: "Trust is the foundation of wellbeing. Our platform is built as a highly secure vault, ensuring your personal health journey remains entirely yours.",
    image: "/images/app/privacy-sanctuary.webp",
    imageAlt: "Serene sanctuary symbolizing trust, privacy, and data security",
    layout: "col-span-1 md:col-span-2 row-span-1",
    type: "image-side"
  }
]

export const features = pillars

export const appFeatures = [
  {
    title: "AI Meal Logging",
    description: "Snap a photo and let Annura's AI break down the nutrition instantly. Log your meals, estimate calories, and get macronutrients in seconds.",
    src: "/images/app/meal-analysis.webp",
    tag: "AI Logging",
  },
  {
    title: "Annura AI Chat",
    description: "Chat with Annura AI anytime for personalized meal suggestions, recipe ideas, nutritional breakdowns, and healthy eating advice.",
    src: "/images/app/ai-chat.webp",
    tag: "AI Assistant",
  },
  {
    title: "Intermittent Fasting",
    description: "Stay on track with customizable fasting timers. Choose from popular protocols, monitor your fasting stages, and track progress.",
    src: "/images/app/fasting.webp",
    tag: "Fasting Tracker",
  },
  {
    title: "Meal Planning",
    description: "Discover personalized healthy recipes, generate weekly meal plans, and organize your grocery lists to keep nutrition stress-free.",
    src: "/images/app/weekly-plan.webp",
    tag: "Meal Plans",
  },
  {
    title: "Streaks & Scores",
    description: "Stay motivated with daily health scores, streak tracking, and milestone achievements designed to help you build lasting healthy habits.",
    src: "/images/app/achievements.webp",
    tag: "Milestones",
  },
]

export const projects = appFeatures

export const navLinks = [
  { label: "Philosophy", href: "#philosophy" },
  { label: "Features", href: "#features" },
  { label: "Pillars", href: "#pillars" },
  { label: "FAQ", href: "#faq" },
]

export const footerLinks = [
  { label: "Privacy", href: "/legal/privacy-policy" },
  { label: "Terms of Use", href: "/legal/terms-of-use" },
  { label: "Delete Account", href: "/delete-account" },
]

export const mindfulRituals = [
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
]

export const workflowSteps = mindfulRituals
