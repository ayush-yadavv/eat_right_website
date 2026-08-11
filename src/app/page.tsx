import Image from 'next/image'
import Link from 'next/link'
import { WaitlistForm } from '@/components/waitlist-form'

export const metadata = {
  title: 'Nutrition that fits your day',
  description: 'Eat Right helps you build a steadier food routine with simple tracking and timely reminders.',
}

const routines = [
  {
    title: 'Log without overthinking',
    description: 'Keep meals and nutrition notes in one calm, easy-to-scan place.',
  },
  {
    title: 'Remember the moments that matter',
    description: 'Set reminders that support your schedule instead of interrupting it.',
  },
  {
    title: 'Pick up on any device',
    description: 'Your daily routine stays close whether you are at home or out.',
  },
]

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="shell site-header__inner">
          <Link href="/" className="wordmark" aria-label="Eat Right home">
            Eat <span>Right</span>
          </Link>
          <nav className="site-nav" aria-label="Primary navigation">
            <Link href="#features">Features</Link>
            <Link href="#sync">Your routine</Link>
            <Link href="#privacy">Privacy</Link>
          </nav>
          <Link href="#waitlist" className="button button--small">
            Join waitlist
          </Link>
        </div>
      </header>

      <section className="hero">
        <div className="shell hero__grid">
          <div className="hero__content">
            <h1>Eat well, one ordinary day at a time.</h1>
            <p>Eat Right keeps your meals, reminders, and nutrition habits clear enough to return to every day.</p>
            <Link href="#waitlist" className="button">
              Join waitlist
            </Link>
          </div>
          <div className="hero__media">
            <div className="hero__image-frame">
              <Image
                src="/app_mockup.jpg"
                alt="Eat Right app showing a daily nutrition overview"
                width={400}
                height={800}
                priority
                sizes="(max-width: 767px) 72vw, (max-width: 1023px) 45vw, 400px"
                className="hero__app-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="sync" className="routine-section">
        <div className="shell routine-section__grid">
          <div className="routine-section__image-wrap">
            <Image
              src="/fresh_ingredients.jpg"
              alt="Fresh ingredients prepared for a balanced meal"
              width={900}
              height={620}
              sizes="(max-width: 767px) 100vw, 48vw"
              className="content-image"
            />
          </div>
          <div className="routine-section__copy">
            <p className="section-kicker">A lighter way to stay aware</p>
            <h2>Small choices add up.</h2>
            <p className="section-intro">Build a routine around what you already eat. The app gives everyday decisions a little more structure.</p>
            <ol className="routine-list">
              {routines.map((routine, index) => (
                <li key={routine.title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{routine.title}</h3>
                    <p>{routine.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="features" className="features-section">
        <div className="shell">
          <div className="section-heading">
            <h2>Made for the parts of food tracking that need less friction.</h2>
            <p>Simple tools, useful reminders, and a clearer view of the habits you want to keep.</p>
          </div>
          <div className="feature-layout">
            <article className="feature-panel feature-panel--copy">
              <h3>One place for the day</h3>
              <p>Bring meals, reminders, and nutrition notes together without turning them into a project.</p>
            </article>
            <figure className="feature-panel feature-panel--image">
              <Image
                src="/fresh_smoothie.jpg"
                alt="A fresh smoothie ready to enjoy"
                fill
                sizes="(max-width: 767px) 100vw, 50vw"
                className="feature-image"
              />
            </figure>
            <article className="feature-panel feature-panel--accent">
              <h3>Reminders that respect your rhythm</h3>
              <p>Choose prompts that fit your day and come back to your plan when you are ready.</p>
            </article>
          </div>
        </div>
      </section>

      <section id="privacy" className="privacy-section">
        <div className="shell privacy-section__grid">
          <div>
            <p className="section-kicker">Privacy first</p>
            <h2>Your health information deserves care.</h2>
            <p className="section-intro">Eat Right is designed to keep your nutrition routine personal. Read how we handle information before you join.</p>
            <Link href="/legal/privacy_policies" className="text-link">
              Read the privacy policy
            </Link>
          </div>
          <Image
            src="/healthy_hero_bowl.jpg"
            alt="A colorful bowl of nourishing food"
            width={900}
            height={650}
            sizes="(max-width: 767px) 100vw, 45vw"
            className="content-image privacy-section__image"
          />
        </div>
      </section>

      <section id="waitlist" className="waitlist-section">
        <div className="shell waitlist-section__grid">
          <div>
            <h2>Be first to know when Eat Right opens.</h2>
            <p>Leave your email and we will send the next update directly to your inbox.</p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell site-footer__inner">
          <Link href="/" className="wordmark">Eat <span>Right</span></Link>
          <div className="site-footer__links">
            <Link href="/legal/privacy_policies">Privacy</Link>
            <Link href="/legal/terms_of_service">Terms</Link>
          </div>
          <p>© {new Date().getFullYear()} Eat Right</p>
        </div>
      </footer>
    </main>
  )
}
