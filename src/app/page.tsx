import Image from 'next/image'
import Link from 'next/link'

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
