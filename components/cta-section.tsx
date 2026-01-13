"use client"

import { ArrowRight, Mail } from "lucide-react"
import Link from "next/link"
import AnimatedSection from "./animated-section"

export default function CTASection() {
  return (
    <section className="relative z-10">
      <div className="content-container">
        <AnimatedSection animation="scaleUp" delay={100}>
          <div className="relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10 text-center overflow-hidden">
            {/* Gradient décoratif - VERSION ORIGINALE */}
            <div className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-orange-500/10 via-violet-500/10 to-pink-500/10 dark:from-orange-500/15 dark:via-violet-500/15 dark:to-pink-500/15 pointer-events-none opacity-70"></div>

            <div className="relative z-10">
              <h2 className="heading-subsection space-content">
                Prêt à collaborer sur votre{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x-optimized">
                  prochain projet
                </span>{" "}
                ?
              </h2>

              <p className="text-lead space-content max-w-2xl mx-auto">
                Je suis disponible pour des projets web et mobiles en fullstack. N'hésitez pas à me contacter pour
                discuter de votre projet.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-smooth transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
                >
                  <span className="flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Me contacter</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
