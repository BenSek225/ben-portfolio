"use client"

import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const navigationLinks = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/skills", label: "Compétences" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/sek-y-ben", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/BenSek225", label: "GitHub" },
    { icon: Mail, href: "mailto:sekongobienvenu22@gmail.com", label: "Email" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-transparent py-12 sm:py-16 px-4 sm:px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {/* Logo et Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
              <div className="relative">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg sm:text-xl">
                  B
                </div>
                <div className="absolute inset-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 blur-md opacity-50"></div>
              </div>
              <span className="font-playfair text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Bienvenu Y. Sekongo
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              Développeur Web & Mobile Fullstack passionné par la création de solutions digitales innovantes et
              performantes.
            </p>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-gray-900 dark:text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Navigation
            </h3>
            <nav className="space-y-2 sm:space-y-3">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={scrollToTop}
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-gray-900 dark:text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Contact
            </h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-600 dark:text-gray-400 text-sm">Abidjan, Côte d'Ivoire</p>
              <a
                href="https://wa.me/2250710504007"
                target="_blank"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
                rel="noreferrer"
              >
                +225 07 10 50 40 07
              </a>
              <a
                href="mailto:sekongobienvenu22@gmail.com"
                className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 text-sm"
              >
                sekongobienvenu22@gmail.com
              </a>
            </div>
          </div>

          {/* Réseaux sociaux */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-gray-900 dark:text-white font-semibold text-base sm:text-lg mb-4 sm:mb-6">
              Réseaux sociaux
            </h3>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
                  aria-label={social.label}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Ligne de séparation et copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-300 dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-500 text-xs sm:text-sm">
            © 2026 Bienvenu Y. Sekongo. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
