"use client"

import { Star, Quote } from "lucide-react"
import AnimatedSection from "./animated-section"

const testimonials = [
  {
    id: 1,
    name: "Marie Luciette",
    role: "CEO, TechStart",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Bienvenu a transformé notre vision en une interface utilisateur exceptionnelle. Son attention aux détails et sa créativité ont dépassé nos attentes.",
    rating: 5,
    initial: "M",
    gradientColor: "from-orange-500/20 via-orange-500/10 to-transparent",
  },
  {
    id: 2,
    name: "Jean Francois",
    role: "Product Manager, InnovateCorp",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Un développeur frontend exceptionnel avec un œil artistique remarquable. La collaboration a été fluide et le résultat final impressionnant.",
    rating: 5,
    initial: "J",
    gradientColor: "from-violet-500/20 via-violet-500/10 to-transparent",
  },
  {
    id: 3,
    name: "Sophie Laurent",
    role: "Founder, DesignStudio",
    avatar: "/placeholder.svg?height=80&width=80",
    content:
      "Bienvenu comprend parfaitement les enjeux UX/UI. Il a su créer une expérience utilisateur intuitive qui a considérablement amélioré nos conversions.",
    rating: 5,
    initial: "S",
    gradientColor: "from-pink-500/20 via-pink-500/10 to-transparent",
  },
]

export default function TestimonialsSection() {
  return (
    <section className="relative z-10">
      <div className="content-container">
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center space-section">
            <h2 className="heading-section space-content">
              Ce que disent{" "}
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x-optimized">
                mes clients
              </span>
            </h2>
            <p className="text-lead max-w-2xl mx-auto">
              Découvrez les témoignages de clients satisfaits de mes services.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid-cards">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} animation="fadeInUp" delay={150 + index * 100}>
              <div className="relative h-full flex flex-col bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10 overflow-hidden hover:bg-white dark:hover:bg-white/10 transition-smooth focus-within:ring-2 focus-within:ring-orange-500/50 dark:focus-within:ring-violet-500/50">
                {/* Gradient qui s'estompe progressivement - VERSION ORIGINALE */}
                <div
                  className={`absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl ${testimonial.gradientColor} pointer-events-none opacity-60`}
                ></div>

                {/* Icône de guillemets */}
                <div className="relative z-10 mb-4">
                  <Quote className="w-8 h-8 text-gray-400 dark:text-gray-500" />
                </div>

                {/* Message/Témoignage */}
                <div className="relative z-10 space-content flex-1">
                  <p className="text-body italic font-medium line-clamp-4">{testimonial.content}</p>
                </div>

                {/* Auteur - mt-auto pushes this to bottom */}
                <div className="relative z-10 flex items-center space-x-3 space-content mt-auto">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-r ${testimonial.gradientColor.replace("/20", "").replace("/10", "").replace("to-transparent", "to-violet-600")} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white font-bold text-sm">{testimonial.initial}</span>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="font-playfair text-gray-900 dark:text-white font-semibold text-base leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-body-sm leading-tight">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="relative z-10 flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
