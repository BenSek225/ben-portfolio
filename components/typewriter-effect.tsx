"use client"

import { useEffect, useState, useRef } from "react"

interface TypewriterEffectProps {
    words: string[]
    className?: string
    typingSpeed?: number
    deletingSpeed?: number
    pauseDuration?: number
}

export default function TypewriterEffect({
    words,
    className = "",
    typingSpeed = 80,
    deletingSpeed = 45,
    pauseDuration = 2000,
}: TypewriterEffectProps) {
    const [displayed, setDisplayed] = useState("")
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    useEffect(() => {
        if (words.length === 0) return

        const currentWord = words[wordIndex % words.length]

        if (isPaused) {
            timeoutRef.current = setTimeout(() => {
                setIsPaused(false)
                setIsDeleting(true)
            }, pauseDuration)
            return
        }

        if (isDeleting) {
            if (displayed.length === 0) {
                setIsDeleting(false)
                setWordIndex((prev) => (prev + 1) % words.length)
                return
            }
            timeoutRef.current = setTimeout(() => {
                setDisplayed((prev) => prev.slice(0, -1))
            }, deletingSpeed)
        } else {
            if (displayed === currentWord) {
                setIsPaused(true)
                return
            }
            timeoutRef.current = setTimeout(() => {
                setDisplayed(currentWord.slice(0, displayed.length + 1))
            }, typingSpeed)
        }

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current)
        }
    }, [displayed, wordIndex, isDeleting, isPaused, words, typingSpeed, deletingSpeed, pauseDuration])

    return (
        <span className={className}>
            {displayed}
            <span className="inline-block w-0.5 h-[1em] bg-current ml-0.5 align-middle animate-pulse" />
        </span>
    )
}
