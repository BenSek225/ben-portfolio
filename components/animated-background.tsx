"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "@/contexts/theme-context"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  color: string
  type: "star" | "cloud" | "bird"
  wingPhase?: number
  wingSpeed?: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []

      if (theme === "dark") {
        const starCount = 80 // Réduit de 120 à 80
        for (let i = 0; i < starCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.15,
            vy: (Math.random() - 0.5) * 0.15,
            size: Math.random() * 3 + 0.5, // Larger: 0.5 to 3.5 pixels
            opacity: Math.random() * 0.5 + 0.3, // More visible: 0.3 to 0.8
            color: "#ffffff", // Pure white
            type: "star",
          })
        }
      } else {
        // ☁️ NUAGES OPTIMISÉS - Plus subtils, journée couverte
        const cloudCount = 40 // Réduit de 40 à 25
        for (let i = 0; i < cloudCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.2, // Réduit de 0.3 à 0.2
            vy: (Math.random() - 0.5) * 0.1, // Réduit de 0.15 à 0.1
            size: Math.random() * 50 + 25, // Réduit de 60+30 à 50+25
            opacity: Math.random() * 0.25 + 0.15, // Réduit de 0.4+0.3 à 0.25+0.15
            color: `hsl(${Math.random() * 20 + 200}, 40%, 75%)`, // Plus doux
            type: "cloud",
          })
        }

        // 🐦 OISEAUX OPTIMISÉS - Plus discrets
        const birdCount = 8 // Réduit de 8 à 5
        for (let i = 0; i < birdCount; i++) {
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (canvas.height * 0.6) + canvas.height * 0.1,
            vx: (Math.random() * 0.6 + 0.3) * (Math.random() > 0.5 ? 1 : -1), // Réduit de 0.8+0.4
            vy: (Math.random() - 0.5) * 0.15, // Réduit de 0.2 à 0.15
            size: Math.random() * 6 + 4, // Réduit de 8+6 à 6+4
            opacity: Math.random() * 0.4 + 0.2, // Réduit de 0.6+0.4 à 0.4+0.2
            color: `hsl(0, 0%, ${Math.random() * 15 + 25}%)`, // Plus discret
            type: "bird",
            wingPhase: Math.random() * Math.PI * 2,
            wingSpeed: Math.random() * 0.2 + 0.15, // Réduit de 0.3+0.2 à 0.2+0.15
          })
        }
      }
      particlesRef.current = particles
    }

    const drawCloud = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath()
      // Nuage principal plus subtil
      ctx.arc(x, y, size * 0.5, 0, Math.PI * 2)
      ctx.arc(x + size * 0.3, y, size * 0.4, 0, Math.PI * 2)
      ctx.arc(x - size * 0.3, y, size * 0.4, 0, Math.PI * 2)
      ctx.arc(x, y - size * 0.3, size * 0.35, 0, Math.PI * 2)
      ctx.arc(x + size * 0.15, y - size * 0.2, size * 0.25, 0, Math.PI * 2)
      ctx.arc(x - size * 0.15, y - size * 0.2, size * 0.25, 0, Math.PI * 2)
      ctx.fill()

      // Ombre encore plus subtile
      ctx.save()
      ctx.globalAlpha = 0.05 // Réduit de 0.1 à 0.05
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.beginPath()
      ctx.arc(x + 1, y + 1, size * 0.5, 0, Math.PI * 2)
      ctx.arc(x + size * 0.3 + 1, y + 1, size * 0.4, 0, Math.PI * 2)
      ctx.arc(x - size * 0.3 + 1, y + 1, size * 0.4, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()
    }

    const drawBird = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number, wingPhase: number) => {
      ctx.save()
      ctx.strokeStyle = ctx.fillStyle
      ctx.lineWidth = 1.5 // Réduit de 2 à 1.5
      ctx.lineCap = "round"

      // Corps de l'oiseau plus discret
      ctx.beginPath()
      ctx.arc(x, y, size * 0.08, 0, Math.PI * 2) // Réduit de 0.1 à 0.08
      ctx.fill()

      // Ailes plus subtiles
      const wingSpread = Math.sin(wingPhase) * 0.25 + 0.6 // Réduit de 0.3+0.7 à 0.25+0.6
      const wingHeight = Math.cos(wingPhase) * 0.15 + 0.25 // Réduit de 0.2+0.3 à 0.15+0.25

      // Aile gauche
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x - size * wingSpread, y - size * wingHeight)
      ctx.stroke()

      // Aile droite
      ctx.beginPath()
      ctx.moveTo(x, y)
      ctx.lineTo(x + size * wingSpread, y - size * wingHeight)
      ctx.stroke()

      ctx.restore()
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Gestion des bordures selon le type
        if (particle.type === "bird") {
          if (particle.x < -particle.size) {
            particle.x = canvas.width + particle.size
          } else if (particle.x > canvas.width + particle.size) {
            particle.x = -particle.size
          }

          if (particle.y < -particle.size) {
            particle.y = canvas.height * 0.6
          } else if (particle.y > canvas.height + particle.size) {
            particle.y = canvas.height * 0.1
          }

          // Animation des ailes plus lente
          if (particle.wingPhase !== undefined && particle.wingSpeed !== undefined) {
            particle.wingPhase += particle.wingSpeed
          }
        } else {
          if (particle.x < -particle.size || particle.x > canvas.width + particle.size) {
            particle.x = particle.x < 0 ? canvas.width + particle.size : -particle.size
          }
          if (particle.y < -particle.size || particle.y > canvas.height + particle.size) {
            particle.y = particle.y < 0 ? canvas.height + particle.size : -particle.size
          }
        }

        // Draw particle
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = particle.color

        if (particle.type === "star") {
          // Étoiles avec glow plus subtil
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()

          // Glow plus doux
          ctx.shadowBlur = 8 // Réduit de 20 à 12 à 8
          ctx.shadowColor = particle.color
          ctx.globalAlpha = particle.opacity * 0.4 // Glow encore plus subtil
          ctx.fill()
        } else if (particle.type === "cloud") {
          drawCloud(ctx, particle.x, particle.y, particle.size)
        } else if (particle.type === "bird") {
          drawBird(ctx, particle.x, particle.y, particle.size, particle.wingPhase || 0)
        }
        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createParticles()
    animate()

    window.addEventListener("resize", resizeCanvas)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        background:
          theme === "dark"
            ? "linear-gradient(135deg, #000000 0%, #050205 30%, #040304 70%, #010001 100%)"
            : "linear-gradient(135deg, #e8f2ff 0%, #d9e8ff 25%, #cce5ff 50%, #bdd9ff 75%, #b0cdff 100%)", // Mode clair: gradient bleu subtil et chaud
      }}
    />
  )
}
