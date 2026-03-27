"use client"

import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()
    const [isVisible, setIsVisible] = useState(false)
    const prevPathname = useRef(pathname)

    useEffect(() => {
        // On mount: fade in
        const t = setTimeout(() => setIsVisible(true), 10)
        return () => clearTimeout(t)
    }, [])

    useEffect(() => {
        if (prevPathname.current !== pathname) {
            // On route change: flash fade-out then fade-in
            setIsVisible(false)
            const t = setTimeout(() => setIsVisible(true), 20)
            prevPathname.current = pathname
            return () => clearTimeout(t)
        }
    }, [pathname])

    return (
        <div
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
            }}
        >
            {children}
        </div>
    )
}
