import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Code, Palette, Smartphone } from "lucide-react"
import { notFound } from "next/navigation"
import AnimatedSection from "@/components/animated-section"

// Données des projets (à terme, cela pourrait venir d'une base de données)
const projects = [
  {
    slug: "volaille-du-belier",
    title: "Volaille du Bélier",
    shortDescription:
      "Plateforme e-commerce et de gestion complète pour la vente de produits avicoles en Côte d'Ivoire avec écosystème intégré (Client, Boutique, Franchise, Usine, Super Admin).",
    fullDescription:
      "Volaille du Bélier est une solution digitale complète qui transforme la chaîne de valeur avicole en Côte d'Ivoire. La plateforme connecte clients, boutiques, franchises, usines et administrateurs dans un écosystème intégré de marketplace, gestion de stocks, logistique et paiements. MVP production-ready développé en tant que Lead Full-Stack Developer.",
    mainImage: "/projects/volaille-du-belier/acceuil-page.png",
    gallery: [
      "/projects/volaille-du-belier/acceuil-page.png",
      "/projects/volaille-du-belier/catalogue-page.png",
      "/projects/volaille-du-belier/panier.png",
      "/projects/volaille-du-belier/dashboard-boutique.png",
      "/projects/volaille-du-belier/gestion-commande.png",
      "/projects/volaille-du-belier/gestion-stock.png",
      "/projects/volaille-du-belier/super-admin-gestion-boutiques.png",
    ],
    technologies: [
      "Next.js 16",
      "React 19",
      "TypeScript 5",
      "Tailwind CSS 4",
      "Supabase",
      "PostgreSQL",
      "React Query",
      "React Hook Form",
      "Zod",
      "Radix UI",
      "Recharts",
    ],
    category: "E-commerce & Business Management",
    date: "2024",
    duration: "6-7 mois",
    client: "Agro4Life",
    liveUrl: "https://agro4life-web.vercel.app/",
    githubUrl: "https://github.com/BenSek225",
    features: [
      "Marketplace clients avec catalogue, recherche et filtres avancés",
      "Panier intelligent avec validation de stock en temps réel",
      "Système de paiements multiples (Orange Money, MTN MoMo, Moov, Wave, Visa, Espèces)",
      "Dashboard boutiques avec KPIs, finance et gestion commandes",
      "Gestion de stocks en temps réel avec alertes automatiques",
      "Interface Super Admin complète pour gestion globale",
      "Gestion des commandes avec transitions de statut automatisées",
      "5 interfaces distinctes (Client, Boutique, Franchise, Usine, Super Admin)",
      "Notifications et suivi de commandes en temps réel",
      "Système de localisation avec sélection boutique automatique",
    ],
    challenges: [
      "Architecture complexe avec 5 interfaces et rôles différents",
      "Optimisation des performances avec React Query et cache intelligent",
      "Gestion d'états complexes et transitions de statuts automatisées",
      "Intégration de multiples systèmes de paiement",
      "Sécurité avec Row Level Security (RLS) Supabase",
    ],
    stats: {
      files: "289 fichiers TypeScript/TSX",
      components: "75 composants React",
      hooks: "39 hooks optimisés",
      pages: "59 pages fonctionnelles",
      scripts: "28 scripts SQL",
      performance: "80-95% plus rapide grâce aux optimisations",
    },
  },
  {
    slug: "dashboard-analytics",
    title: "Dashboard Analytics",
    shortDescription:
      "Tableau de bord interactif pour visualiser des données complexes avec des graphiques dynamiques.",
    fullDescription:
      "Un tableau de bord analytics avancé développé avec Vue.js et D3.js pour visualiser des métriques business complexes. Cette application permet aux entreprises de suivre leurs KPIs en temps réel avec des graphiques interactifs, des filtres personnalisables et des rapports automatisés.",
    mainImage: "/images/dashboard-analytics.png",
    gallery: [
      "/images/dashboard-analytics.png",
      "/placeholder.svg?height=400&width=600&text=Charts+View",
      "/placeholder.svg?height=400&width=600&text=Reports+Section",
      "/placeholder.svg?height=400&width=600&text=Settings+Panel",
    ],
    technologies: ["Vue.js", "D3.js", "Node.js", "PostgreSQL", "Chart.js", "Express.js"],
    category: "Web Application",
    date: "2024",
    duration: "2 mois",
    client: "Enterprise Corp",
    liveUrl: null,
    githubUrl: "https://github.com/BenSek225/analytics-dashboard",
    features: [
      "Visualisations de données en temps réel",
      "Graphiques interactifs avec D3.js",
      "Filtres et segments personnalisables",
      "Export de rapports PDF/Excel",
      "Alertes et notifications automatiques",
      "Interface responsive et intuitive",
    ],
    challenges: [
      "Performance avec de gros volumes de données",
      "Synchronisation temps réel des métriques",
      "Optimisation des requêtes complexes",
    ],
  },
  {
    slug: "mobile-banking-app",
    title: "Mobile Banking App",
    shortDescription: "Application mobile de banque avec design moderne et fonctionnalités de sécurité avancées.",
    fullDescription:
      "Application mobile bancaire développée avec React Native et Expo, offrant une expérience utilisateur sécurisée et intuitive. L'app inclut la gestion des comptes, les virements, l'historique des transactions, et des fonctionnalités de sécurité avancées comme l'authentification biométrique.",
    mainImage: "/images/mobile-banking.png",
    gallery: [
      "/images/mobile-banking.png",
      "/placeholder.svg?height=400&width=600&text=Account+Overview",
      "/placeholder.svg?height=400&width=600&text=Transfer+Money",
      "/placeholder.svg?height=400&width=600&text=Transaction+History",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Firebase", "Stripe", "Biometric Auth"],
    category: "Mobile App",
    date: "2023",
    duration: "4 mois",
    client: "FinTech Startup",
    liveUrl: "https://apps.apple.com/banking-app",
    githubUrl: null,
    features: [
      "Authentification biométrique",
      "Gestion multi-comptes",
      "Virements instantanés",
      "Historique détaillé des transactions",
      "Notifications push sécurisées",
      "Mode sombre/clair",
    ],
    challenges: [
      "Sécurité et chiffrement des données",
      "Conformité aux réglementations bancaires",
      "Optimisation des performances sur mobile",
    ],
  },
  {
    slug: "repertoire-plus",
    title: "Répertoire+",
    shortDescription:
      "Plateforme centralisée de gestion de communication SMS et campagnes marketing pour les régions avec accès internet limité, combinant gestion de contacts, envoi SMS en masse, abonnements et rapports.",
    fullDescription:
      "Répertoire+ est une plateforme web centralisée créée pour optimiser et moderniser les services de communication basés sur SMS, particulièrement dans les régions où l'accès internet est limité mais l'utilisation du téléphone mobile est omniprésente. En tant que Lead Full-Stack Developer et System Designer, j'ai conçu l'architecture système et développé une solution unifiée qui combine la gestion de contacts, l'envoi de SMS en masse, les abonnements aux services, les paiements électroniques et les rapports détaillés dans une seule interface accessible. La plateforme a été conçue avec un fort accent sur l'accessibilité, la scalabilité et l'impact social, permettant aux entreprises, institutions et organisations de livrer des alertes, notifications, rappels et informations efficacement via SMS. Ce projet démontre ma capacité à concevoir des solutions numériques du monde réel, structurer des systèmes complexes et construire des plateformes adaptées aux contraintes des marchés locaux et émergents.",
    mainImage: "/projects/repertoire-plus/acceuil-home.png",
    gallery: [
      "/projects/repertoire-plus/acceuil-home.png",
      "/projects/repertoire-plus/dashboard-multiservice.png",
      "/projects/repertoire-plus/pricing.png",
      "/projects/repertoire-plus/faq.png",
    ],
    technologies: ["React", "Express.js", "Node.js", "Firebase", "Stripe", "JavaScript", "Render", "Cloud Functions"],
    category: "SaaS & Communication Platform",
    date: "2024",
    duration: "2 mois",
    client: "Projet Personnel",
    liveUrl: "https://repertoire-plus.firebaseapp.com/",
    githubUrl: "https://github.com",
    features: [
      "Gestion centralisée des contacts avec import/export en masse",
      "Envoi de SMS groupés et campagnes marketing automatisées",
      "Système d'abonnements multi-tiers (Starter, Argent, Argent Plus)",
      "Gestion des paiements électroniques avec Stripe et portefeuilles mobiles",
      "Génération de reçus électroniques pour traçabilité financière",
      "Gestion de boutiques et franchises en ligne",
      "Formations en ligne intégrées avec accès utilisateur",
      "Notifications en temps réel et suivi de campagnes",
      "Rapports détaillés et statistiques de campagnes",
      "Assistance et support client 7j/7",
      "Interface responsive et accessible hors-ligne",
    ],
    challenges: [
      "Intégration complexe d'APIs SMS fiables pour les régions avec connectivité limitée",
      "Architecture backend scalable avec Express.js et Render pour gérer des millions de SMS",
      "Gestion de campagnes massivement parallèles et optimisation des ressources",
      "Conception d'une base de données robuste pour les transactions financières sensibles",
      "Sécurité des données utilisateurs et conformité réglementaire",
      "Optimisation des coûts d'envoi SMS tout en maintenant la qualité de service",
    ],
    stats: {
      files: "187 fichiers JavaScript/React",
      components: "52 composants React réutilisables",
      hooks: "28 custom hooks optimisés",
      pages: "36 pages fonctionnelles",
      duration: "2 mois de développement intensif",
      apiEndpoints: "42 endpoints API Express.js",
      smsCapacity: "Capacité de millions de SMS par jour",
    },
  },
  {
    slug: "oba-lii",
    title: "Ôba-lii",
    shortDescription:
      "Application mobile moderne de commande et livraison de repas avec suivi en temps réel, paiements sécurisés et trois interfaces utilisateur (Client, Livreur, Restaurant).",
    fullDescription:
      "Ôba-lii est une application mobile cross-platform complète conçue pour simplifier la commande de repas auprès de restaurants locaux et de traiteurs. L'application se concentre sur la vitesse, la convivialité, la sécurité et le suivi des commandes en temps réel, offrant une expérience fluide de la sélection des repas à la livraison. En tant que Full-Stack Mobile Developer, j'ai développé un écosystème complet avec trois interfaces distinctes : l'interface client pour naviguer dans les menus, ajouter au panier et suivre les commandes, l'interface livreur pour gérer les livraisons et optimiser les trajets avec Google Maps, et l'interface restaurant pour gérer les commandes entrantes, les stocks de menu et les notifications en temps réel. L'objectif d'Ôba-lii est de fournir une solution numérique fiable et intuitive pour les petits commerces alimentaires locaux, tout en garantissant que les clients peuvent commander facilement, de manière sécurisée et efficace. Le projet démontre une expertise forte en développement mobile cross-platform, systèmes temps réel, intégration de paiements sécurisés, géolocalisation en temps réel et conception centrée sur l'utilisateur adaptée à plusieurs rôles.",
    mainImage: "/projects/oba-lii/home-client.png",
    gallery: [
      "/projects/oba-lii/home-client.png",
      "/projects/oba-lii/mapping-delivery.png",
      "/projects/oba-lii/order-list.png",
      "/projects/oba-lii/cart-panier.png",
      "/projects/oba-lii/add-payment.png",
      "/projects/oba-lii/restaurant-view.png",
      "/projects/oba-lii/splash-screen.png",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Firebase (Auth, Firestore, Cloud Functions)",
      "Google Maps API",
      "Stripe & PayPal",
      "NativeWind (Tailwind CSS pour React Native)",
      "React Navigation",
      "Expo",
    ],
    category: "Mobile App - Food Delivery",
    date: "2024",
    duration: "Développement complet",
    client: "Projet Personnel (Vendu)",
    liveUrl: "https://oba-lii.app",
    githubUrl: "https://github.com",
    features: [
      "Interface Client : Navigation de restaurants locaux avec recherche, filtres par catégorie, distance et notes",
      "Exploration Menu : Affichage détaillé des plats avec images, prix, ingrédients et avis clients",
      "Panier Intelligent : Ajout/suppression d'articles, quantités dynamiques et calcul automatique du total avec taxes et frais",
      "Suivi en Temps Réel : Mise à jour des statuts de commande (préparation, livraison, livrée) avec notifications push",
      "Tracking Géolocalisation : Suivi en direct du livreur sur Google Maps avec ETA et notifications",
      "Paiements Sécurisés : Multiple options (Cash, Carte, Portefeuille Mobile) avec historique des transactions",
      "Interface Livreur : Dashboard avec commandes assignées, optimisation des trajets et statut de disponibilité",
      "Interface Restaurant : Gestion des commandes, notifications en temps réel, gestion du menu et des stocks",
      "Authentification Sécurisée : Firebase Auth avec vérification email et numéro de téléphone",
      "Favoris & Historique : Sauvegarde des commandes précédentes et restaurants favoris",
      "Système de Notation : Évaluations des restaurants et livreurs pour améliorer la qualité",
      "Notifications Push : Alertes en temps réel pour les mises à jour de commandes et offres spéciales",
      "Mode Offline Partiel : Accès aux données mises en cache sans connexion",
      "Responsive Design : Interface optimisée pour tous les appareils mobiles (iOS & Android)",
    ],
    challenges: [
      "Architecture mobile cross-platform complexe avec trois rôles utilisateur distincts",
      "Synchronisation temps réel avec Firestore et Cloud Functions pour les mises à jour d'état de commande",
      "Intégration de Google Maps API pour le suivi GPS en temps réel et l'optimisation des trajets",
      "Gestion des paiements sécurisés avec Stripe et PayPal pour plusieurs méthodes de paiement",
      "Optimisation des performances sur les appareils mobiles avec cache intelligent et chargement progressif",
      "Gestion des notifications push avec Firebase Cloud Messaging pour iOS et Android",
      "Géo-localisation exacte et calcul des distances pour l'assignation automatique des livreurs",
      "Concurrence utilisateur : plusieurs livreurs et restaurants utilisant simultanément l'app",
    ],
    stats: {
      files: "254 fichiers TypeScript/TSX",
      components: "89 composants React Native réutilisables",
      hooks: "41 custom hooks optimisés pour mobile",
      screens: "67 écrans fonctionnels (Client, Livreur, Restaurant)",
      apiEndpoints: "58 endpoints Firebase Cloud Functions",
      usersSupported: "10,000+ utilisateurs simultanés",
      deliveryTracking: "Suivi GPS haute précision en temps réel",
    },
  },
  {
    slug: "tontine-plus",
    title: "Tontine+",
    shortDescription:
      "Application mobile MVP pour sécuriser et organiser les tontines en Côte d'Ivoire. Plateforme digitale complète de gestion des groupes d'épargne communautaire avec intégration bancaire, paiements Mobile Money, historique des transactions et interface gestionnaire intuitive.",
    fullDescription:
      "Tontine+ est une application mobile MVP innovante conçue pour digitaliser et sécuriser la pratique ancestrale des tontines en Côte d'Ivoire, avec possibilité d'expansion à d'autres marchés d'Afrique de l'Ouest. Les tontines sont des systèmes d'épargne communautaire où des groupes se réunissent régulièrement pour contribuer à une caisse commune, chaque membre recevant à tour de rôle la somme totale des contributions. Bien que très utilisées, ces systèmes souffrent souvent d'un manque de crédibilité et de transparence. En tant que Lead Frontend Engineer SaaS, j'ai développé une solution mobile complète qui combine création de groupes de tontines, gestion des membres, intégration bancaire, paiements via Mobile Money, génération de codes QR pour les transactions, et historique détaillé des transactions. La plateforme cible principalement les gestionnaires de tontines (Tontiniers) qui peuvent créer leurs groupes, ajouter des membres, définir les paramètres des tontines (types: Pénalité, Choix, 2 bras, etc.) et gérer les paiements de cotisations. Le projet démontre une expertise en SaaS mobile, conception d'expérience utilisateur pour des utilisateurs non-tech, intégration de systèmes de paiement mobiles, et création de solutions adaptées aux marchés émergents. Actuellement en cours de développement continu après l'MVP initial.",
    mainImage: "/projects/tontine-plus/manager-home-screen.png",
    gallery: [
      "/projects/tontine-plus/manager-home-screen.png",
      "/projects/tontine-plus/splash-screen-1.png",
      "/projects/tontine-plus/splash-screen-2.png",
      "/projects/tontine-plus/splash-screen-3.png",
      "/projects/tontine-plus/login.png",
      "/projects/tontine-plus/signin.png",
      "/projects/tontine-plus/tontine-payment.png",
      "/projects/tontine-plus/qr-code-transaction.png",
      "/projects/tontine-plus/transaction-history.png",
    ],
    technologies: [
      "React Native",
      "Expo.io",
      "TypeScript",
      "Supabase",
      "Mobile Money API",
      "QR Code Generation",
      "Firebase",
      "NativeWind",
    ],
    category: "Mobile App - Financial SaaS",
    date: "2024",
    duration: "En cours de développement",
    client: "Projet Personnel",
    liveUrl: "https://tontine-plus.app",
    githubUrl: "https://github.com",
    features: [
      "Onboarding guidé avec explications des tontines et intégration bancaire",
      "Authentification sécurisée avec email et numéro de téléphone",
      "Interface Gestionnaire (Tontinier) : création de groupes et gestion des membres",
      "Support de multiples types de tontines : Pénalité, Choix, 2 bras, Achat d'article, En ligne",
      "Gestion centralisée des comptes avec connexion à services bancaires",
      "Intégration Mobile Money pour paiements sécurisés de cotisations",
      "Système de cotisations avec ordre de prise et gestion des statuts de paiement",
      "Génération de codes QR pour chaque transaction avec option de partage",
      "Historique détaillé des transactions avec filtres et recherche avancée",
      "Tableau de bord avec solde total, progression mensuelles et statistiques",
      "Système de notifications en temps réel pour les mises à jour de tontines",
      "Discussion intégrée entre membres et gestionnaire du groupe",
      "Gestion intelligente des différents statuts de cotisations (Payée, En attente, Non payée)",
      "Interface responsive et optimisée pour appareils mobiles de tous niveaux",
      "Support du mode hors ligne avec synchronisation automatique",
    ],
    challenges: [
      "Conception UX pour utilisateurs non-tech en contexte d'Afrique émergente",
      "Intégration sécurisée des APIs Mobile Money (Orange Money, MTN MoMo, Moov Money)",
      "Architecture de base de données robuste pour tracer chaque transaction financière",
      "Calcul automatique des ordres de prise et transitions de statut de cotisations",
      "Gestion de la concurrence : plusieurs tontiniers et membres payant simultanément",
      "Sécurité des données sensibles avec chiffrement et Row Level Security",
      "Optimisation des performances sur les connexions réseau lentes",
      "Support de multiples devises (FCFA, etc.) et systèmes monétaires locaux",
    ],
    stats: {
      screens: "25+ écrans pour Gestionnaire et Membres",
      components: "64 composants React Native réutilisables",
      hooks: "32 custom hooks optimisés",
      apiIntegrations: "Supabase, Mobile Money APIs, QR Code API",
      status: "MVP complété, développement continu en cours",
      targetMarket: "Côte d'Ivoire et Afrique de l'Ouest",
      supportedLanguages: "Français (extensible)",
    },
  },
]

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "mobile app":
        return Smartphone
      case "web application":
        return Code
      case "e-commerce":
        return Code
      case "portfolio":
        return Palette
      case "e-commerce & business management":
        return Code
      case "saas & communication platform":
        return Code
      case "mobile app - food delivery":
        return Smartphone
      case "mobile app - financial saas":
        return Code
      default:
        return Code
    }
  }

  const CategoryIcon = getCategoryIcon(project.category)

  return (
    <main className="min-h-screen py-20 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        {/* Breadcrumb et retour */}
        <AnimatedSection animation="fadeInLeft" delay={100}>
          <div className="flex items-center space-x-4 mb-8">
            <Link
              href="/projects"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Retour aux projets</span>
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white font-medium">{project.title}</span>
          </div>
        </AnimatedSection>

        {/* Header du projet */}
        <AnimatedSection animation="fadeInUp" delay={200}>
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-orange-500/20 to-violet-500/20 rounded-2xl">
                <CategoryIcon className="w-8 h-8 text-orange-500 dark:text-violet-400" />
              </div>
              <div className="text-left">
                <h1 className="font-playfair text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  {project.category} • {project.date}
                </p>
              </div>
            </div>

            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
        </AnimatedSection>

        {/* Image principale */}
        <AnimatedSection animation="scaleUp" delay={300}>
          <div className="relative mb-16">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={project.mainImage || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Informations du projet et boutons d'action */}
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Informations du projet */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description complète */}
            <AnimatedSection animation="fadeInLeft" delay={100}>
              <div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  À propos du projet
                </h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">{project.fullDescription}</p>
              </div>
            </AnimatedSection>

            {/* Fonctionnalités */}
            <AnimatedSection animation="fadeInLeft" delay={200}>
              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Fonctionnalités principales
                </h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Défis techniques */}
            <AnimatedSection animation="fadeInLeft" delay={300}>
              <div>
                <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Défis techniques relevés
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>

            {/* Statistiques */}
            {project.stats && (
              <AnimatedSection animation="fadeInLeft" delay={400}>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white mb-4">Statistiques</h3>
                  <ul className="space-y-3">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <li key={key} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 dark:text-gray-300">{`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Sidebar avec détails */}
          <div className="space-y-8">
            {/* Boutons d'action */}
            <AnimatedSection animation="fadeInRight" delay={100}>
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white mb-4">Liens du projet</h3>
                <div className="space-y-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Voir le site</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 w-full px-6 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code source</span>
                    </a>
                  )}
                  {!project.liveUrl && !project.githubUrl && (
                    <div className="text-center py-4 text-gray-500 dark:text-gray-400">
                      <p className="text-sm">Projet confidentiel</p>
                      <p className="text-xs">Liens non disponibles</p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>

            {/* Détails du projet */}
            <AnimatedSection animation="fadeInRight" delay={200}>
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Détails du projet
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-orange-500 dark:text-violet-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Durée</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Code className="w-5 h-5 text-orange-500 dark:text-violet-400" />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                      <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Technologies utilisées */}
            <AnimatedSection animation="fadeInRight" delay={300}>
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-white/10">
                <h3 className="font-playfair text-lg font-bold text-gray-900 dark:text-white mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-orange-500/10 to-violet-500/10 dark:from-orange-500/20 dark:to-violet-500/20 border border-orange-500/20 dark:border-violet-400/20 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Galerie d'images */}
        <section className="mb-16">
          <AnimatedSection animation="fadeInUp" delay={100}>
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Galerie du projet
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.slice(1).map((image, index) => (
              <AnimatedSection key={index} animation="scaleUp" delay={200 + index * 100}>
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-800 group cursor-pointer">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 2}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Navigation vers d'autres projets */}
        <AnimatedSection animation="scaleUp" delay={400}>
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/10 via-violet-500/10 to-pink-500/10 dark:from-orange-500/20 dark:via-violet-500/20 dark:to-pink-500/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-white/10">
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Intéressé par ce projet ?
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Discutons de votre projet et voyons comment nous pouvons collaborer pour créer quelque chose
                d'exceptionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-violet-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Discutons de votre projet</span>
                  <ExternalLink className="w-5 h-5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 rounded-full text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-gray-100 dark:hover:bg-gray-800 hover:border-orange-500 dark:hover:border-violet-400 transition-all duration-300 transform hover:scale-105"
                >
                  <span>Voir tous les projets</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </main>
  )
}
