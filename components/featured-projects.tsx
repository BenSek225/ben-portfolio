"use client"

import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import AnimatedSection from "./animated-section"

const projects = [
  {
    id: 0,
    title: "Volaille du Bélier",
    description:
      "Plateforme e-commerce et de gestion complète pour la vente et distribution de produits avicoles en Côte d'Ivoire avec 5 interfaces (Client, Boutique, Franchise, Usine, Super Admin).",
    image: "/projects/volaille-du-belier/acceuil-page.png",
    slug: "volaille-du-belier",
  },
  {
    id: 1,
    title: "Ôba-lii",
    description:
      "Application mobile complète de commande et livraison de repas avec suivi en temps réel, paiements sécurisés et trois interfaces utilisateur (Client, Livreur, Restaurant).",
    image: "/projects/oba-lii/home-client.png",
    slug: "oba-lii",
  },
  {
    id: 2,
    title: "Répertoire+",
    description:
      "Plateforme centralisée de communication SMS et gestion de campagnes pour les régions avec accès internet limité, combinant gestion de contacts, SMS en masse, abonnements et rapports.",
    image: "/projects/repertoire-plus/acceuil-home.png",
    slug: "repertoire-plus",
  },
]

export default function FeaturedProjects() {
  return (
    <section className="relative z-10">
      <div className="content-container">
        {/* Header avec espacement cohérent */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center space-section">
            <h2 className="heading-section space-content">
              Projets{" "}
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x-optimized">
                Phares
              </span>
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets récents qui démontrent mes compétences en développement web et
              mobile fullstack.
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid avec backgrounds transparents originaux */}
        <div className="grid-projects space-section-sm">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} animation="fadeInUp" delay={150 + index * 100}>
              <Link href={`/projects/${project.slug}`} className="group block cursor-pointer">
                <div className="relative transition-smooth-slow group-hover:-translate-y-2 gpu-accelerated">
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100 dark:bg-gray-800 rounded-xl sm:rounded-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 gpu-accelerated"
                      priority={project.id <= 3}
                    />

                    {/* Overlay optimisé - RETOUR VERSION ORIGINALE */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-smooth-slow">
                      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth-slow transform translate-y-4 group-hover:translate-y-0">
                        <div className="flex items-center space-x-2 bg-white/90 dark:bg-black/90 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-gray-900 dark:text-white">
                          <span>Voir le projet</span>
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth-slow"></div>
                  </div>

                  {/* Content avec espacement cohérent - PAS DE BACKGROUND OPAQUE */}
                  <div className="relative z-20 p-4 sm:p-6 space-y-3">
                    <h3 className="heading-card group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-violet-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-smooth">
                      {project.title}
                    </h3>

                    <p className="text-body group-hover:text-white/70 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Button avec background transparent original */}
        <AnimatedSection animation="scaleUp" delay={400}>
          <div className="text-center">
            <Link
              href="/projects"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-smooth transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <span className="text-white font-semibold text-lg">Voir tous les projets</span>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
