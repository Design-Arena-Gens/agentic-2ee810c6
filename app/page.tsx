/* eslint-disable @next/next/no-img-element */
"use client";

import clsx from "clsx";
import { motion, useAnimationControls, useInView } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";

const heroCopy = [
  {
    id: "frame-1",
    heading: "Beyond Imagination",
    subheading: "Where vision meets the velocity of light."
  },
  {
    id: "frame-2",
    heading: "Precision, Elevated",
    subheading: "A symphony of hardware and intelligence in perfect cadence."
  },
  {
    id: "frame-3",
    heading: "Believe In Possible",
    subheading: "Crafted to disappear until the moment you need it most."
  }
];

const features = [
  {
    title: "Atom-Level Craft",
    copy: "Machine-milled aerospace aluminum wrapped around nano-textured glass delivers intuitive comfort and strength."
  },
  {
    title: "Neural Vision",
    copy: "Dual neural cores learn the nuance of your environment, unlocking cinematic spatial clarity in real time."
  },
  {
    title: "Immersive Fidelity",
    copy: "MicroOLED panels push 23 million pixels with 5,000-nit HDR brilliance, orchestrated with beamforming audio."
  }
];

function SequencedCopy() {
  const controls = useAnimationControls();
  const [activeIndex, setActiveIndex] = useState(0);
  const indexRef = useRef(0);

  useEffect(() => {
    let mounted = true;
    const cycle = async () => {
      while (mounted) {
        await controls.start({
          opacity: [0, 1, 1, 0],
          filter: ["blur(30px)", "blur(0px)", "blur(0px)", "blur(30px)"],
          transition: {
            opacity: { duration: 6, times: [0, 0.15, 0.8, 1], ease: "easeInOut" },
            filter: { duration: 6, times: [0, 0.15, 0.8, 1], ease: "easeInOut" }
          }
        });
        indexRef.current = (indexRef.current + 1) % heroCopy.length;
        setActiveIndex(indexRef.current);
      }
    };
    cycle();
    return () => {
      mounted = false;
    };
  }, [controls]);

  const active = heroCopy[activeIndex];

  return (
    <motion.div
      key={active.id}
      animate={controls}
      className="flex flex-col gap-4 text-center text-balance max-w-2xl mx-auto select-none"
    >
      <motion.h1 className="text-4xl md:text-6xl font-medium tracking-tight leading-tight">
        {active.heading}
      </motion.h1>
      <motion.p className="text-base md:text-xl text-white/70 leading-relaxed">
        {active.subheading}
      </motion.p>
    </motion.div>
  );
}

function Halo() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-white/[0.08] blur-3xl opacity-60 animate-pulse" />
      <div className="absolute -inset-14 rounded-full border border-white/8 backdrop-blur-3xl" />
      <div className="absolute inset-10 rounded-[3rem] border border-white/10 shadow-halo animate-pulse-slow" />
    </div>
  );
}

function OrbitalRings() {
  const rings = useMemo(
    () =>
      new Array(4).fill(null).map((_, idx) => ({
        size: `${50 + idx * 12}%`,
        delay: idx * 2,
        opacity: 0.18 + idx * 0.08
      })),
    []
  );

  return (
    <>
      {rings.map((ring, index) => (
        <div
          key={`ring-${index}`}
          className="absolute inset-0 flex items-center justify-center"
          style={{ animationDelay: `${ring.delay}s` }}
        >
          <div
            className={clsx(
              "rounded-full border border-white/20",
              "w-[var(--size)] h-[var(--size)] animate-orbit"
            )}
            style={
              {
                "--size": ring.size,
                opacity: ring.opacity
              } as React.CSSProperties
            }
          />
        </div>
      ))}
    </>
  );
}

function LightGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(94,104,255,0.35),transparent_70%)]" />
      <div className="absolute inset-0 opacity-50 mix-blend-screen">
        <div className="absolute inset-0 translate-y-20 rotate-12">
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/70 to-transparent blur-sm animate-shimmer" />
          <div className="absolute inset-y-0 right-0 w-1 bg-gradient-to-b from-transparent via-white/50 to-transparent blur-sm animate-shimmer" />
        </div>
      </div>
      <div className="absolute inset-0 opacity-60">
        <div className="h-full w-full bg-[linear-gradient(120deg,rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(300deg,rgba(255,255,255,.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>
    </div>
  );
}

function ProductFrame() {
  return (
    <div className="relative aspect-video w-full max-w-5xl mx-auto">
      <div className="absolute inset-0 rounded-[3rem] border border-white/10 glass shadow-glow">
        <LightGrid />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.18, 0.67, 0.32, 0.94] }}
            className="relative w-[62%]"
          >
            <div className="relative w-full pt-[62%]">
              <div className="absolute inset-0 rounded-[3rem] bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,.35),rgba(255,255,255,.05)_60%)] shadow-[0_30px_120px_rgba(0,0,0,0.45)]" />
              <div className="absolute inset-[9%] rounded-[2.5rem] bg-gradient-to-br from-black via-slate-950 to-black overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(120,120,160,.45),transparent_55%)] blur-2xl" />
                <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,.08),rgba(255,255,255,.02)_48%,rgba(120,180,255,.18)_70%,rgba(255,255,255,.1)_100%)] opacity-70 mix-blend-plus-lighter" />
                <div className="absolute inset-8 rounded-[2rem] border border-white/5" />
              </div>
              <div className="absolute inset-[15%_22%_15%_22%] rounded-full bg-gradient-to-b from-slate-200/30 via-slate-50/10 to-slate-900/60 blur-2xl" />
              <div className="absolute inset-[16%_25%_16%_25%] rounded-full border border-white/20 opacity-70" />
              <div className="absolute inset-[21%_32%_21%_32%] rounded-full bg-gradient-to-b from-white/50 via-white/10 to-transparent mix-blend-screen blur-md" />
              <motion.div
                className="absolute inset-[22%_31%_22%_31%] rounded-full border border-white/25"
                animate={{ rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-[24%] flex items-center justify-center">
                <motion.div
                  className="h-32 w-32 rounded-full bg-gradient-to-br from-white/80 via-white/10 to-transparent blur-3xl"
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -right-20 top-1/3 h-40 w-40 rounded-full bg-blue-500/30 blur-3xl" />
            </div>
          </motion.div>
        </div>
        <Halo />
        <OrbitalRings />
      </div>
    </div>
  );
}

function FeatureSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-20% 0px" });

  return (
    <section ref={ref} className="relative mt-32 px-6 md:px-10">
      <div className="relative mx-auto max-w-6xl rounded-[3rem] border border-white/10 glass overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.12] via-transparent to-purple-500/10 opacity-80" />
        <div className="relative grid gap-12 px-10 py-16 md:grid-cols-3 md:px-16 md:py-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
              transition={{ delay: index * 0.15, duration: 0.9, ease: [0.19, 1, 0.22, 1] }}
              className="relative flex flex-col gap-4"
            >
              <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-medium tracking-tight">{feature.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-white/70">{feature.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="relative mt-32 px-6 pb-32 md:px-12">
      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-10 text-center">
        <div className="lens-flare -top-40 left-1/2 -translate-x-1/2 opacity-30" />
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
          className="text-4xl md:text-5xl font-medium tracking-tight"
        >
          Make every moment matter.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.19, 1, 0.22, 1] }}
          className="max-w-3xl text-base md:text-xl text-white/65 leading-relaxed"
        >
          Reserve your in-store session to experience visionOS, precision gestures, and spatial
          memories engineered by Apple. Available in select stores and online soon.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="https://www.apple.com"
            className="glass inline-flex items-center gap-3 rounded-full px-10 py-4 text-sm font-medium uppercase tracking-[0.3em]"
          >
            Watch The Film
          </a>
          <a
            href="https://www.apple.com/store"
            className="inline-flex items-center gap-3 rounded-full border border-white/20 px-10 py-4 text-sm font-medium uppercase tracking-[0.3em] text-white/70 hover:text-white hover:border-white/40 transition"
          >
            Book A Demo
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden">
      <div className="noise" />
      <section className="relative flex min-h-[120vh] flex-col items-center justify-center px-6 pt-32 pb-24 text-center md:px-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,62,255,0.18),transparent_70%)] opacity-70 blur-3xl" />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="text-xs uppercase tracking-[0.6em] text-white/50"
        >
          Introducing Apple Vision
        </motion.div>
        <SequencedCopy />
        <div className="mt-16 w-full">
          <ProductFrame />
        </div>
      </section>
      <FeatureSection />
      <CTASection />
      <footer className="px-6 py-12 text-center text-xs text-white/40">
        Apple, the Apple logo, and other marks are trademarks of Apple Inc.
      </footer>
    </main>
  );
}
