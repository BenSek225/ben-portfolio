"use client"

import { ArrowRight, Mail, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef, useCallback } from "react"
import AnimatedSection from "./animated-section"
import TypewriterEffect from "./typewriter-effect"

export default function EnhancedHeroSection() {
  const [mounted, setMounted] = useState(false)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setMouse({
      x: (e.clientX - cx) / rect.width,
      y: (e.clientY - cy) / rect.height,
    })
  }, [])

  useEffect(() => {
    setMounted(true)
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  if (!mounted) return null

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative z-10 content-container overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-3 gap-8 lg:gap-16 items-center">
        <AnimatedSection
          animation="fadeInRight"
          delay={100}
          className="flex justify-center lg:justify-start order-first lg:order-1"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80">
            {/* Animated circular border with gradient */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 p-1 animate-spin-slow"
              style={{ animationDuration: "8s" }}
            >
              <div className="absolute inset-1 rounded-full bg-white dark:bg-gray-900" />
            </div>

            {/* Profile image in circle */}
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white dark:border-gray-900 shadow-2xl shadow-orange-500/20 dark:shadow-violet-500/20">
              <Image
                src="/images/profile-ben-pro.png"
                alt="Bienvenu Y. Sekongo - Fullstack Developer"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating accent circles */}
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-orange-500/20 rounded-full blur-2xl animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-violet-500/20 rounded-full blur-2xl animate-pulse animation-delay-500" />
          </div>
        </AnimatedSection>

        <div className="text-center space-y-6 order-last lg:order-2 lg:col-span-2">
          {/* Greeting avec animation optimisée */}
          <AnimatedSection animation="fadeIn" delay={100}>
            <div className="space-y-4">
              <p className="text-body mb-2 font-light">Salut, moi c&apos;est</p>

              {/* Nom principal avec hiérarchie claire */}
              <h1 className="heading-hero">
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x-optimized">
                  Bienvenu Y. Sekongo
                </span>
              </h1>

              {/* Sous-titre avec effet typewriter */}
              <div className="relative inline-block lg:inline">
                <p className="heading-subsection text-gray-700 dark:text-gray-300 font-light">
                  <TypewriterEffect
                    words={[
                      "Développeur Web Fullstack",
                      "Développeur Mobile React Native",
                      "Architecte Frontend & Backend",
                      "Créateur d'expériences digitales",
                    ]}
                    typingSpeed={75}
                    deletingSpeed={40}
                    pauseDuration={2200}
                  />
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Description avec espacement cohérent */}
          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-lead max-w-2xl lg:max-w-none">
              Basé à Abidjan, je transforme des idées complexes en produits digitaux que les gens adorent utiliser —
              du premier pixel au dernier endpoint. Web, mobile, fullstack : je couvre tout.
            </p>
          </AnimatedSection>

          {/* Boutons CTA avec espacement optimisé */}
          <AnimatedSection animation="scaleUp" delay={300}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/projects"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-smooth transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
                  <span>Voir mes projets</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500"></div>
              </Link>

              <Link
                href="/contact"
                className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-semibold text-base sm:text-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-orange-500 dark:hover:border-violet-400 transition-smooth transform hover:scale-105 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-900"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Me contacter</span>
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Éléments décoratifs avec parallax souris */}
      <div
        className="absolute top-1/4 left-10 w-24 h-24 bg-orange-500/15 rounded-full blur-2xl pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * -30}px, ${mouse.y * -20}px)` }}
      />
      <div
        className="absolute top-1/3 right-10 w-36 h-36 bg-violet-500/15 rounded-full blur-2xl pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * 25}px, ${mouse.y * 25}px)` }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-20 h-20 bg-pink-500/15 rounded-full blur-2xl pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * -20}px, ${mouse.y * 30}px)` }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-orange-400/10 rounded-full blur-xl pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * 35}px, ${mouse.y * -25}px)` }}
      />
    </section>
  )
}
