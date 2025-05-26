// "use client"

// import type React from "react"

// import { useEffect, useRef } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// type ScrollAnimationOptions = {
//   trigger?: string | Element
//   start?: string
//   end?: string
//   scrub?: boolean | number
//   markers?: boolean
//   animation?: gsap.core.Timeline | gsap.core.Tween
//   toggleActions?: string
//   pin?: boolean
//   anticipatePin?: boolean
//   onEnter?: () => void
//   onLeave?: () => void
//   onEnterBack?: () => void
//   onLeaveBack?: () => void
// }

// export const useGSAPScrollAnimation = (
//   element: React.RefObject<HTMLElement | null>,
//   options: ScrollAnimationOptions = {},
//   dependencies: any[] = [],
// ) => {
//   const animation = useRef<gsap.core.Tween | null>(null)
//   const scrollTrigger = useRef<ScrollTrigger | null>(null)

//   useEffect(() => {
//     // Make sure GSAP and ScrollTrigger are available
//     if (typeof window === "undefined" || !element.current) return

//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger)

//     // Create animation
//     animation.current = gsap.fromTo(
//       element.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: options.trigger || element.current,
//           start: options.start || "top 80%",
//           end: options.end || "bottom 20%",
//           scrub: options.scrub || false,
//           markers: options.markers || false,
//           toggleActions: options.toggleActions || "play none none none",
//           pin: options.pin || false,
//           anticipatePin: typeof options.anticipatePin === 'number' ? options.anticipatePin : undefined,
//           onEnter: options.onEnter,
//           onLeave: options.onLeave,
//           onEnterBack: options.onEnterBack,
//           onLeaveBack: options.onLeaveBack,
//         },
//       },
//     )

//     // Store ScrollTrigger instance for cleanup
//     scrollTrigger.current = ScrollTrigger.getAll().pop() || null

//     // Cleanup function
//     return () => {
//       if (animation.current) {
//         animation.current.kill()
//       }
//       if (scrollTrigger.current) {
//         scrollTrigger.current.kill()
//       }
//     }
//   }, [element, options, ...dependencies])

//   return { animation, scrollTrigger }
// }



















"use client"

import type React from "react"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type ScrollAnimationOptions = {
  trigger?: string | Element
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  animation?: gsap.core.Timeline | gsap.core.Tween
  toggleActions?: string
  pin?: boolean
  anticipatePin?: boolean
  onEnter?: () => void
  onLeave?: () => void
  onEnterBack?: () => void
  onLeaveBack?: () => void
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  exitTo?: gsap.TweenVars
}

export const useGSAPScrollAnimation = (
  element: React.RefObject<HTMLElement | null>,
  options: ScrollAnimationOptions = {},
  dependencies: any,
) => {
  const animation = useRef<gsap.core.Tween | null>(null)
  const scrollTrigger = useRef<ScrollTrigger | null>(null)

//   useEffect(() => {
//     // Make sure GSAP and ScrollTrigger are available
//     if (typeof window === "undefined" || !element.current) return

//     // Register ScrollTrigger plugin
//     gsap.registerPlugin(ScrollTrigger)

//     // Create animation
//     animation.current = gsap.fromTo(
//       element.current,
//       { opacity: 0, y: 50 },
//       {
//         opacity: 1,
//         y: 0,
//         duration: 1,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: options.trigger || element.current,
//           start: options.start || "top 80%",
//           end: options.end || "bottom 20%",
//           scrub: options.scrub || false,
//           markers: options.markers || false,
//           toggleActions: options.toggleActions || "play none none none",
//           pin: options.pin || false,
//           anticipatePin: typeof options.anticipatePin === 'number' ? options.anticipatePin : undefined,
//           onEnter: options.onEnter,
//           onLeave: options.onLeave,
//           onEnterBack: options.onEnterBack,
//           onLeaveBack: options.onLeaveBack,
//         },
//       },
//     )

//     // Store ScrollTrigger instance for cleanup
//     scrollTrigger.current = ScrollTrigger.getAll().pop() || null

//     // Cleanup function
//     return () => {
//       if (animation.current) {
//         animation.current.kill()
//       }
//       if (scrollTrigger.current) {
//         scrollTrigger.current.kill()
//       }
//     }
//   }, [element, options, ...dependencies])

useEffect(() => {
  // Make sure GSAP and ScrollTrigger are available
  if (typeof window === "undefined" || !element.current) return

  // Register ScrollTrigger plugin
  gsap.registerPlugin(ScrollTrigger)

  // Default values
  const from = options.from || { opacity: 0, y: 50 }
  const to = options.to || { opacity: 1, y: 0, duration: 1, ease: "back.out" }
  const exitTo = options.exitTo || { opacity: 0, y: -50, duration: 1, ease: "power2.in" }

  // Create a timeline for more control
  const tl = gsap.timeline({ paused: true })

  // Add the enter animation
  tl.fromTo(element.current, from, to)

  // Create ScrollTrigger
  scrollTrigger.current = ScrollTrigger.create({
    trigger: options.trigger || element.current,
    start: options.start || "top 80%",
    end: options.end || "bottom 20%",
    scrub: options.scrub || false,
    markers: options.markers || false,
    // Use toggleActions to control animation on enter/leave
    toggleActions: options.toggleActions || "play pause play pause",
    pin: options.pin || false,
    anticipatePin: typeof options.anticipatePin === "number" ? options.anticipatePin : undefined,
    onEnter: () => {
    tl.play()
    options.onEnter?.()
    },
    onLeave: () => {
    // When leaving viewport, animate to exit state
    if (!options.scrub) {
        gsap.to(element.current, exitTo)
    }
    options.onLeave?.()
    },
    onEnterBack: () => {
    // When re-entering viewport (scrolling up), play animation again
    if (!options.scrub) {
        gsap.to(element.current, to)
    }
    options.onEnterBack?.()
    },
    onLeaveBack: () => {
    tl.reverse()
    options.onLeaveBack?.()
    },
    animation: tl,
  })

  // Cleanup function
  return () => {
    if (tl) {
      tl.kill()
    }
    if (scrollTrigger.current) {
      scrollTrigger.current.kill()
    }
  }
}, [element, options, ...dependencies])

  return { animation, scrollTrigger }
}