"use client"

import { Code2, Layers, Wrench, Search } from "lucide-react"
import AnimatedSection from "./animated-section"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    color: "from-orange-500 to-violet-600",
    skills: [
      { name: "HTML/CSS", icon: Code2 },
      { name: "JavaScript", icon: Code2 },
      { name: "TypeScript", icon: Code2 },
      { name: "Python", icon: Code2 },
      { name: "Dart", icon: Code2 },
    ],
  },
  {
    title: "Frameworks",
    icon: Layers,
    color: "from-violet-500 to-pink-500",
    skills: [
      { name: "React", icon: Layers },
      { name: "Next.js", icon: Layers },
      { name: "Vue.js", icon: Layers },
      { name: "Node.js", icon: Layers },
      { name: "React Native", icon: Layers },
    ],
  },
  {
    title: "Outils & Services",
    icon: Wrench,
    color: "from-pink-500 to-orange-500",
    skills: [
      { name: "Tailwind CSS", icon: Wrench },
      { name: "Git & GitHub", icon: Wrench },
      { name: "PostgreSQL", icon: Wrench },
      { name: "Firebase", icon: Wrench },
      { name: "Supabase", icon: Wrench },
    ],
  },
]

export default function SkillsSection() {
  return (
    <section className="relative z-10">
      <div className="content-container">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center space-section">
            <h2 className="heading-section space-content">
              Mes compétences{" "}
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x-optimized">
                techniques
              </span>
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Une expertise technique solide combinée à une vision créative pour créer des solutions digitales
              innovantes.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid-cards space-section-sm">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} animation="fadeInUp" delay={150 + categoryIndex * 100}>
              <div className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-200 dark:border-white/10 hover:border-orange-500/30 dark:hover:border-violet-400/30 transition-smooth-slow hover:transform hover:scale-105 hover:-translate-y-2 cursor-pointer focus-within:ring-2 focus-within:ring-orange-500/50 dark:focus-within:ring-violet-500/50 gpu-accelerated">
                <div className="relative z-10 flex items-center justify-center space-content">
                  <div className="relative">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-20 dark:bg-opacity-30 flex items-center justify-center group-hover:bg-opacity-30 dark:group-hover:bg-opacity-40 transition-smooth`}
                    >
                      <category.icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <div
                      className={`absolute inset-0 w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-r ${category.color} bg-opacity-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    ></div>
                  </div>
                </div>

                <h3
                  className={`relative z-10 heading-card text-center space-content group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-violet-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-smooth`}
                >
                  {category.title}
                </h3>

                {/* Liste des compétences avec espacement optimisé */}
                <div className="relative z-10 space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50/50 dark:bg-white/5 group-hover:bg-white/80 dark:group-hover:bg-white/10 transition-smooth"
                    >
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-orange-500/15 to-violet-500/15 dark:from-orange-500/25 dark:to-violet-500/25 flex items-center justify-center group-hover:from-orange-500/25 group-hover:to-violet-500/25 dark:group-hover:from-orange-500/35 dark:group-hover:to-violet-500/35 transition-smooth">
                        <skill.icon className="w-4 h-4 text-gray-700 dark:text-gray-300 group-hover:text-orange-500 dark:group-hover:text-violet-400 transition-colors duration-300" />
                      </div>
                      <span className="text-body font-medium group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Effet de glow */}
                <div className="relative z-10 mt-6 h-1 bg-gradient-to-r from-orange-500/0 via-orange-500/50 to-violet-500/0 dark:from-violet-500/0 dark:via-violet-500/50 dark:to-pink-500/0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA avec background transparent original */}
        <AnimatedSection animation="scaleUp" delay={400}>
          <div className="text-center">
            <a
              href="/skills"
              className="group inline-flex items-center space-x-3 px-8 py-4 bg-white/10 dark:bg-white/5 backdrop-blur-xl rounded-full border border-white/20 dark:border-white/10 hover:bg-white/20 dark:hover:bg-white/10 transition-smooth transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500/50 dark:focus:ring-violet-500/50 focus:ring-offset-2 focus:ring-offset-transparent"
            >
              <span className="text-white font-semibold">Voir toutes mes compétences</span>
              <Search className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
