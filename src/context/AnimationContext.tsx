// "use client"

// import type React from "react"
// import { createContext, useContext, useRef, useEffect, useState } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// type AnimationContextType = {
//   mainTimeline: gsap.core.Timeline | null
//   isReady: boolean
//   registerAnimation: <T extends HTMLElement>(
//     element: React.RefObject<T>,
//     animation: (tl: gsap.core.Timeline) => void,
//     priority?: number,
//   ) => void
// }

// const AnimationContext = createContext<AnimationContextType>({
//   mainTimeline: null,
//   isReady: false,
//   registerAnimation: () => {},
// })

// export const useAnimation = () => useContext(AnimationContext)

// type AnimationItem = {
//   element: React.RefObject<HTMLElement>
//   animation: (tl: gsap.core.Timeline) => void
//   priority: number
// }

// export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isReady, setIsReady] = useState(false)
//   const mainTimeline = useRef<gsap.core.Timeline | null>(null)
//   const animations = useRef<AnimationItem[]>([])
//   const isInitialized = useRef(false)

//   // Initialize GSAP and create main timeline
//   useEffect(() => {
//     if (typeof window === "undefined" || isInitialized.current) return

//     gsap.registerPlugin(ScrollTrigger)
//     mainTimeline.current = gsap.timeline({
//       paused: true,
//       onComplete: () => {
//         setIsReady(true)
//       },
//     })

//     isInitialized.current = true

//     // Clean up on unmount
//     return () => {
//       if (mainTimeline.current) {
//         mainTimeline.current.kill()
//       }
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   // Function to register animations with the main timeline
//   const registerAnimation = <T extends HTMLElement>(
//     element: React.RefObject<T>,
//     animation: (tl: gsap.core.Timeline) => void,
//     priority = 0,
//   ) => {
//     if (!element.current) return

//     animations.current.push({
//       element: element as React.RefObject<HTMLElement>,
//       animation,
//       priority,
//     })

//     // Sort animations by priority (higher priority = earlier in the timeline)
//     animations.current.sort((a, b) => b.priority - a.priority)

//     // If we already have a timeline, rebuild it with the new animation
//     if (mainTimeline.current) {
//       rebuildTimeline()
//     }
//   }

//   // Function to rebuild the timeline with all registered animations
//   const rebuildTimeline = () => {
//     if (!mainTimeline.current) return

//     // Clear the current timeline
//     mainTimeline.current.clear()

//     // Add all animations to the timeline in priority order
//     animations.current.forEach(({ animation }) => {
//       animation(mainTimeline.current!)
//     })

//     // Play the timeline
//     mainTimeline.current.play()
//   }

//   // Play the timeline when the component mounts
//   useEffect(() => {
//     if (mainTimeline.current && animations.current.length > 0) {
//       rebuildTimeline()
//     }
//   }, [])

//   return (
//     <AnimationContext.Provider value={{ mainTimeline: mainTimeline.current, isReady, registerAnimation }}>
//       {children}
//     </AnimationContext.Provider>
//   )
// }






















// "use client"

// import type React from "react"
// import { createContext, useContext, useRef, useEffect, useState } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// type AnimationContextType = {
//   mainTimeline: gsap.core.Timeline | null
//   isReady: boolean
//   registerAnimation: (
//     element: React.RefObject<HTMLElement | HTMLDivElement>,
//     animation: (tl: gsap.core.Timeline) => void,
//     priority?: number,
//   ) => void
// }

// const AnimationContext = createContext<AnimationContextType>({
//   mainTimeline: null,
//   isReady: false,
//   registerAnimation: () => {},
// })

// export const useAnimation = () => useContext(AnimationContext)

// type AnimationItem = {
//   element: React.RefObject<HTMLElement | HTMLDivElement>
//   animation: (tl: gsap.core.Timeline) => void
//   priority: number
// }

// export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [isReady, setIsReady] = useState(false)
//   const mainTimeline = useRef<gsap.core.Timeline | null>(null)
//   const animations = useRef<AnimationItem[]>([])
//   const isInitialized = useRef(false)

//   // Initialize GSAP and create main timeline
//   useEffect(() => {
//     if (typeof window === "undefined" || isInitialized.current) return

//     gsap.registerPlugin(ScrollTrigger)
//     mainTimeline.current = gsap.timeline({
//       paused: true,
//       onComplete: () => {
//         setIsReady(true)
//       },
//     })

//     isInitialized.current = true

//     // Clean up on unmount
//     return () => {
//       if (mainTimeline.current) {
//         mainTimeline.current.kill()
//       }
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   // Function to register animations with the main timeline
//   const registerAnimation = (
//     element: React.RefObject<HTMLElement | HTMLDivElement>,
//     animation: (tl: gsap.core.Timeline) => void,
//     priority = 0,
//   ) => {
//     if (!element.current) return

//     animations.current.push({ element, animation, priority })

//     // Sort animations by priority (higher priority = earlier in the timeline)
//     animations.current.sort((a, b) => b.priority - a.priority)

//     // If we already have a timeline, rebuild it with the new animation
//     if (mainTimeline.current) {
//       rebuildTimeline()
//     }
//   }

//   // Function to rebuild the timeline with all registered animations
//   const rebuildTimeline = () => {
//     if (!mainTimeline.current) return

//     // Clear the current timeline
//     mainTimeline.current.clear()

//     // Add all animations to the timeline in priority order
//     animations.current.forEach(({ animation }) => {
//       animation(mainTimeline.current!)
//     })

//     // Play the timeline
//     mainTimeline.current.play()
//   }

//   // Play the timeline when the component mounts
//   useEffect(() => {
//     if (mainTimeline.current && animations.current.length > 0) {
//       rebuildTimeline()
//     }
//   }, [])

//   return (
//     <AnimationContext.Provider value={{ mainTimeline: mainTimeline.current, isReady, registerAnimation }}>
//       {children}
//     </AnimationContext.Provider>
//   )
// }

















"use client"

import type React from "react"
import { createContext, useContext, useRef, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type AnimationContextType = {
  mainTimeline: gsap.core.Timeline | null
  isReady: boolean
  registerAnimation: <T extends HTMLElement>(
    element: React.RefObject<T>,
    animation: (tl: gsap.core.Timeline) => void,
    priority?: number,
  ) => void
}

const AnimationContext = createContext<AnimationContextType>({
  mainTimeline: null,
  isReady: false,
  registerAnimation: () => {},
})

export const useAnimation = () => useContext(AnimationContext)

type AnimationItem = {
  element: React.RefObject<HTMLElement>
  animation: (tl: gsap.core.Timeline) => void
  priority: number
}

export const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isReady, setIsReady] = useState(false)
  const mainTimeline = useRef<gsap.core.Timeline | null>(null)
  const animations = useRef<AnimationItem[]>([])
  const isInitialized = useRef(false)

  // Initialize GSAP and create main timeline
  useEffect(() => {
    if (typeof window === "undefined" || isInitialized.current) return

    gsap.registerPlugin(ScrollTrigger)
    mainTimeline.current = gsap.timeline({
      paused: false,
      onComplete: () => {
        setIsReady(true)
      },
    })

    isInitialized.current = true

    // Clean up on unmount
    return () => {
      if (mainTimeline.current) {
        mainTimeline.current.kill()
      }
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  // Function to register animations with the main timeline
  const registerAnimation = <T extends HTMLElement>(
    element: React.RefObject<T>,
    animation: (tl: gsap.core.Timeline) => void,
    priority = 0,
  ) => {
    if (!element.current) return

    animations.current.push({
      element: element as React.RefObject<HTMLElement>,
      animation,
      priority,
    })

    // Sort animations by priority (higher priority = earlier in the timeline)
    animations.current.sort((a, b) => b.priority - a.priority)

    // If we already have a timeline, rebuild it with the new animation
    if (mainTimeline.current) {
      rebuildTimeline()
    }
  }

  // Function to rebuild the timeline with all registered animations
  const rebuildTimeline = () => {
    if (!mainTimeline.current) return

    // Clear the current timeline
    mainTimeline.current.clear()

    // Add all animations to the timeline in priority order
    animations.current.forEach(({ animation }) => {
      animation(mainTimeline.current!)
    })

    // Play the timeline
    mainTimeline.current
      .play(0)
      .then(() => {
        if (mainTimeline.current?.progress() === 1) {
          setIsReady(true)
        }
      })
  }

  // Play the timeline when the component mounts
  useEffect(() => {
    if (mainTimeline.current && animations.current.length > 0) {
      rebuildTimeline()
    }
  }, [])

  return (
    <AnimationContext.Provider value={{ mainTimeline: mainTimeline.current, isReady, registerAnimation }}>
      {children}
    </AnimationContext.Provider>
  )
}