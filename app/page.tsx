"use client"

import Header from "@/components/Header";
import FitChatbot from "@/components/FitChatbot";
import { motion } from "motion/react";
import Link from "next/link";

const features = [
  {
    icon: "🔥",
    title: "Track Every Rep",
    description: "Log workouts in seconds. Visualize your progress over time with beautiful charts.",
  },
  {
    icon: "⚡",
    title: "Smart Routines",
    description: "AI-powered workout plans that adapt to your schedule, goals, and recovery.",
  },
  {
    icon: "🏆",
    title: "Stay Accountable",
    description: "Streak tracking, milestones, and community challenges to keep you showing up.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-24 pb-16">

        {/* Subtle background circle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-orange-100 opacity-60 blur-[80px] pointer-events-none" />

        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mb-8 inline-flex items-center gap-2 border border-stone-200 bg-white text-stone-500 text-xs font-medium px-4 py-1.5 rounded-full tracking-widest uppercase shadow-sm"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
          Your Fitness Companion
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight leading-none mb-3"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          YOUR
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative text-6xl sm:text-7xl lg:text-9xl font-black tracking-tight leading-none mb-10 text-orange-500"
          style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
        >
          FITNESS JOURNEY
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="relative max-w-md text-stone-500 text-lg leading-relaxed mb-10"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          Track workouts, crush goals, and build habits that actually stick — all in one place.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="relative flex flex-col sm:flex-row gap-3 items-center"
        >
          <Link
            href="/signup"
            className="group px-8 py-3.5 bg-stone-900 hover:bg-stone-700 text-white font-semibold text-sm rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:scale-[1.02]"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get Started — It's Free
            <span className="ml-2 group-hover:translate-x-1 inline-block transition-transform duration-200">→</span>
          </Link>
          <Link
            href="#features"
            className="px-8 py-3.5 border border-stone-200 hover:border-stone-400 text-stone-500 hover:text-stone-800 font-medium text-sm rounded-xl transition-all duration-200 bg-white"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-300 text-xs tracking-widest uppercase"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4 }}
            className="w-px h-8 bg-gradient-to-b from-stone-300 to-transparent"
          />
        </motion.div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-stone-200" />
      </div>

      {/* Features Section */}
      <section id="features" className="relative px-6 py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-3 text-stone-900"
            style={{ fontFamily: "'Bebas Neue', 'Impact', sans-serif" }}
          >
            BUILT TO KEEP YOU MOVING
          </h2>
          <p className="text-stone-400 text-base max-w-sm mx-auto" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            Everything you need. Nothing you don't.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl border border-stone-200 bg-white hover:border-orange-300 hover:shadow-md transition-all duration-300"
            >
              <div className="text-3xl mb-5">{f.icon}</div>
              <h3
                className="text-base font-bold mb-2 text-stone-900 group-hover:text-orange-500 transition-colors duration-200"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {f.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {f.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <FitChatbot />
    </div>
  );
}