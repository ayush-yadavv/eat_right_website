'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WaitlistForm } from '@/components/waitlist-form';
import { AnnuraButton } from '@/components/annura-button';
import { AnnuraAuraCard } from '@/components/annura-aura-card';
import { siteConfig, brandHighlights, faqs, features, navLinks, footerLinks, workflowSteps } from '@/data/site';
import { Link000 } from '@/components/skiper40';
import { ThemeToggleButton3 } from '@/components/skiper4';
import { ExternalLink, Sparkles, CheckCircle2, Smartphone, Bell } from 'lucide-react';
import { GooglePlayIcon } from '@/components/google-play-icon';

import { motion, useScroll, useTransform } from 'framer-motion';
import ReactLenis from 'lenis/react';
import { Skiper16 } from '@/components/skiper16';

function ScrubText({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "start 40%"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);
  
  return (
    <motion.h2 
      ref={ref} 
      style={{ opacity }} 
      className="font-heading text-[2.5rem] md:text-[4vw] font-bold tracking-tight text-center max-w-4xl mx-auto leading-tight"
    >
      {children}
    </motion.h2>
  );
}

export default function Home() {
  const heroVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer: import('framer-motion').Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants: import('framer-motion').Variants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <ReactLenis root>
      <main className="overflow-x-clip w-full max-w-full bg-background text-text-main selection:bg-primary/20">
      
      {/* Navigation: Glass Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full bg-surface/70 backdrop-blur-xl border border-border/60 shadow-sm flex items-center justify-between px-6 py-3">
        <Link href="/" className="font-heading font-bold tracking-tight text-xl z-50">
          {siteConfig.name}
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          {navLinks.map((link) => (
            <Link000 key={link.label} href={link.href} className="hover:text-primary transition-colors">{link.label}</Link000>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggleButton3
            variant="circle-blur"
            start="top-right"
            blur={true}
            className="size-9 p-2 rounded-full border border-border/80 bg-surface/80 hover:bg-surface text-text-main shadow-xs"
          />
          <AnnuraButton asChild variant="default" className="h-10 px-5 text-xs tracking-wide">
            <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <GooglePlayIcon className="size-4 shrink-0" />
              <span>Pre-Register</span>
            </a>
          </AnnuraButton>
        </div>
      </nav>

      {/* Hero (Artistic Asymmetry) */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto min-h-[90vh]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 z-10 w-full lg:w-1/2"
        >
          <motion.div variants={heroVariants} className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-8 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pre-Registration &amp; Open Testing Live
          </motion.div>
          <motion.h1 variants={heroVariants} className="font-heading text-[3.5rem] md:text-[5vw] leading-[1.02] tracking-tight font-bold mb-8 max-w-3xl text-balance">
            Timeless wisdom for the modern plate.
          </motion.h1>
          <motion.p variants={heroVariants} className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-10 text-pretty">
            More than a tracker, {siteConfig.name} is a mindful companion for your holistic health. We bridge ancient wisdom with gentle intelligence to help you align what you eat with how you feel.
          </motion.p>
          <motion.div variants={heroVariants} className="flex flex-col sm:flex-row gap-4">
            <AnnuraButton asChild className="h-14 px-8 text-sm shadow-aura-sage">
              <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5">
                <GooglePlayIcon className="size-[22px] shrink-0" />
                <span>Pre-Register on Google Play</span>
              </a>
            </AnnuraButton>
            <AnnuraButton asChild variant="secondary" className="h-14 px-8 text-sm">
              <Link href="#get-app">Open Testing &amp; Details</Link>
            </AnnuraButton>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="relative w-full max-w-md lg:w-[35%] aspect-[1446/1985] lg:translate-y-12"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-border shadow-2xl z-10">
            <Image 
              src="/images/app/home-screen.webp" 
              alt="Annura AI mindful meal tracking app interface displaying daily health score and meal log" 
              fill 
              priority
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 35vw, 450px"
              className="object-cover object-top opacity-95"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </section>

      {/* Value & Capability Highlights (Infinite Marquee) */}
      <section className="py-16 border-y border-border bg-surface-hi/10 overflow-hidden flex flex-col items-center">
        <div className="w-full relative flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, duration: 38, ease: "linear" }}
            className="flex gap-6 items-center whitespace-nowrap pl-6 min-w-max"
          >
            {[...Array(4)].map((_, index) => (
              <React.Fragment key={index}>
                {brandHighlights.map((item, i) => (
                  <div key={`${index}-${i}`} className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-surface/90 border border-border/80 shadow-xs">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-heading font-medium text-text-main text-sm">{item.label}</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mindful Philosophy & Rituals (Scrubbing Text Reveals) */}
      <section id="philosophy" aria-label="Mindful Philosophy" className="py-32 md:py-48 px-6 max-w-5xl mx-auto flex flex-col gap-32">
        {workflowSteps.map((step, idx) => (
          <ScrubText key={idx}>
            {step.prefix}{' '}
            <span className={idx === 0 ? "text-primary" : idx === 1 ? "text-warning-text" : "text-slate"}>{step.highlight}</span>
          </ScrubText>
        ))}
      </section>

      {/* Core App Features (Skiper16 Stacked Sticky Cards) */}
      <section id="features" aria-label="Core App Features">
        <Skiper16 />
      </section>

      {/* Brand Pillars & Guiding Principles (Gapless Bento Grid) */}
      <section id="pillars" aria-label="Brand Pillars" className="py-32 px-6 lg:px-12 bg-surface-hi/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 max-w-3xl">
            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Designed for a life of balance, not a life of tracking.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[28rem] gap-6 grid-flow-dense">
            
            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="col-span-1 md:col-span-2 row-span-1">
              <AnnuraAuraCard className="h-full group border-none bg-surface p-10 flex flex-col justify-between overflow-hidden relative">
                <div className="relative z-10 max-w-sm">
                  <h3 className="text-3xl font-heading font-semibold mb-4">{features[0].title}</h3>
                  <p className="text-text-muted text-lg text-pretty">{features[0].description}</p>
                </div>
                <div className="absolute right-0 bottom-0 w-[80%] md:w-[60%] h-[80%] translate-x-12 translate-y-12 rounded-tl-[2rem] overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-2 group-hover:-translate-x-2">
                  <Image
                    src={features[0].image || "/images/app/featured-graphic.webp"}
                    alt={features[0].imageAlt || "App interface"}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className="object-cover object-left-top contrast-125"
                  />
                </div>
              </AnnuraAuraCard>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="col-span-1 row-span-1">
              <AnnuraAuraCard glowType="none" className="h-full group border-none bg-primary/10 p-10 flex flex-col justify-center overflow-hidden relative">
                <div className="relative z-10 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:-translate-y-1">
                  <h3 className="text-3xl font-heading font-semibold mb-4 text-text-main">{features[1].title}</h3>
                  <p className="text-primary-soft dark:text-primary text-lg leading-relaxed text-pretty">{features[1].description}</p>
                </div>
              </AnnuraAuraCard>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="col-span-1 row-span-1">
              <AnnuraAuraCard className="h-full group border-none bg-surface p-0 overflow-hidden relative">
                 <Image
                    src={features[2].image || "/images/app/sync-guidance.webp"}
                    alt={features[2].imageAlt || "AI Guidance"}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover grayscale mix-blend-luminosity transition-transform duration-1000 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent p-10 flex flex-col justify-end">
                    <h3 className="text-3xl font-heading font-semibold mb-3">{features[2].title}</h3>
                    <p className="text-text-muted text-lg text-pretty">{features[2].description}</p>
                  </div>
              </AnnuraAuraCard>
            </motion.div>

            <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-15%" }} className="col-span-1 md:col-span-2 row-span-1">
              <AnnuraAuraCard className="h-full group border-none bg-surface p-10 flex flex-col md:flex-row items-center gap-10 overflow-hidden relative">
                <div className="flex-1 relative z-10">
                  <h3 className="text-3xl font-heading font-semibold mb-4">{features[3].title}</h3>
                  <p className="text-text-muted text-lg text-pretty">{features[3].description.replace("EatRight", siteConfig.name)}</p>
                </div>
                <div className="w-full md:w-1/2 aspect-square relative rounded-[2rem] overflow-hidden shadow-aura-sage transition-transform duration-700 ease-out group-hover:scale-105">
                  <Image
                    src={features[3].image || "/images/app/privacy-sanctuary.webp"}
                    alt={features[3].imageAlt || "Privacy"}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover contrast-125 opacity-90 mix-blend-luminosity"
                  />
                </div>
              </AnnuraAuraCard>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Side-by-Side FAQ Section (From redesign skill audit) */}
      <section id="faq" className="py-32 bg-surface-muted border-b border-border">
        <div className="shell grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 max-w-7xl mx-auto px-6 lg:px-12">
          <div className="lg:col-span-5">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">Frequently asked questions</h2>
            <p className="text-text-muted text-lg text-balance">Everything you need to know about the pre-registration &amp; open testing phase and how {siteConfig.name} handles your data.</p>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-12">
            {faqs.map((faq, index) => (
              <div key={index} className="flex flex-col gap-4">
                <h3 className="text-2xl font-heading font-semibold text-text-main">{faq.question}</h3>
                <p className="text-text-muted text-lg leading-relaxed text-pretty">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Action / Pre-Registration & Open Testing */}
      <section id="get-app" className="py-32 md:py-48 px-6 relative overflow-hidden flex flex-col items-center">
        {/* Support anchor for previous invite links */}
        <span id="invite" className="absolute -top-24 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-surface-hi/40 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,hsl(var(--sage)/0.15),transparent_70%)] -z-10" />
        
        <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-primary/10 border border-primary/25 text-primary text-[10px] font-bold tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Now Live on Google Play</span>
          </div>
          <h2 className="font-heading text-[3rem] md:text-[4.5vw] font-bold tracking-tight mb-6 leading-[1.1] text-balance text-center">
            Pre-Register &amp; Join Open Testing.
          </h2>
          <p className="text-lg md:text-xl text-text-muted mb-16 text-balance max-w-2xl text-center">
            {siteConfig.name} is officially live in Google Play Pre-Registration and Open Testing. Be among the first to experience mindful AI nutrition tracking.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full max-w-5xl">
            {/* Card 1: Google Play Direct Access */}
            <div className="lg:col-span-7 bg-surface/90 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-border shadow-xl flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Android Early Access</span>
                  </div>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    Free Early Access
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4 text-text-main">
                  Get it on Google Play
                </h3>
                <p className="text-text-muted text-base leading-relaxed mb-6">
                  Pre-register to have {siteConfig.name} automatically install upon official release, or join the open testing track right now to download and test the latest build immediately.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-text-main">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Instant AI Vision meal &amp; macro breakdown</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Barcode food purity &amp; harmful additive alerts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>Intermittent fasting timers &amp; mindful daily health score</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                    <span>100% free with zero intrusive ads or data selling</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-6 border-t border-border/60">
                <AnnuraButton asChild className="h-13 px-8 text-sm shadow-aura-sage flex-1">
                  <a href={siteConfig.links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5">
                    <GooglePlayIcon className="size-[22px] shrink-0" />
                    <span>Pre-Register on Google Play</span>
                  </a>
                </AnnuraButton>
                {siteConfig.links.openTestingOptIn && (
                  <a
                    href={siteConfig.links.openTestingOptIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-xs font-semibold text-text-muted hover:text-primary transition-colors py-2 px-3 text-center sm:ml-auto"
                  >
                    <span>Web Testing Opt-In &rarr;</span>
                  </a>
                )}
              </div>
            </div>

            {/* Card 2: iOS Waitlist & Release Alerts */}
            <div className="lg:col-span-5 bg-surface/80 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-border shadow-xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-surface-hi/60 border border-border text-text-muted text-xs font-semibold">
                  <Bell className="w-3.5 h-3.5 text-primary" />
                  <span>Stay In The Loop</span>
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3 text-text-main">
                  iOS &amp; Launch Alerts
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-6">
                  Waiting for our upcoming iOS release, or want major announcements and feature updates sent straight to your inbox?
                </p>

                <WaitlistForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <Link href="/" className="font-heading font-bold tracking-tight text-2xl">
              {siteConfig.name.substring(0, 3)}<span className="text-primary">{siteConfig.name.substring(3)}</span>
            </Link>
            <p className="text-sm font-medium text-text-muted">{siteConfig.tagLine}</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium text-text-muted">
            {footerLinks.map((link) => (
              <Link000 key={link.label} href={link.href} className="hover:text-primary transition-colors">{link.label}</Link000>
            ))}
          </div>
          <p className="text-sm text-text-muted">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </footer>
    </main>
    </ReactLenis>
  );
}
