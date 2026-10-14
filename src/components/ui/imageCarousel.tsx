// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import Image from "next/image"
// import { ChevronLeft, ChevronRight } from "lucide-react"

// type ImageCarouselProps = {
//   images: string[]
//   alt: string
//   autoPlay?: boolean
//   interval?: number
// }

// export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, alt, autoPlay = true, interval = 5000 }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [direction, setDirection] = useState(0)
//   const [isPaused, setIsPaused] = useState(false)

//   // Handle automatic sliding
//   useEffect(() => {
//     if (!autoPlay || isPaused || images.length <= 1) return

//     const timer = setTimeout(() => {
//       setDirection(1)
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//     }, interval)

//     return () => clearTimeout(timer)
//   }, [currentIndex, autoPlay, interval, isPaused, images.length])

//   const handleNext = () => {
//     setDirection(1)
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
//   }

//   const handlePrev = () => {
//     setDirection(-1)
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
//   }

//   // Variants for the slide animations
//   const variants = {
//     enter: (direction: number) => ({
//       x: direction > 0 ? 300 : -300,
//       opacity: 0,
//     }),
//     center: {
//       x: 0,
//       opacity: 1,
//     },
//     exit: (direction: number) => ({
//       x: direction < 0 ? 300 : -300,
//       opacity: 0,
//     }),
//   }

//   // If there's only one image, just show it without controls
//   if (images.length === 1) {
//     return (
//       <div className="relative h-64 w-full overflow-hidden">
//         <Image src={images[0] || "/placeholder.svg?height=200&width=400"} alt={alt} className="object-cover" fill sizes={'fill'} priority={false} />
//       </div>
//     )
//   }

//   return (
//     <div
//       className="relative h-64 w-full overflow-hidden"
//       onMouseEnter={() => setIsPaused(true)}
//       onMouseLeave={() => setIsPaused(false)}
//     >
//       <AnimatePresence initial={false} custom={direction} mode="sync">
//         <motion.div
//           key={currentIndex}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "tween", stiffness: 100, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           className="absolute inset-0"
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(_, info) => {
//             if (info.offset.x > 100) {
//               handlePrev()
//             } else if (info.offset.x < -100) {
//               handleNext()
//             }
//           }}
//         >
//           <Image
//             src={images[currentIndex]}
//             alt={`${alt} - image ${currentIndex + 1}`}
//             className="object-cover"
//             fill
//             sizes={'fill'}
//             priority={currentIndex === 0}
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* Navigation buttons */}
//       <button
//         onClick={handlePrev}
//         className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-colors z-10"
//         aria-label="Previous image"
//       >
//         <ChevronLeft size={20} />
//       </button>
//       <button
//         onClick={handleNext}
//         className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 text-white p-1 rounded-full hover:bg-black/50 transition-colors z-10"
//         aria-label="Next image"
//       >
//         <ChevronRight size={20} />
//       </button>

//       {/* Dots indicator */}
//       <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
//         {images.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => {
//               setDirection(index > currentIndex ? 1 : -1)
//               setCurrentIndex(index)
//             }}
//             className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-white/50"}`}
//             aria-label={`Go to image ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

































"use client"

import type React from "react"
import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

type ImageCarouselProps = {
  images: string[]
  alt: string
  autoPlay?: boolean
  interval?: number
  /** Tailwind aspect-ratio class, e.g. "aspect-video", "aspect-square", "aspect-[4/3]" */
  aspectClassName?: string
  /** Optional quality override for Next/Image */
  quality?: number
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  alt,
  autoPlay = true,
  interval = 5000,
  aspectClassName = "aspect-[16/10] sm:aspect-video",
  quality = 80,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = useReducedMotion()

  const goTo = useCallback(
    (index: number, dir: number) => {
      setDirection(dir)
      setCurrentIndex(((index % images.length) + images.length) % images.length)
    },
    [images.length],
  )

  const handleNext = useCallback(() => goTo(currentIndex + 1, 1), [currentIndex, goTo])
  const handlePrev = useCallback(() => goTo(currentIndex - 1, -1), [currentIndex, goTo])

  // Auto-play
  useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1 || prefersReducedMotion) return
    const timer = setTimeout(() => handleNext(), interval)
    return () => clearTimeout(timer)
  }, [autoPlay, isPaused, interval, images.length, handleNext, prefersReducedMotion])

  // Pause when tab hidden
  useEffect(() => {
    const onVisibility = () => setIsPaused(document.hidden)
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  // Keyboard nav
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrev()
    if (e.key === "ArrowRight") handleNext()
  }

  // Slide distance as percentage → scales with container
  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0 }),
  }

  const transition = prefersReducedMotion
    ? { duration: 0 }
    : { x: { type: "spring" as const, stiffness: 260, damping: 30 }, opacity: { duration: 0.2 } }

  if (images.length === 0) return null

  const single = images.length === 1

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${aspectClassName}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      onKeyDown={onKeyDown}
      tabIndex={0}
      role="region"
      aria-roledescription="carousel"
      aria-label={alt}
    >
      {single ? (
        <Image
          src={images[0]}
          alt={alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
          quality={quality}
          className="object-cover"
          priority
        />
      ) : (
        <>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transition}
              className="absolute inset-0 will-change-transform"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={(_, info) => {
                if (info.offset.x > 80 || info.velocity.x > 500) handlePrev()
                else if (info.offset.x < -80 || info.velocity.x < -500) handleNext()
              }}
            >
              <Image
                src={images[currentIndex]}
                alt={`${alt} — image ${currentIndex + 1} of ${images.length}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
                quality={quality}
                className="object-cover select-none pointer-events-none"
                priority={currentIndex === 0}
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next — larger tap targets */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center p-1 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 active:scale-95 transition"
          >
            <ChevronLeft size={12} />
          </button>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next image"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 grid place-items-center p-1 rounded-full bg-black/40 text-white backdrop-blur-sm hover:bg-black/60 active:scale-95 transition"
          >
            <ChevronRight size={12} />
          </button>

          {/* Dots */}
          <div
            className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10"
            role="tablist"
            aria-label="Slide controls"
          >
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Go to image ${index + 1}`}
                onClick={() => goTo(index, index > currentIndex ? 1 : -1)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex ? "bg-white" : "bg-white/60 hover:bg-white/80 w-2.5"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}