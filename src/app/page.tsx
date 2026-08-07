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
            <Link href="#menu" className="nav-link">Our Menu</Link>
            <Link href="#nutrition" className="nav-link">Nutrition Info</Link>
            <Link href="#about" className="nav-link">Our Story</Link>
          </div>
          <Link href="#menu" className="btn-primary">Order Now</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg-glow"></div>
        <div className="hero-bg-glow-2"></div>
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-tag">✨ Premium Nutrition</div>
            <h1 className="hero-title">
              Fuel your body with <span>vibrant</span> foods.
            </h1>
            <p className="hero-desc">
              Experience the perfect harmony of taste and health. Eat Right brings you chef-crafted, nutritionally balanced bowls that energize your day and delight your senses.
            </p>
            <div className="hero-actions">
              <Link href="#menu" className="btn-primary">Explore Menu</Link>
              <Link href="#video" className="btn-secondary">Watch Video</Link>
            </div>
          </div>
          <div className="hero-visual">
            <div className="image-card">
              <Image 
                src="/healthy_hero_bowl.jpg" 
                alt="Vibrant healthy food bowl with avocado and quinoa"
                width={800}
                height={600}
                priority
              />
            </div>
            <div className="float-card">
              <div className="float-icon">🥗</div>
              <div className="float-text">
                <h4>100% Organic</h4>
                <p>Locally sourced ingredients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="nutrition" className="features">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Eat Right?</h2>
            <p className="section-desc">We believe that healthy food shouldn't be boring. Our culinary experts have designed a menu that maximizes both nutritional value and extraordinary flavor profiles.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">✨</div>
              <h3 className="feature-title">Nutrient Dense</h3>
              <p className="feature-desc">Every meal is packed with essential vitamins, minerals, and antioxidants to support your immune system and overall vitality.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Sustained Energy</h3>
              <p className="feature-desc">Balanced macronutrients designed to give you long-lasting energy without the afternoon crash.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3 className="feature-title">Plant-Forward</h3>
              <p className="feature-desc">Emphasizing whole foods, vibrant vegetables, and sustainable plant-based proteins that are good for you and the planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Gallery Section */}
      <section id="menu" className="bento-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Taste The Vibrant Life</h2>
            <p className="section-desc">A sneak peek into our stunning, chef-crafted selections.</p>
          </div>
          <div className="bento-grid">
            <div className="bento-item bento-large">
              <Image 
                src="/healthy_hero_bowl.jpg" 
                alt="Signature Quinoa Bowl"
                width={800}
                height={800}
              />
              <div className="bento-overlay">
                <div className="bento-subtitle">Best Seller</div>
                <h3 className="bento-title">Signature Quinoa Bowl</h3>
              </div>
            </div>
            <div className="bento-item">
              <Image 
                src="/fresh_smoothie.jpg" 
                alt="Detox Green Smoothie"
                width={400}
                height={400}
              />
              <div className="bento-overlay">
                <div className="bento-subtitle">Refresh</div>
                <h3 className="bento-title">Detox Green</h3>
              </div>
            </div>
            <div className="bento-item">
              <Image 
                src="/fresh_ingredients.jpg" 
                alt="Fresh Organic Ingredients"
                width={400}
                height={400}
              />
              <div className="bento-overlay">
                <div className="bento-subtitle">Sourced</div>
                <h3 className="bento-title">Farm Fresh</h3>
              </div>
            </div>
            <div className="bento-item bento-wide">
              <Image 
                src="/fresh_ingredients.jpg" 
                alt="Culinary Excellence"
                width={800}
                height={400}
              />
              <div className="bento-overlay">
                <div className="bento-subtitle">Process</div>
                <h3 className="bento-title">Culinary Excellence</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
