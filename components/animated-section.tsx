"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleUp" | "fadeIn"
  delay?: number
  className?: string
  duration?: number
}

export default function AnimatedSection({
  children,
  animation = "fadeInUp",
  delay = 0,
  className = "",
  duration = 500, // Réduit de 600 à 500ms
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation({ delay })

  const getAnimationClasses = () => {
    const baseClasses = `transition-all duration-${duration} cubic-bezier(0.4, 0, 0.2, 1) will-change-transform will-change-opacity`

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClasses} opacity-0 translate-y-4` // Réduit de 8px à 4px
        case "fadeInLeft":
          return `${baseClasses} opacity-0 -translate-x-4` // Réduit de 8px à 4px
        case "fadeInRight":
          return `${baseClasses} opacity-0 translate-x-4` // Réduit de 8px à 4px
        case "scaleUp":
          return `${baseClasses} opacity-0 scale-98` // Réduit de scale-95 à scale-98
        case "fadeIn":
          return `${baseClasses} opacity-0`
        default:
          return `${baseClasses} opacity-0 translate-y-4`
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}
