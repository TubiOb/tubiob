"use client"

import type React from "react"
import { useState, useEffect } from "react"

type TypewriterProps = {
  texts: string[]
  speed?: number
  delay?: number
  className?: string
}

export const Typewriter: React.FC<TypewriterProps> = ({ texts, speed = 2000, delay = 500, className = "" }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, delay)
    }, speed)

    return () => clearInterval(interval)
  }, [texts.length, speed, delay])

  return (
    <span className={`transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}>
      {texts[currentTextIndex]}
    </span>
  )
}