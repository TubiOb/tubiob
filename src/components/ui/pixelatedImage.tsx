"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import Image from "next/image"

type PixelatedImageProps = {
  src: string
  alt: string
  className?: string
}

export const PixelatedImage: React.FC<PixelatedImageProps> = ({ src, alt, className = "" }) => {
  const [isClient, setIsClient] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!isClient || !containerRef.current) return

    const initAnimation = async () => {
      const gsapModule = await import("gsap")
      const gsap = gsapModule.default

      const container = containerRef.current
      if (!container) return

      // Create pixelated overlay effect
      const pixels: any[] = []
      const pixelSize = 20
      const rows = Math.ceil(300 / pixelSize)
      const cols = Math.ceil(300 / pixelSize)

      // Create pixel grid
      for (let i = 0; i < rows * cols; i++) {
        const pixel = document.createElement("div")
        pixel.className = "absolute bg-background transition-all duration-300"
        pixel.style.width = `${pixelSize}px`
        pixel.style.height = `${pixelSize}px`
        pixel.style.left = `${(i % cols) * pixelSize}px`
        pixel.style.top = `${Math.floor(i / cols) * pixelSize}px`
        pixel.style.opacity = "0"
        container.appendChild(pixel)
        pixels.push(pixel)
      }

      // Animate pixels on hover
      const handleMouseEnter = () => {
        gsap.to(pixels, {
          opacity: 0.8,
          duration: 0.3,
          stagger: {
            amount: 0.5,
            from: "random",
          },
        })
      }

      const handleMouseLeave = () => {
        gsap.to(pixels, {
          opacity: 0,
          duration: 0.5,
          stagger: {
            amount: 0.3,
            from: "random",
          },
        })
      }

      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
        pixels.forEach((pixel) => pixel.remove())
      }
    }

    initAnimation()
  }, [isClient])

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`} suppressHydrationWarning>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        className="rounded-2xl object-cover"
        fill
        sizes="300px"
        priority
      />
    </div>
  )
}