"use client";

import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

const projects = [
  {
    title: "Daily Nutrition & Meal Tracking",
    description: "Seamless logging designed to keep you consistent without the friction.",
    src: "/images/lummi/img8.png",
    tag: "Tracking",
  },
  {
    title: "Gentle Rhythm Reminders",
    description: "Adaptive cues that fit into your daily flow instead of interrupting it.",
    src: "/images/lummi/img14.png",
    tag: "Reminders",
  },
  {
    title: "Whole Food Insights",
    description: "Clear, actionable nutrient breakdowns focused on balance over restriction.",
    src: "/images/lummi/img10.png",
    tag: "Insights",
  },
  {
    title: "Cross-Device Continuity",
    description: "Your routine stays in sync whether preparing breakfast at home or dining out.",
    src: "/images/lummi/img15.png",
    tag: "Sync",
  },
  {
    title: "Private & Calibrated",
    description: "Zero algorithmic noise. Built entirely around your health goals.",
    src: "/images/lummi/img12.png",
    tag: "Privacy",
  },
];

const StickyCard_001 = ({
  i,
  title,
  description,
  src,
  tag,
  progress,
  range,
  targetScale,
}: {
  i: number;
  title: string;
  description: string;
  src: string;
  tag: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) => {
  const container = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(4vh + ${i * 24}px)`,
        }}
        className="relative flex h-[55vh] min-h-[440px] max-h-[640px] w-full max-w-6xl origin-top flex-col overflow-hidden rounded-[2rem] border border-border/80 bg-surface shadow-2xl md:flex-row"
      >
        <div className="relative flex flex-1 flex-col justify-between p-8 md:p-12 lg:p-14 z-10 bg-surface/95 backdrop-blur-md">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              {tag}
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-main mb-4">
              {title}
            </h3>
            <p className="text-base sm:text-lg text-text-muted max-w-md leading-relaxed">
              {description}
            </p>
          </div>
          <div className="flex items-center gap-3 pt-6 border-t border-border/50 text-xs text-text-muted font-mono">
            <span>0{i + 1}</span>
            <span className="h-px w-8 bg-border" />
            <span>0{projects.length}</span>
          </div>
        </div>

        <div className="relative flex-[1.4] h-64 md:h-full w-full overflow-hidden bg-surface-hi/20">
          <Image
            src={src}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface/80 via-transparent to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

const Skiper16 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div
      ref={container}
      className="relative flex w-full flex-col items-center justify-center pb-[20vh] pt-[5vh]"
    >
      <div className="mb-12 text-center max-w-2xl px-4">
        <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">App Showcase</p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main">
          Designed for quiet clarity.
        </h2>
      </div>

      {projects.map((project, i) => {
        const targetScale = Math.max(
          0.85,
          1 - (projects.length - i - 1) * 0.04,
        );
        return (
          <StickyCard_001
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * (0.8 / projects.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
};

export { Skiper16, StickyCard_001 };

/**
 * Skiper 16 StickyCard_001 — React + Framer Motion
 * Author: @gurvinder-singh02
 * Website: https://gxuri.me | https://skiper-ui.com/v1/skiper16
 */
