"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "@/contexts/theme-context"
import { Moon, Sun, Menu, X } from "lucide-react"

export default function GlowHeader() {
  const { theme, toggleTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/skills", label: "Compétences" },
    { href: "/projects", label: "Projets" },
    { href: "/contact", label: "Contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMenuOpen])

  // Ajouter cette fonction après les useEffect existants
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl bg-black/30 dark:bg-black/50 border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo avec effet glow - Desktop */}
            <Link href="/" className="group relative hidden lg:flex" onClick={scrollToTop}>
              <div className="flex items-center space-x-2">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                    B
                  </div>
                  <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
                <span className="font-playfair text-lg font-bold bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  Bienvenu Y. Sekongo
                </span>
              </div>
            </Link>

            {/* Logo seul - Mobile */}
            <Link href="/" className="group relative lg:hidden" onClick={scrollToTop}>
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                  B
                </div>
                <div className="absolute inset-0 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center">
              <div className="flex items-center space-x-1 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full p-1.5 border border-white/20 dark:border-white/10">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={scrollToTop}
                      className={`relative px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-white bg-gradient-to-r from-orange-500 to-violet-600 shadow-lg"
                          : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 blur-md opacity-30"></div>
                      )}
                    </Link>
                  )
                })}
              </div>

              {/* Theme Toggle Desktop */}
              <button
                onClick={toggleTheme}
                className="ml-3 p-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-all duration-300 group"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-orange-500 group-hover:rotate-180 transition-transform duration-500" />
                ) : (
                  <Moon className="w-4 h-4 text-violet-600 group-hover:rotate-180 transition-transform duration-500" />
                )}
              </button>
            </nav>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-orange-500" />
                ) : (
                  <Moon className="w-4 h-4 text-violet-600" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10"
                aria-label="Toggle menu"
              >
                <Menu className="w-5 h-5 text-gray-900 dark:text-white" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/95 backdrop-blur-sm"></div>

          {/* Contenu du menu */}
          <div className="relative h-full flex flex-col">
            {/* Header du menu */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <Link
                href="/"
                className="group relative"
                onClick={() => {
                  setIsMenuOpen(false)
                  scrollToTop()
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 flex items-center justify-center text-white font-bold text-lg">
                      B
                    </div>
                    <div className="absolute inset-0 w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-violet-600 blur-md opacity-50"></div>
                  </div>
                  <span className="font-playfair text-lg font-bold bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent">
                    Bienvenu Y. Sekongo
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-white hover:text-gray-300 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation centrée */}
            <div className="flex-1 flex items-center justify-center">
              <nav className="text-center space-y-8">
                {navItems.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block text-2xl font-medium transition-all duration-300 relative ${
                        isActive
                          ? "text-transparent bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text"
                          : "text-gray-300 hover:text-white"
                      }`}
                      onClick={() => {
                        setIsMenuOpen(false)
                        scrollToTop()
                      }}
                    >
                      {item.label}
                      {isActive && (
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 rounded-full"></div>
                      )}
                    </Link>
                  )
                })}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
