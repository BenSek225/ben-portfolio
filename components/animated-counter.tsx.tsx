"use client"

import { useEffect, useRef, useState } from "react"

interface AnimatedCounterProps {
    target: number
    suffix?: string
    duration?: number
    className?: string
}

export default function AnimatedCounter({
    target,
    suffix = "",
    duration = 1800,
    className = "",
}: AnimatedCounterProps) {
    const [count, setCount] = useState(0)
    const [hasStarted, setHasStarted] = useState(false)
    const ref = useRef<HTMLSpanElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true)
                }
            },
            { threshold: 0.5 }
        )

        const el = ref.current
        if (el) observer.observe(el)
        return () => { if (el) observer.unobserve(el) }
    }, [hasStarted])

    useEffect(() => {
        if (!hasStarted) return

        const startTime = performance.now()
        const step = (now: number) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            // easeOutExpo
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
            setCount(Math.floor(eased * target))
            if (progress < 1) requestAnimationFrame(step)
        }

        requestAnimationFrame(step)
    }, [hasStarted, target, duration])

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    )
}
