"use client"

import Image from "next/image"
import Link from "next/link"
import { Mail, Download, Award, Users, Coffee, GraduationCap, Lightbulb } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function AboutPage() {
  const stats = [
    { icon: Award, value: "50+", label: "Projets réalisés" },
    { icon: Users, value: "30+", label: "Clients satisfaits" },
    { icon: Coffee, value: "1000+", label: "Tasses de café" },
  ]

  const experiences = [
    {
      title: "Lead Frontend Engineer – SaaS",
      company: "Entreprise E2L",
      location: "Abidjan",
      period: "2024 - Aujourd'hui",
      status: "En cours",
      description: "Développement d'applications frontend modernes avec React",
      responsibilities: [
        "Développement d'une application Web; GOBLO frontend utilisant React JS, Figma, Tailwind CSS",
        "Développement d'une application Mobile; TONTINE+ frontend utilisant React-Native, Expo, Figma, Tailwind CSS, TypeScript",
        "Collaboration avec l'équipe design pour l'implémentation des maquettes",
        "Optimisation des performances et de l'expérience utilisateur",
        "Tests et débogage des applications",
      ],
      technologies: ["React", "React-Naative", "Expo", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: " Lead Full-Stack Developer",
      company: "Volaille du bélier",
      website: "hyperaccess.com",
      location: "Abidjan",
      period: "Mai 2025 - Aujourd'hui",
      status: "En cours",
      description: "Développement d'une Marketplace E-commerce de vente de poulet",
      responsibilities: [
        "Architecture fullstack (Frontend Next.js + Backend Supabase)",
        "Mise en place de l'authentification et gestion des utilisateurs",
        "Conception et implémentation de la base de données",
        "Développement et intégration d'APIs REST",
        "Gestion de projet et coordination des développements",
      ],
      technologies: ["React", "Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Développeur Web & Mobile Freelance",
      company: "Indépendant",
      location: "Abidjan",
      period: "2023 - Aujourd'hui",
      status: "Actif",
      description: "Développement d'applications web & mobile et accompagnement technique pour diverses entreprises",
      responsibilities: [
        "Développement d'une application mobile de gestion immobilière LOCAFY : architecture fullstack (frontend React Native + Expo + Supabase + Express.js)",
        "Création de sites et applications web sur mesure pour divers clients",
        "Intégration, maintenance, évolutions et support technique",
        "Utilisation de solutions SaaS, APIs et outils modernes NoCode/LowCode",
        "Formation continue et veille technologique",
      ],
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "Expo",
        "Supabase",
        "Express.js",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
  ]

  const interests = [
    {
      icon: "🎨",
      title: "Art Digital",
      description: "Création d'œuvres numériques et exploration des nouvelles technologies créatives.",
    },
    {
      icon: "📚",
      title: "Veille Technologique",
      description: "Suivi des dernières tendances en design et développement web.",
    },
    {
      icon: "🏃‍♂️",
      title: "Sport",
      description: "Course à pied et fitness pour maintenir un équilibre vie pro/perso.",
    },
    {
      icon: "✈️",
      title: "Voyages",
      description: "Découverte de nouvelles cultures pour nourrir ma créativité.",
    },
    {
      icon: "♟️",
      title: "Jeux d'échecs",
      description: "Stratégie et réflexion pour développer la logique et la patience.",
    },
    {
      icon: "🤖",
      title: "Intelligence Artificielle",
      description: "Exploration des dernières avancées en IA et machine learning.",
    },
    {
      icon: "🎵",
      title: "Musique",
      description: "Écoute et découverte musicale pour stimuler l'inspiration créative.",
    },
    {
      icon: "🧘‍♂️",
      title: "Détente",
      description: "Méditation et relaxation pour maintenir un bien-être mental optimal.",
    },
  ]

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/cv/Bienvenu_Sekongo_Fullstack_Developer_CV.pdf"
    link.download = "Bienvenu_Sekongo_Fullstack_Developer_CV.pdf"
    link.setAttribute("target", "_blank")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <main className="min-h-screen py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-20">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              À propos de{" "}
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                moi
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionné par la création d'expériences numériques exceptionnelles, je combine créativité et expertise
              technique pour donner vie à vos projets.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content - Image et Introduction */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image avec design amélioré */}
          <AnimatedSection animation="fadeInLeft" delay={200}>
            <div className="relative order-1 lg:order-1">
              <div className="relative w-full max-w-lg mx-auto">
                {/* Cadre décoratif */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 via-violet-500/20 to-pink-500/20 rounded-3xl blur-2xl"></div>

                {/* Image principale */}
                <div className="relative bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-pink-500/10 rounded-2xl p-2 z-10">
                  <Image
                    src="/images/profile-bienvenu.png"
                    alt="Bienvenu Y. Sekongo - Développeur Web & Mobile Fullstack"
                    width={500}
                    height={600}
                    priority
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>

                {/* Éléments décoratifs flottants */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-orange-500/20 rounded-full blur-xl animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-violet-500/20 rounded-full blur-xl animate-float animation-delay-1000"></div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contenu textuel */}
          <AnimatedSection animation="fadeInRight" delay={300}>
            <div className="space-y-8 order-2 lg:order-2">
              <div>
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Développeur Web & Mobile Fullstack
                </h2>

                <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <p>
                    Développeur intermédiaire avec plus de 5 ans d&apos;expérience en développement web et mobile. Bien
                    que je n&apos;aie pas de longue expérience en entreprise traditionnelle, j&apos;ai travailler sur
                    plusieurs projets concret et je maitrise des technologies modernes pour créer des solutions
                    complètes et performantes.
                  </p>

                  <p>
                    Ma passion pour l'innovation et mon attention aux détails me permettent de concevoir et développer
                    des architectures complètes, du frontend intuitif au backend robuste. Je travaille avec des
                    technologies modernes comme React, Next.js, React Native, Node.js, et les outils cloud les plus
                    avancés.
                  </p>

                  <p>
                    Mon approche se base sur une compréhension profonde des besoins utilisateurs, une architecture
                    backend solide, et une veille constante des dernières tendances en développement fullstack.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                  >
                    <Mail className="w-5 h-5" />
                    <span>Me contacter</span>
                  </Link>

                  <button
                    onClick={handleDownloadCV}
                    className="flex items-center justify-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-orange-500 dark:hover:border-violet-400 transition-all duration-300 transform hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    <span>Télécharger CV</span>
                  </button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Expérience Professionnelle */}
        <section className="mb-24">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="text-center mb-20">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Expérience{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  professionnelle
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Mon parcours professionnel dans le domaine du design et du développement web.
              </p>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-violet-600 to-pink-500 opacity-30"></div>

              {experiences.map((experience, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={200 + index * 150}>
                  <div className={`relative flex items-start ${index < experiences.length - 1 ? "mb-16" : ""}`}>
                    {/* Cercle numéroté */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 ${
                        index === 0
                          ? "bg-gradient-to-r from-orange-500 to-violet-600"
                          : index === 1
                            ? "bg-gradient-to-r from-violet-600 to-pink-500"
                            : "bg-gradient-to-r from-pink-500 to-orange-500"
                      } rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10`}
                    >
                      {index + 1}
                    </div>

                    {/* Contenu */}
                    <div className="ml-8 flex-1">
                      <h3 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                        {experience.title}
                      </h3>

                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-6">
                        <span className="text-gray-600 dark:text-gray-400 font-medium">{experience.period}</span>
                        <span className="text-gray-500 dark:text-gray-500">|</span>
                        <span className="text-gray-600 dark:text-gray-400">
                          {experience.company}
                          {experience.website && ` (${experience.website})`}
                        </span>
                        <span className="text-gray-500 dark:text-gray-500">|</span>
                        <span className="text-gray-600 dark:text-gray-400">{experience.location}</span>
                      </div>

                      <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex} className="flex items-start">
                            <span
                              className={`${
                                index === 0
                                  ? "text-orange-500 dark:text-violet-400"
                                  : index === 1
                                    ? "text-violet-500 dark:text-pink-400"
                                    : "text-pink-500 dark:text-orange-400"
                              } mr-3`}
                            >
                              •
                            </span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="mt-6">
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className={`px-3 py-1 ${
                                index === 0
                                  ? "bg-gradient-to-r from-orange-500/10 to-violet-500/10 dark:from-orange-500/20 dark:to-violet-500/20 border border-orange-500/20 dark:border-violet-400/20"
                                  : index === 1
                                    ? "bg-gradient-to-r from-violet-500/10 to-pink-500/10 dark:from-violet-500/20 dark:to-pink-500/20 border border-violet-500/20 dark:border-pink-400/20"
                                    : "bg-gradient-to-r from-pink-500/10 to-orange-500/10 dark:from-pink-500/20 dark:to-orange-500/20 border border-pink-500/20 dark:border-orange-400/20"
                              } text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Formation Académique */}
        <section className="mb-24">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Formation{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  académique
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Mon parcours académique et mes qualifications.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Master – Ingénierie Cloud & Logiciel",
                school: "IMAT Abidjan",
                period: "En cours (en ligne)",
                status: "Actuel",
                color: "orange",
              },
              {
                title: "Licence – Informatique, Génie Logiciel",
                school: "IMAT Abidjan",
                period: "2023",
                status: null,
                color: "violet",
              },
              {
                title: "Baccalauréat – Série D",
                school: "Institut Saint Silver (Yopougon)",
                period: "2019",
                status: null,
                color: "pink",
              },
              {
                title: "BEPC (Brevet d'études du premier cycle)",
                school: "Institut Saint Silver (Yopougon)",
                period: "2016",
                status: null,
                color: "orange",
              },
            ].map((education, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={200 + index * 100}>
                <div className="h-full flex flex-col relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 overflow-hidden group hover:border-orange-500/30 dark:hover:border-orange-400/30 transition-all duration-300">
                  {/* Gradient qui s'estompe progressivement */}
                  <div
                    className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-${education.color}-500/20 via-${education.color}-500/10 to-transparent pointer-events-none`}
                  ></div>

                  {/* Icône de diplôme */}
                  <div className="relative z-10 mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r from-${education.color}-500/20 to-${education.color}-500/10 rounded-xl flex items-center justify-center`}
                    >
                      <GraduationCap
                        className={`w-8 h-8 text-${education.color}-500 dark:text-${education.color}-400`}
                      />
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="relative z-10">
                    <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                      {education.title}
                    </h3>

                    <div className="space-y-2 mb-4">
                      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{education.school}</p>
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 dark:text-gray-400 text-sm">{education.period}</span>
                        {education.status && (
                          <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-medium">
                            {education.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Centres d'Intérêt */}
        <section className="mb-24">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Centres{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  d'intérêt
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Mes passions et hobbies qui nourrissent ma créativité et mon équilibre personnel.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={150 + index * 75}>
                <div className="h-full flex flex-col bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 dark:hover:border-violet-400/30 transition-all duration-300 text-center group hover:transform hover:scale-105">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white mb-3">
                    {interest.title}
                  </h3>
                  <p className="hidden md:block text-gray-600 dark:text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {interest.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Philosophie */}
        <section className="mb-16">
          <AnimatedSection animation="scaleUp" delay={200}>
            <div className="bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-pink-500/10 dark:from-orange-500/20 dark:via-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10">
              <div className="text-center mb-8">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Ma{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                    philosophie
                  </span>
                </h2>
              </div>

              <div className="max-w-4xl mx-auto">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 via-violet-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center">
                      <Lightbulb className="w-8 h-8 text-orange-500 dark:text-violet-400" />
                    </div>
                  </div>
                  <div>
                    <blockquote className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed mb-6 italic">
                      "Le design n'est pas seulement ce à quoi ça ressemble et ce que ça fait. Le design, c'est comment
                      ça fonctionne."
                    </blockquote>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                      Cette citation de Steve Jobs guide mon approche : créer des expériences qui sont non seulement
                      belles, mais aussi fonctionnelles et centrées sur l'utilisateur. Chaque projet est une opportunité
                      de résoudre des problèmes complexes avec élégance et simplicité.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </section>
      </div>
    </main>
  )
}
