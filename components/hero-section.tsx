"use client"

import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative z-10 px-6">
      <div className="text-center max-w-4xl mx-auto">
        {/* Greeting */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-white/80 mb-4">Bonjour, je suis</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
            Bienvenu Y. Sekongo
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 mb-8">Designer UI/UX & Développeur Frontend</p>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Je crée des expériences numériques exceptionnelles en combinant design créatif et développement technique pour
          donner vie à vos idées.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            href="/projects"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Voir mes projets</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 blur-xl transition-opacity"></div>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center space-x-2">
              <span>Me contacter</span>
              <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
