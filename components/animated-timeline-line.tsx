"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimatedTimelineLine() {
    const lineRef = useRef<HTMLDivElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const [height, setHeight] = useState(0)
    const animFrameRef = useRef<number | null>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const totalHeight = container.scrollHeight

        const animate = () => {
            const rect = container.getBoundingClientRect()
            const windowH = window.innerHeight
            // How far the container has been scrolled through the viewport
            const scrolled = Math.max(0, windowH - rect.top)
            const progress = Math.min(scrolled / (rect.height + windowH * 0.3), 1)
            setHeight(Math.floor(progress * totalHeight))
            animFrameRef.current = requestAnimationFrame(animate)
        }

        animFrameRef.current = requestAnimationFrame(animate)
        return () => {
            if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
        }
    }, [])

    return (
        <div ref={containerRef} className="absolute left-8 top-0 bottom-0 w-0.5 overflow-hidden">
            {/* Track (gray) */}
            <div className="absolute inset-0 bg-gray-200 dark:bg-white/10 opacity-40" />
            {/* Animated fill */}
            <div
                ref={lineRef}
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-orange-500 via-violet-600 to-pink-500 transition-none"
                style={{ height: `${height}px` }}
            />
        </div>
    )
}
