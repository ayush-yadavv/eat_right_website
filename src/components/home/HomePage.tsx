'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WaitlistForm } from '@/components/waitlist-form';
import { AnnuraButton } from '@/components/annura-button';
import { AnnuraAuraCard } from '@/components/annura-aura-card';
import { siteConfig } from '@/data/site';
import { testimonials, faqs, features } from '@/data/home';

import { motion, useScroll, useTransform } from 'framer-motion';

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
    <main className="overflow-x-hidden w-full max-w-full bg-background text-text-main selection:bg-primary/20">
      
      {/* Navigation - Glass Pill */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full bg-surface/70 backdrop-blur-xl border border-border/60 shadow-sm flex items-center justify-between px-6 py-3">
        <Link href="/" className="font-heading font-bold tracking-tight text-lg">
          {siteConfig.name}
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          <Link href="#workflow" className="hover:text-primary transition-colors">Workflow</Link>
          <Link href="#features" className="hover:text-primary transition-colors">Features</Link>
          <Link href="#faq" className="hover:text-primary transition-colors">FAQ</Link>
        </div>
        <AnnuraButton asChild variant="default" className="h-10 px-6 text-xs tracking-wide">
          <Link href="#invite">Request Invite</Link>
        </AnnuraButton>
      </nav>

      {/* Hero (Artistic Asymmetry) */}
      <section className="relative pt-48 pb-24 md:pt-64 md:pb-32 px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 max-w-7xl mx-auto min-h-[90vh]">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex-1 z-10 w-full lg:w-1/2"
        >
          <motion.div variants={heroVariants} className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full bg-warning/15 border border-warning/20 text-warning-text text-[10px] font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-warning opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-warning"></span>
            </span>
            Invite-Only Beta
          </motion.div>
          <motion.h1 variants={heroVariants} className="font-heading text-[3.5rem] md:text-[5vw] leading-[1.02] tracking-tight font-bold mb-8 max-w-3xl text-balance">
            Eat well, one ordinary day at a time.
          </motion.h1>
          <motion.p variants={heroVariants} className="text-lg md:text-xl text-text-muted max-w-xl leading-relaxed mb-10 text-pretty">
            {siteConfig.name} keeps your meals, reminders, and nutrition habits clear enough to return to every day, without the friction of spreadsheets.
          </motion.p>
          <motion.div variants={heroVariants} className="flex flex-col sm:flex-row gap-4">
            <AnnuraButton asChild className="h-14 px-8 text-sm shadow-aura-sage">
              <Link href="#invite">Reserve your spot</Link>
            </AnnuraButton>
            <AnnuraButton asChild variant="secondary" className="h-14 px-8 text-sm">
              <Link href="#features">Explore Features</Link>
            </AnnuraButton>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="relative w-full max-w-md lg:w-[45%] aspect-[3/4] lg:translate-y-12"
        >
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden border border-border shadow-2xl z-10">
            <Image 
              src="https://picsum.photos/seed/nutritionapp/800/1200" 
              alt="App interface" 
              fill 
              className="object-cover contrast-125 opacity-90"
            />
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[100px] -z-10 rounded-full" />
        </motion.div>
      </section>

      {/* Social Proof (Infinite Marquee) */}
      <section className="py-24 border-y border-border bg-surface-hi/10 overflow-hidden flex flex-col items-center">
        <div className="w-full relative flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, "-50%"] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex gap-12 items-center whitespace-nowrap pl-12 min-w-max"
          >
            {[...Array(4)].map((_, index) => (
              <React.Fragment key={index}>
                {testimonials.map((t, i) => (
                  <div key={`${index}-${i}`} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-matcha-fill overflow-hidden relative shadow-sm">
                       <Image src={`https://picsum.photos/seed/${t.name.split(' ')[0].toLowerCase()}/100/100`} alt={t.name} fill className="object-cover mix-blend-luminosity opacity-80" />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-heading font-semibold text-text-main text-lg">&quot;{t.quote}&quot;</span>
                      <span className="text-xs text-text-muted">{t.name}</span>
                    </div>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Workflow (Scrubbing Text Reveals) */}
      <section id="workflow" className="py-32 md:py-48 px-6 max-w-5xl mx-auto flex flex-col gap-32">
        <ScrubText>
          Build a routine around what you already eat. <span className="text-primary">Log without overthinking.</span>
        </ScrubText>
        <ScrubText>
          Remember the moments that matter. <span className="text-warning-text">Set reminders that support your schedule</span> instead of interrupting it.
        </ScrubText>
        <ScrubText>
          Pick up on any device. Your daily routine <span className="text-slate">stays close whether you are at home or out.</span>
        </ScrubText>
      </section>

      {/* Features (Gapless Bento Grid) */}
      <section id="features" className="py-32 px-6 lg:px-12 bg-surface-hi/10 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 max-w-3xl">
            <h2 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Made for the parts of tracking that need less friction.
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
                    src="https://picsum.photos/seed/dashboard/1200/900"
                    alt="App interface"
                    fill
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
                    src="https://picsum.photos/seed/sync/800/800"
                    alt="Sync"
                    fill
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
                    src="https://picsum.photos/seed/privacybowl/800/800"
                    alt="Privacy"
                    fill
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
            <p className="text-text-muted text-lg text-balance">Everything you need to know about the beta program and how {siteConfig.name} handles your data.</p>
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

      {/* Action / Waitlist */}
      <section id="invite" className="py-48 px-6 relative overflow-hidden flex flex-col items-center">
        <div className="absolute inset-0 bg-surface-hi/40 -z-10" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(ellipse_at_center,hsl(var(--sage)/0.15),transparent_70%)] -z-10" />
        
        <div className="max-w-3xl w-full mx-auto text-center flex flex-col items-center">
          <h2 className="font-heading text-[3.5rem] md:text-[5vw] font-bold tracking-tight mb-8 leading-[1.1] text-balance">
            Secure your spot.
          </h2>
          <p className="text-xl md:text-2xl text-text-muted mb-12 text-balance max-w-2xl">
            Leave your email and we will send an invite code directly to your inbox as soon as server capacity allows.
          </p>
          <div className="w-full max-w-lg text-left bg-background/50 backdrop-blur-xl p-8 rounded-3xl border border-border/50 shadow-2xl">
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="font-heading font-bold tracking-tight text-xl">
            {siteConfig.name.substring(0, 3)}<span className="text-primary">{siteConfig.name.substring(3)}</span>
          </Link>
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm font-medium text-text-muted">
            <Link href="/legal/privacy_policies" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="/legal/terms_of_service" className="hover:text-primary transition-colors">Terms</Link>
          </div>
          <p className="text-sm text-text-muted">© {new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </footer>
    </main>
  );
}
