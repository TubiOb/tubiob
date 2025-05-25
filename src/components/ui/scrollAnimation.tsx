// "use client"

// import type React from "react"
// import { useRef, useEffect } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// type ScrollAnimationProps = {
//   children: React.ReactNode
//   from?: gsap.TweenVars
//   to?: gsap.TweenVars
//   start?: string
//   end?: string
//   scrub?: boolean | number
//   markers?: boolean
//   toggleActions?: string
//   pin?: boolean
//   className?: string
//   id?: string
// }

// export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
//   children,
//   from = { opacity: 0, y: 50 },
//   to = { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
//   start = "top 80%",
//   end = "bottom 20%",
//   scrub = false,
//   markers = false,
//   toggleActions = "play none none none",
//   pin = false,
//   className = "",
//   id,
// }) => {
//   const elementRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (typeof window === "undefined" || !elementRef.current) return

//     gsap.registerPlugin(ScrollTrigger)

//     const animation = gsap.fromTo(elementRef.current, from, {
//       ...to,
//       scrollTrigger: {
//         trigger: elementRef.current,
//         start,
//         end,
//         scrub,
//         markers,
//         toggleActions,
//         pin,
//       },
//     })

//     return () => {
//       animation.kill()
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.vars.trigger === elementRef.current) {
//           trigger.kill()
//         }
//       })
//     }
//   }, [from, to, start, end, scrub, markers, toggleActions, pin])

//   return (
//     <div ref={elementRef} className={className} id={id}>
//       {children}
//     </div>
//   )
// }
















"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

type ScrollAnimationProps = {
  children: React.ReactNode
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  exitTo?: gsap.TweenVars
  start?: string
  end?: string
  scrub?: boolean | number
  markers?: boolean
  toggleActions?: string
  pin?: boolean
  className?: string
  id?: string
}

export const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  from = { opacity: 0, y: 50 },
  to = { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  exitTo = { opacity: 0, y: -50, duration: 1, ease: "power2.in" },
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  markers = false,
  toggleActions = "play reverse play reverse",
  pin = false,
  className = "",
  id,
}) => {
  const elementRef = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     if (typeof window === "undefined" || !elementRef.current) return

//     gsap.registerPlugin(ScrollTrigger)

//     const animation = gsap.fromTo(elementRef.current, from, {
//       ...to,
//       scrollTrigger: {
//         trigger: elementRef.current,
//         start,
//         end,
//         scrub,
//         markers,
//         toggleActions,
//         pin,
//       },
//     })

//     return () => {
//       animation.kill()
//       ScrollTrigger.getAll().forEach((trigger) => {
//         if (trigger.vars.trigger === elementRef.current) {
//           trigger.kill()
//         }
//       })
//     }
//   }, [from, to, start, end, scrub, markers, toggleActions, pin])

useEffect(() => {
  if (typeof window === "undefined" || !elementRef.current) return

  gsap.registerPlugin(ScrollTrigger)

  // Create a timeline for better control
  const tl = gsap.timeline({ paused: true })

  // Add the enter animation to the timeline
  tl.fromTo(elementRef.current, from, to)

  // Create ScrollTrigger
  const st = ScrollTrigger.create({
    trigger: elementRef.current,
    start,
    end,
    scrub,
    markers,
    toggleActions,
    pin,
    animation: tl,
    onLeave: () => {
    // When leaving viewport, animate to exit state
    if (!scrub) {
        gsap.to(elementRef.current, exitTo)
    }
    },
    onEnterBack: () => {
    // When re-entering viewport (scrolling up), animate back to visible state
    if (!scrub) {
        gsap.to(elementRef.current, to)
    }
    },
  })

  return () => {
    tl.kill()
    st.kill()
  }
}, [from, to, exitTo, start, end, scrub, markers, toggleActions, pin])

  return (
    <div ref={elementRef} className={className} id={id}>
      {children}
    </div>
  )
}