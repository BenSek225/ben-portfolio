"use client"

import { Mail, MapPin, MessageCircle, Instagram, Linkedin, Github, HelpCircle } from "lucide-react"
import AnimatedSection from "@/components/animated-section"

export default function ContactPage() {
  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sekongobienvenu22@gmail.com",
      href: "mailto:sekongobienvenu22@gmail.com",
      color: "text-violet-500 dark:text-violet-400",
      bgColor: "bg-violet-500/20",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Bienvenu Y. Sekongo",
      href: "https://www.linkedin.com/in/sek-y-ben",
      color: "text-blue-500 dark:text-blue-400",
      bgColor: "bg-blue-500/20",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "BenSek225",
      href: "https://github.com/BenSek225",
      color: "text-purple-500 dark:text-purple-400",
      bgColor: "bg-purple-500/20",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+225 07 10 50 40 07",
      href: "https://wa.me/2250710504007",
      color: "text-green-500 dark:text-green-400",
      bgColor: "bg-green-500/20",
    },
  ]

  const faqItems = [
    {
      question: "Quels sont vos tarifs ?",
      answer:
        "Mes tarifs varient en fonction de la complexité du projet, de sa durée et des fonctionnalités requises. Je propose des devis personnalisés après une première consultation pour comprendre vos besoins spécifiques.",
      borderColor: "border-violet-500/50 dark:border-violet-400/50",
    },
    {
      question: "Quel est votre délai de réalisation ?",
      answer:
        "Le délai de réalisation dépend de la complexité du projet et de ma charge de travail actuelle. Pour un site vitrine simple, comptez environ 2 à 3 semaines. Pour des projets plus complexes, le délai peut s'étendre à plusieurs mois.",
      borderColor: "border-pink-500/50 dark:border-pink-400/50",
    },
    {
      question: "Travaillez-vous à distance ?",
      answer:
        "Oui, je travaille principalement à distance, ce qui me permet de collaborer avec des clients du monde entier. Je reste disponible pour des réunions en visioconférence et une communication régulière tout au long du projet.",
      borderColor: "border-violet-500/50 dark:border-violet-400/50",
    },
    {
      question: "Proposez-vous des services de maintenance ?",
      answer:
        "Oui, je propose des services de maintenance et de support technique pour les sites et applications que je développe. Je peux également vous former à l'utilisation de votre site ou application pour que vous puissiez le gérer vous-même.",
      borderColor: "border-pink-500/50 dark:border-pink-400/50",
    },
  ]

  return (
    <main className="min-h-screen py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <AnimatedSection animation="fadeInUp" delay={100}>
          <div className="text-center mb-20">
            <h1 className="font-playfair text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Contactez-
              <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                moi
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Vous avez un projet en tête ? N'hésitez pas à me contacter. Je serais ravi de discuter de vos idées et de
              voir comment nous pouvons collaborer.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Section Contact Info */}
          <div className="space-y-8">
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <h2 className="font-playfair text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Restons en{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  contact
                </span>
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                Je suis disponible pour des projets web et mobile en fullstack. N'hésitez pas à me contacter pour
                discuter de votre projet ou simplement pour échanger.
              </p>
            </AnimatedSection>

            {/* Liste des contacts - Version simplifiée avec animations */}
            <div className="space-y-3">
              {contactLinks.map((contact, index) => (
                <AnimatedSection key={index} animation="fadeInLeft" delay={300 + index * 100}>
                  <a
                    href={contact.href}
                    target={contact.label === "Email" ? undefined : "_blank"}
                    rel={contact.label === "Email" ? undefined : "noopener noreferrer"}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/20 transition-all duration-300 group hover:bg-white/80 dark:hover:bg-white/10 hover:shadow-lg hover:shadow-gray-200/50 dark:hover:shadow-white/5 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer"
                  >
                    <div
                      className={`p-2 ${contact.bgColor} rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 group-hover:shadow-lg`}
                    >
                      <contact.icon
                        className={`w-4 h-4 ${contact.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                    </div>
                    <div className="flex-1 min-w-0 group-hover:translate-x-1 transition-transform duration-300">
                      <span className="text-gray-900 dark:text-white font-medium text-sm group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:via-violet-600 group-hover:to-pink-500 group-hover:bg-clip-text transition-all duration-300">
                        {contact.label}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm ml-2 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors duration-300">
                        {contact.value}
                      </span>
                    </div>

                    {/* Effet de brillance au survol */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500 pointer-events-none"></div>

                    {/* Particules flottantes */}
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-100"></div>
                    <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce transition-all duration-300 delay-200"></div>
                  </a>
                </AnimatedSection>
              ))}
            </div>

            {/* Section Disponibilité */}
            <AnimatedSection animation="fadeInLeft" delay={800}>
              <div className="bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-pink-500/10 dark:from-orange-500/20 dark:via-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm rounded-2xl p-6 border border-orange-500/20 dark:border-violet-400/20">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white">Disponibilité</h3>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Je suis actuellement disponible pour des projets freelance à temps partiel. Mon délai de réponse est
                  généralement de 24 à 48 heures.
                </p>
                <div className="mt-4 flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-green-600 dark:text-green-400 font-medium text-sm">
                    Disponible pour de nouveaux projets
                  </span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Section WhatsApp */}
          <AnimatedSection animation="fadeInRight" delay={400}>
            <div className="flex items-center justify-center">
              <div className="bg-green-50/80 dark:bg-green-900/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-green-200 dark:border-green-500/20 text-center max-w-md w-full">
                {/* Icône WhatsApp */}
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-10 h-10 text-green-500" />
                  </div>
                </div>

                {/* Titre */}
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Contactez-moi sur WhatsApp
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                  La façon la plus rapide de me contacter est via WhatsApp. Cliquez sur le bouton ci-dessous pour
                  démarrer une conversation.
                </p>

                {/* Bouton WhatsApp */}
                <a
                  href="https://wa.me/2250710504007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-3 w-full px-8 py-4 bg-green-500 hover:bg-green-600 rounded-full text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-500/25 mb-6"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Discuter sur WhatsApp</span>
                </a>

                {/* Numéro de téléphone */}
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Ou envoyez-moi un message directement au{" "}
                  <span className="font-medium text-gray-700 dark:text-gray-300">+225 07 10 50 40 07</span>
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Section Questions fréquentes */}
        <section className="mb-16">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <div className="text-center mb-16">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Questions{" "}
                <span className="bg-gradient-to-r from-orange-500 via-violet-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                  fréquentes
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Voici quelques réponses aux questions que l'on me pose souvent.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={200 + index * 150}>
                <div
                  className={`h-full flex flex-col bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border-2 ${item.borderColor} hover:border-opacity-75 transition-all duration-300 group hover:transform hover:scale-105`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 bg-gradient-to-r from-violet-500/20 to-pink-500/20 rounded-lg flex items-center justify-center">
                        <HelpCircle className="w-5 h-5 text-violet-500 dark:text-violet-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                        {item.question}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed line-clamp-5">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Section informations supplémentaires */}
        <AnimatedSection animation="scaleUp" delay={600}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/5 via-violet-500/5 to-pink-500/5 dark:from-orange-500/10 dark:via-violet-500/10 dark:to-pink-500/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-white/10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <MapPin className="w-6 h-6 text-orange-500 dark:text-violet-400" />
                <span className="text-lg font-medium text-gray-900 dark:text-white">Abidjan, Côte d'Ivoire</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Basé à Abidjan, je travaille avec des clients du monde entier. Je suis ouvert aux collaborations à
                distance et aux projets internationaux.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
