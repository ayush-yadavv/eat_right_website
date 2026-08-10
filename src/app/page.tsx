import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/config/site'

export const metadata = {
  title: 'Eat Right App | Nutrition Simplified',
  description: 'The ultimate personal nutritionist in your pocket. Track your daily intake, get smart reminders, and sync your diet seamlessly.',
}

export default function Home() {
  return (
    <main>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            Eat<span>Right</span>
          </Link>
          <div className="nav-links">
            <Link href="#features" className="nav-link">Features</Link>
            <Link href="#sync" className="nav-link">Sync</Link>
            <Link href="#download" className="nav-link">Download</Link>
          </div>
          <Link href="#download" className="btn-primary">Get the App</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow-2"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-tag">✨ Now Available on iOS & Android</div>
            <h1 className="hero-title">
              Nutrition, Simplified. Meet <span>Eat Right.</span>
            </h1>
            <p className="hero-desc">
              Track your daily intake, get smart reminders, and sync your diet seamlessly—all from your pocket. The ultimate personal nutritionist is here.
            </p>
            <div className="hero-actions app-download-actions" id="download">
              <Link href="#" className="btn-store">
                <span className="store-icon">🍎</span> 
                <div className="store-text">
                  <span className="store-sub">Download on the</span>
                  <span className="store-main">App Store</span>
                </div>
              </Link>
              <Link href="#" className="btn-store">
                <span className="store-icon">▶️</span> 
                <div className="store-text">
                  <span className="store-sub">GET IT ON</span>
                  <span className="store-main">Google Play</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="phone-mockup">
              <Image 
                src="/app_mockup.jpg" 
                alt="Eat Right App UI Dashboard"
                width={400}
                height={800}
                className="phone-screen"
                priority
              />
            </div>
            <div className="float-card">
              <div className="float-icon">🔥</div>
              <div className="float-text">
                <h4>Smart Sync</h4>
                <p>Lightning-fast cloud saves</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Built For Your Health</h2>
            <p className="section-desc">We've engineered Eat Right to be the most frictionless way to track and manage your daily nutritional intake.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔔</div>
              <h3 className="feature-title">Smart Reminders</h3>
              <p className="feature-desc">Never miss a meal with perfectly timed local & push notifications tailored to your specific schedule.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Daily Intake Sync</h3>
              <p className="feature-desc">Batched Firestore syncing means lightning-fast updates to your dietary tracking without eating your battery.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔗</div>
              <h3 className="feature-title">Deep Links</h3>
              <p className="feature-desc">Share your favorite meals and custom intake plans instantly with friends using seamless App Links.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secure & Private</h3>
              <p className="feature-desc">Frictionless Google Sign-In combined with robust Firebase security rules keeps your health data private.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section id="case-study" className="py-24 relative overflow-hidden">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 items-center bg-gray-900/50 p-8 md:p-12 rounded-3xl border border-gray-800">
            <div className="md:w-1/2">
              <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm mb-4 block">Case Study</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">How Sarah Lost 20lbs in 3 Months</h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                "I tried every diet out there, but nothing stuck until Eat Right. The smart reminders and seamless syncing made it so easy to stay on track. It didn't feel like a chore anymore."
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Customized macro tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Daily automated reminders</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-emerald-400">✓</span>
                  <span>Integrated with her smartwatch</span>
                </li>
              </ul>
              <Link href="#download" className="btn-secondary">Read Full Story</Link>
            </div>
            <div className="md:w-1/2 relative">
              <Image 
                src="/healthy_hero_bowl.jpg" 
                alt="Sarah eating a healthy bowl using Eat Right App"
                width={500}
                height={400}
                className="rounded-2xl shadow-2xl shadow-emerald-500/10 object-cover h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-gray-900 p-6 rounded-2xl border border-gray-800 shadow-xl">
                <div className="text-4xl font-bold text-emerald-400 mb-1">-20 lbs</div>
                <div className="text-sm text-gray-400">Weight lost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-24 bg-gray-900/20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">Our team of certified nutritionists and developers are dedicated to making healthy eating effortless.</p>
          <div className="max-w-md mx-auto">
            <Image 
              src="/fresh_ingredients.jpg" 
              alt="The Eat Right Team working together in the kitchen"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl border border-gray-800 object-cover h-[300px]"
            />
            <h3 className="text-xl font-bold mt-6">Our Core Team</h3>
            <p className="text-emerald-400">Nutritionists & Engineers</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="reviews" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Customer Reviews</h2>
            <p className="text-gray-400">Don't just take our word for it.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Alex M.", rating: 5, text: "The barcode scanner is incredibly fast. Saves me so much time!" },
              { name: "Jamie L.", rating: 5, text: "Finally an app that doesn't bombard me with ads. Clean and effective." },
              { name: "Sam T.", rating: 5, text: "Love the syncing feature. I can check my macros on my iPad or phone seamlessly." }
            ].map((review, i) => (
              <div key={i} className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800">
                <div className="flex gap-1 text-emerald-400 mb-4">
                  {"★".repeat(review.rating)}
                </div>
                <p className="text-gray-300 mb-6 font-medium">"{review.text}"</p>
                <div className="font-bold">{review.name}</div>
                <div className="text-sm text-gray-500">Verified User</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faq" className="py-24 bg-gray-900/20">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "Is Eat Right free to use?", a: "We offer a generous free tier that covers basic tracking. Premium features require a subscription." },
              { q: "Does it sync with Apple Health or Google Fit?", a: "Yes, Eat Right fully integrates with major health platforms." },
              { q: "Can I share my recipes with friends?", a: "Absolutely! Our Deep Links feature allows instant recipe sharing." },
              { q: "Is my data secure?", a: "We use enterprise-grade encryption and Firebase security rules to protect your personal data." },
              { q: "How do I cancel my subscription?", a: "You can manage or cancel your subscription anytime directly from your app store settings." }
            ].map((faq, i) => (
              <div key={i} className="p-6 border border-gray-800 rounded-2xl bg-gray-900/50 hover:border-emerald-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Directions */}
      <section id="contact" className="py-24 relative">
        <div className="container">
          <div className="flex flex-col md:flex-row gap-12 bg-gray-900/50 rounded-3xl border border-gray-800 overflow-hidden">
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6">Visit Our HQ</h2>
              <p className="text-gray-400 mb-8">We're located in the heart of San Francisco. Come by for a healthy smoothie and meet the team.</p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 mt-1">📍</div>
                  <div>
                    <div className="font-bold">Address</div>
                    <div className="text-gray-400" dangerouslySetInnerHTML={{ __html: siteConfig.contact.address.full.replace(', ', '<br/>') }}></div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 mt-1">🚗</div>
                  <div>
                    <div className="font-bold">Directions</div>
                    <div className="text-gray-400">Take the I-80 W to 5th St exit. We're on the right next to the park.</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-emerald-400 mt-1">📞</div>
                  <div>
                    <div className="font-bold">Contact</div>
                    <div className="text-gray-400">{siteConfig.contact.phone}<br/>{siteConfig.contact.email}</div>
                  </div>
                </div>
              </div>
              
              <Link href="/thank-you" className="btn-primary w-full text-center block">Send us a Message</Link>
            </div>
            <div className="md:w-1/2 bg-gray-800 flex items-center justify-center min-h-[400px] relative">
              <Image src="/fresh_smoothie.jpg" alt="Map Location Background" fill className="object-cover opacity-30" />
              <div className="text-center p-8 relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-700">
                <div className="text-6xl mb-4">🗺️</div>
                <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                <p className="text-gray-400">Find us in SF</p>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-emerald-400 font-bold hover:underline">Get Directions ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-links">
            <Link href="/legal/privacy_policies">Privacy Policy</Link>
            <Link href="/legal/terms_of_service">Terms of Service</Link>
          </div>
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Eat Right App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
