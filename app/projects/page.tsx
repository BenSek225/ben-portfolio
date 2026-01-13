"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Monitor, Smartphone } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", label: "Tous les projets" },
    { id: "web", label: "Dévellopement Web & PWA", icon: Monitor },
    { id: "mobile", label: "Dévellopement Mobiles", icon: Smartphone },
  ]

  const projects = [
    // ===== WEB & PWA =====
    {
      id: 0,
      title: "Volaille du Bélier",
      description:
        "Plateforme e-commerce et de gestion complète pour la vente et distribution de produits avicoles en Côte d'Ivoire. Solution digitale transformant la chaîne de valeur avicole avec 5 interfaces : Client (marketplace), Boutique, Franchise, Usine et Super Admin.",
      image: "/projects/volaille-du-belier/acceuil-page.png",
      category: "web",
      technologies: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "React Query", "Zod"],
      liveUrl: "https://agro4life-web.vercel.app/",
      githubUrl: "https://github.com",
      date: "2024",
      slug: "volaille-du-belier",
    },
    {
      id: 1,
      title: "Répertoire+",
      description:
        "Plateforme centralisée de gestion de communication SMS et campagnes marketing pour les régions avec accès internet limité. Solution SaaS complète combinant gestion de contacts, envoi SMS en masse, abonnements, paiements électroniques et rapports détaillés.",
      image: "/projects/repertoire-plus/acceuil-home.png",
      category: "web",
      technologies: ["React", "Express.js", "Firebase", "Render", "Stripe", "Node.js", "JavaScript"],
      liveUrl: "https://repertoire-plus.firebaseapp.com/",
      githubUrl: "https://github.com",
      date: "2024",
      slug: "repertoire-plus",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description:
        "Tableau de bord interactif pour visualiser des données complexes avec graphiques dynamiques et exports.",
      image: "/images/dashboard-analytics.png",
      category: "web",
      technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      slug: "dashboard-analytics",
    },

    // ===== MOBILE =====
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Application mobile de banque avec design moderne, sécurité avancée et gestion multi-comptes.",
      image: "/images/mobile-banking.png",
      category: "mobile",
      technologies: ["React Native", "Expo", "Firebase", "TypeScript"],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023",
      slug: "mobile-banking-app",
    },
    {
      id: 5,
      title: "Ôba-lii",
      description:
        "Application mobile moderne de commande et livraison de repas locaux. Écosystème complet avec interfaces client (commande et suivi), livreur (gestion des livraisons) et restaurant (gestion des commandes et menu).",
      image: "/projects/oba-lii/home-client.png",
      category: "mobile",
      technologies: ["React Native", "TypeScript", "Firebase", "Google Maps API", "Stripe", "NativeWind"],
      liveUrl: "https://oba-lii.app",
      githubUrl: "https://github.com",
      date: "2024",
      slug: "oba-lii",
    },
    {
      id: 6,
      title: "Tontine+",
      description:
        "Application mobile MVP pour sécuriser et organiser les tontines en Côte d'Ivoire. Plateforme digitale complète de gestion des groupes d'épargne communautaire avec intégration bancaire, paiements Mobile Money, historique des transactions et interface gestionnaire (Tontinier) intuitive.",
      image: "/projects/tontine-plus/manager-home-screen.png",
      category: "mobile",
      technologies: ["React Native", "Expo.io", "TypeScript", "Supabase", "Mobile Money API"],
      liveUrl: "https://tontine-plus.app",
      githubUrl: "https://github.com",
      date: "2024",
      slug: "tontine-plus",
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <main className="min-h-screen py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-7xl">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-20">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mes{" "}
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Projets
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Découvrez une sélection de mes réalisations récentes en développement web, applications mobiles et
              solutions fullstack.
            </p>
          </div>
        </AnimatedSection>

        <section className="mb-16">
          <AnimatedSection animation="scaleUp" delay={200}>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-2xl">
                <div className="flex flex-col gap-4">
                  {/* Tous les projets */}
                  <button
                    onClick={() => setActiveFilter("all")}
                    className={`w-full px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                      activeFilter === "all"
                        ? "bg-gradient-to-r from-orange-500 to-violet-600 text-white shadow-lg"
                        : "bg-white/80 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10"
                    }`}
                  >
                    Tous les projets
                  </button>

                  {/* Catégories avec icônes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {categories.slice(1).map((category) => {
                      const Icon = category.icon
                      return (
                        <button
                          key={category.id}
                          onClick={() => setActiveFilter(category.id)}
                          className={`flex items-center justify-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                            activeFilter === category.id
                              ? "bg-gradient-to-r from-orange-500 to-violet-600 text-white shadow-lg"
                              : "bg-white/80 dark:bg-white/5 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-white/10 hover:bg-white/90 dark:hover:bg-white/10"
                          }`}
                        >
                          <Icon className="w-6 h-6" />
                          <span>{category.label}</span>
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>

        <section>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.id} animation="fadeInUp" delay={300 + index * 100}>
                <Link href={`/projects/${project.slug}`} className="group block cursor-pointer">
                  <div className="transition-all duration-500 ease-out group-hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3] bg-gray-100 dark:bg-gray-800">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        priority={project.id <= 3}
                      />

                      {/* Overlay avec "Voir le projet" */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 ease-out">
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out transform translate-y-4 group-hover:translate-y-0">
                          <div className="flex items-center space-x-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                            <span>Voir le projet</span>
                            <ExternalLink className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Gradient overlay subtil */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Content */}
                    <div className="space-y-3">
                      <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-violet-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 dark:text-white/70 leading-relaxed text-sm md:text-base">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Call to action */}
        <AnimatedSection animation="scaleUp" delay={800}>
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-pink-500/10 dark:from-orange-500/20 dark:via-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Vous avez un{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  projet en tête
                </span>{" "}
                ?
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Je serais ravi de discuter de votre projet et de voir comment nous pouvons collaborer pour le réaliser.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
              >
                <span>Discutons de votre projet</span>
                <ExternalLink className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
