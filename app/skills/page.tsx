"use client"

import { useState } from "react"
import { Code2, Layers, Users, Award, BookOpen, TrendingUp, Star, CheckCircle, Wrench } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState("languages")

  const skillCategories = [
    {
      id: "languages",
      title: "Languages",
      icon: Code2,
      color: "from-orange-500 to-violet-600",
      description: "Langages de programmation maîtrisés",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Python", level: 50 },
        { name: "Dart", level: 30 },
        { name: "C / C++", level: 20 },
      ],
    },
    {
      id: "frameworks",
      title: "Frameworks",
      icon: Layers,
      color: "from-violet-500 to-pink-500",
      description: "Frameworks et librairies principales",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "React Native", level: 85 },
        { name: "Expo", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "Vue.js", level: 70 },
        { name: "Django", level: 50 },
        { name: "Flutter", level: 30 },
      ],
    },
    {
      id: "tools",
      title: "Outils & Services",
      icon: Wrench,
      color: "from-pink-500 to-orange-500",
      description: "Outils, services et technologies de support",
      skills: [
        { name: "Git & GitHub", level: 95 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Supabase", level: 85 },
        { name: "PostgreSQL", level: 85 },
        { name: "MySQL", level: 75 },
        { name: "App Store Deployment", level: 75 },
        { name: "Wireframes & Prototypes", level: 70 },
        { name: "Firebase", level: 65 },
      ],
    },
  ]

  const certifications = [
    {
      title: "Certified Full Stack Developer Curriculum",
      issuer: "freeCodeCamp",
      date: "2024",
      icon: Award,
      color: "text-green-500",
    },
    {
      title: "React Developer Certification",
      issuer: "Meta",
      date: "2024",
      icon: Code2,
      color: "text-blue-500",
    },
    {
      title: "A2 English for Developers (Beta)",
      issuer: "freeCodeCamp",
      date: "2024",
      icon: BookOpen,
      color: "text-violet-500",
    },
    {
      title: "Free Foundational C# with Microsoft",
      issuer: "Microsoft",
      date: "2023",
      icon: Code2,
      color: "text-purple-500",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: Code2,
      color: "text-orange-500",
    },
    {
      title: "Front End Development Libraries",
      issuer: "freeCodeCamp",
      date: "2023",
      icon: Layers,
      color: "text-pink-500",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2022",
      icon: Code2,
      color: "text-yellow-500",
    },
    {
      title: "Legacy Python for Everybody",
      issuer: "freeCodeCamp",
      date: "2022",
      icon: Code2,
      color: "text-red-500",
    },
  ]

  const activeSkills = skillCategories.find((cat) => cat.id === activeCategory)

  return (
    <main className="min-h-screen py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-20">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Mes{" "}
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Compétences
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Une expertise technique solide en fullstack combinée à une vision créative pour créer des solutions
              digitales innovantes, performantes et scalables.
            </p>
          </div>
        </AnimatedSection>

        {/* Navigation des catégories */}
        <AnimatedSection animation="scaleUp" delay={200}>
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 dark:border-white/10">
              {skillCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white/20 dark:hover:bg-white/10"
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.title}</span>
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Compétences détaillées */}
        <section className="mb-20">
          {activeSkills && (
            <AnimatedSection animation="fadeInUp" delay={300}>
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-6 md:p-8 lg:p-12 border border-gray-200 dark:border-white/10">
                <div className="flex items-center space-x-4 mb-8 lg:mb-12">
                  <div className={`p-3 lg:p-4 bg-gradient-to-r ${activeSkills.color} rounded-2xl`}>
                    <activeSkills.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div>
                    <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                      {activeSkills.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">{activeSkills.description}</p>
                  </div>
                </div>

                {/* Grille responsive améliorée */}
                <div
                  className={`grid gap-4 md:gap-6 ${
                    activeSkills.skills.length > 10
                      ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                      : "grid-cols-1 md:grid-cols-2"
                  }`}
                >
                  {activeSkills.skills.map((skill, index) => (
                    <AnimatedSection key={index} animation="scaleUp" delay={100 + index * 50}>
                      <div className="group p-4 md:p-6 bg-gray-50/50 dark:bg-white/5 rounded-xl md:rounded-2xl border border-gray-200 dark:border-white/10 hover:border-orange-500/30 dark:hover:border-violet-400/30 transition-all duration-300 hover:transform hover:scale-105">
                        <div className="flex items-center justify-between mb-3 md:mb-4">
                          <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base truncate">
                            {skill.name}
                          </span>
                          <span className="text-lg md:text-xl font-bold text-gray-900 dark:text-white flex-shrink-0 ml-2">
                            {skill.level}%
                          </span>
                        </div>

                        {/* Barre de progression */}
                        <div className="relative mb-2 md:mb-3">
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 md:h-3">
                            <div
                              className={`h-2 md:h-3 bg-gradient-to-r ${activeSkills.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Indicateur de niveau */}
                        <div className="flex justify-between text-xs md:text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Niveau</span>
                          <span
                            className={`font-medium ${
                              skill.level >= 90
                                ? "text-green-500"
                                : skill.level >= 80
                                  ? "text-blue-500"
                                  : skill.level >= 70
                                    ? "text-orange-500"
                                    : "text-gray-500"
                            }`}
                          >
                            {skill.level >= 90
                              ? "Expert"
                              : skill.level >= 80
                                ? "Avancé"
                                : skill.level >= 70
                                  ? "Intermédiaire"
                                  : "Débutant"}
                          </span>
                        </div>
                      </div>
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}
        </section>

        {/* Certifications */}
        <section className="mb-20">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="text-center mb-12">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Certifications &{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  Formations
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Mes certifications et formations continues pour rester à jour avec les dernières technologies.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={150 + index * 75}>
                <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 dark:hover:border-violet-400/30 transition-all duration-300 group hover:transform hover:scale-105 text-center h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div
                      className={`p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <cert.icon className={`w-8 h-8 ${cert.color}`} />
                    </div>
                  </div>
                  <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-3 min-h-[72px] flex items-center justify-center">
                    {cert.title}
                  </h3>
                  <div className="mt-auto">
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{cert.issuer}</p>
                    <span className="text-orange-500 dark:text-violet-400 font-medium text-sm">{cert.date}</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Statistiques */}
        <section className="mb-20">
          <AnimatedSection animation="scaleUp" delay={200}>
            <div className="bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-pink-500/10 dark:from-orange-500/20 dark:via-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10">
              <div className="text-center mb-12">
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Quelques{" "}
                  <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                    chiffres
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-4 gap-8">
                {[
                  { icon: Code2, value: "30+", label: "Projets réalisés", color: "orange" },
                  { icon: Users, value: "20+", label: "Clients satisfaits", color: "violet" },
                  { icon: TrendingUp, value: "5+", label: "Années d'expérience", color: "pink" },
                  { icon: Star, value: "15+", label: "Technologies maîtrisées", color: "orange" },
                ].map((stat, index) => (
                  <AnimatedSection key={index} animation="scaleUp" delay={300 + index * 100}>
                    <div className="text-center">
                      <div className="flex justify-center mb-4">
                        <div className={`p-4 bg-gradient-to-r from-${stat.color}-500/20 to-violet-500/20 rounded-2xl`}>
                          <stat.icon className={`w-8 h-8 text-${stat.color}-500 dark:text-violet-400`} />
                        </div>
                      </div>
                      <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                      <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </section>

        {/* Call to action */}
        <AnimatedSection animation="scaleUp" delay={400}>
          <div className="text-center">
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Travaillons ensemble !
              </h2>
              <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Mes compétences sont à votre service pour donner vie à vos projets les plus ambitieux.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Démarrer un projet</span>
                  <CheckCircle className="w-5 h-5" />
                </a>
                <a
                  href="/projects"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-orange-500 dark:hover:border-violet-400 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Voir mes réalisations</span>
                  <BookOpen className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
