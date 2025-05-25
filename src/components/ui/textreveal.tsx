// "use client"

// import type React from "react"
// import { useRef, useEffect } from "react"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { SplitText } from "gsap/SplitText"

// type TextRevealProps = {
//   children: React.ReactNode
//   className?: string
//   stagger?: number
//   duration?: number
//   delay?: number
//   from?: gsap.TweenVars
//   trigger?: boolean
// }

// export const TextReveal: React.FC<TextRevealProps> = ({
//   children,
//   className = "",
//   stagger = 0.05,
//   duration = 1,
//   delay = 0,
//   from = { y: 100, opacity: 0 },
//   trigger = true,
// }) => {
//   const textRef = useRef<HTMLDivElement>(null)
//   const splitRef = useRef<any>(null)

//   useEffect(() => {
//     if (typeof window === "undefined" || !textRef.current) return

//     // Register plugins
//     gsap.registerPlugin(ScrollTrigger, SplitText)

//     // Create SplitText instance
//     splitRef.current = new SplitText(textRef.current, { type: "words,chars" })
//     const chars = splitRef.current.chars

//     // Create animation
//     let animation
//     if (trigger) {
//       animation = gsap.fromTo(chars, from, {
//         y: 0,
//         opacity: 1,
//         duration,
//         stagger,
//         ease: "power2.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       })
//     } else {
//       animation = gsap.fromTo(chars, from, {
//         y: 0,
//         opacity: 1,
//         duration,
//         delay,
//         stagger,
//         ease: "power2.out",
//       })
//     }

//     // Cleanup function
//     return () => {
//       if (animation) animation.kill()
//       if (splitRef.current) splitRef.current.revert()
//       if (trigger) {
//         ScrollTrigger.getAll().forEach((st) => {
//           if (st.vars.trigger === textRef.current) {
//             st.kill()
//           }
//         })
//       }
//     }
//   }, [from, stagger, duration, delay, trigger])

//   return (
//     <div ref={textRef} className={className}>
//       {children}
//     </div>
//   )
// }


















"use client"

import type React from "react"
import { useRef, useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText } from "gsap/SplitText"

type TextRevealProps = {
  children: React.ReactNode
  className?: string
  stagger?: number
  duration?: number
  delay?: number
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  exitTo?: gsap.TweenVars
  trigger?: boolean
  toggleActions?: string
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = "",
  stagger = 0.05,
  duration = 1,
  delay = 0,
  from = { y: 100, opacity: 0 },
  to = { y: 0, opacity: 1},
  exitTo,
  trigger = true,
  toggleActions = 'play none none none'
}) => {
  const textRef = useRef<HTMLDivElement>(null)
  const splitRef = useRef<any>(null)

  useEffect(() => {
    if (typeof window === "undefined" || !textRef.current) return

    // Register plugins
    gsap.registerPlugin(ScrollTrigger, SplitText)

    // Create SplitText instance
    splitRef.current = new SplitText(textRef.current, { type: "words,chars" })
    const chars = splitRef.current.chars

    // Create animation
    let animation
    if (trigger) {
      animation = gsap.fromTo(chars, from, {
        ...to,
        duration,
        stagger,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions,
        },
      })
    } else {
      animation = gsap.fromTo(chars, from, {
        ...to,
        duration,
        delay,
        stagger,
        ease: "power2.out",
      })
    }

    // Cleanup function
    return () => {
      if (animation) animation.kill()
      if (splitRef.current) splitRef.current.revert()
      if (trigger) {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.vars.trigger === textRef.current) {
            st.kill()
          }
        })
      }
    }
  }, [from, to, stagger, duration, delay, trigger, toggleActions])

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}