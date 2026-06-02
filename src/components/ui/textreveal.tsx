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


















// "use client"

// import type React from "react"
// import { useRef, useEffect, useState } from "react"

// type TextRevealProps = {
//   children: React.ReactNode
//   className?: string
//   stagger?: number
//   duration?: number
//   delay?: number
//   from?: gsap.TweenVars
//   to?: gsap.TweenVars
//   exitTo?: gsap.TweenVars
//   trigger?: boolean
//   toggleActions?: string
// }

// export const TextReveal: React.FC<TextRevealProps> = ({
//   children,
//   className = "",
//   stagger = 0.05,
//   duration = 1,
//   delay = 0,
//   from = { y: 100, opacity: 0 },
//   to = { y: 0, opacity: 1},
//   trigger = true,
//   toggleActions = 'play none none none'
// }) => {
//   const textRef = useRef<HTMLDivElement>(null)
//   const splitRef = useRef<SplitText | null>(null)
//   const [isClient, setIsClient] = useState(false)
//   const animationRef = useRef<gsap.core.Tween | gsap.core.Timeline | null>(null)

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   useEffect(() => {
//     const currentTextRef = textRef.current;

//     if (!isClient || !currentTextRef) return

//     const initAnimation = async () => {
//       try {
//         const gsapModule = await import("gsap")
//         const { ScrollTrigger } = await import("gsap/ScrollTrigger")
//         const { SplitText } = await import("gsap/SplitText")

//         const gsap = gsapModule.default
        
//         // Register plugins
//         gsap.registerPlugin(ScrollTrigger, SplitText)
    
//         // Create SplitText instance
//         splitRef.current = new SplitText(currentTextRef, { type: "words, chars" })
//         const chars = splitRef.current.chars
    
//         // Create animation
//         if (trigger) {
//           animationRef.current = gsap.fromTo(chars, from, {
//             ...to,
//             duration,
//             stagger,
//             ease: "power2.out",
//             scrollTrigger: {
//               trigger: currentTextRef,
//               start: "top 80%",
//               toggleActions,
//             },
//           })
//         } else {
//             animationRef.current = gsap.fromTo(chars, from, {
//             ...to,
//             duration,
//             delay,
//             stagger,
//             ease: "power2.out",
//           })
//         }
//       }
//       catch (err) {
//         console.error('Failed to initialize TextReveal animation: ', err)
//       }
//     }

//     initAnimation();

//     // Cleanup function
//     return () => {
//       if (animationRef.current) animationRef.current.kill()
//       if (splitRef.current) splitRef.current.revert()
//       if (trigger && typeof window !== 'undefined') {
//         import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
//           ScrollTrigger.getAll().forEach((st) => {
//             if (st.vars.trigger === currentTextRef) {
//               st.kill()
//             }
//           })
//         })
//       }
//     }
//   }, [from, to, stagger, duration, delay, trigger, toggleActions, isClient])

//   return (
//     <div ref={textRef} className={className} style={{ opacity: isClient ? 1 : 0 }} suppressHydrationWarning>
//       {children}
//     </div>
//   )
// }


















"use client"

import type React from "react"
import { useRef, useEffect } from "react"

type TextRevealProps = {
  children: React.ReactNode
  className?: string
  /**
   * How to split the text for animation.
   * "chars" — each character animates individually (typewriter feel)
   * "words" — each word animates as a unit (cleaner for long sentences)
   * "lines" — each line animates as a block
   * Default: "words" — safer for body text, "chars" is better for headings
   */
  splitType?: "chars" | "words" | "lines" | "words,chars"
  stagger?: number
  duration?: number
  delay?: number
  from?: gsap.TweenVars
  to?: gsap.TweenVars
  /**
   * ScrollTrigger start position.
   * For above-the-fold content pass "top 100%" so it fires immediately.
   * For mid-page content "top 80%" is a good default.
   */
  start?: string
  toggleActions?: string
  /**
   * If false, animation runs immediately without a ScrollTrigger.
   * Use this for above-the-fold hero text.
   */
  scrollTrigger?: boolean
}

export const TextReveal: React.FC<TextRevealProps> = ({
  children,
  className = "",
  splitType = "words",
  stagger = 0.05,
  duration = 0.8,
  delay = 0,
  from = { y: 20, opacity: 0 },
  to = { y: 0, opacity: 1 },
  start = "top 80%",
  toggleActions = "play none none none",
  scrollTrigger: useScrollTrigger = true,
}) => {
  const textRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!textRef.current) return

    let ctx: gsap.Context | null = null
    // Keep a local ref to the element for cleanup
    const el = textRef.current

    const init = async () => {
      try {
        const gsapMod = await import("gsap")
        const gsap = gsapMod.default

        // SplitText is a GSAP Club plugin — guard against it not being available
        let SplitText: typeof import("gsap/SplitText").SplitText | null = null
        try {
          const splitMod = await import("gsap/SplitText")
          SplitText = splitMod.SplitText
          gsap.registerPlugin(SplitText)
        } catch {
          // SplitText not available — fall back to animating the whole element
          SplitText = null
        }

        const { ScrollTrigger } = await import("gsap/ScrollTrigger")
        gsap.registerPlugin(ScrollTrigger)

        ctx = gsap.context(() => {
          // If SplitText is available, split and animate individual units
          // If not, animate the whole container as a fallback
          const targets = SplitText
            ? (() => {
                const split = new SplitText!(el, { type: splitType })
                // Store on element for cleanup
                ;(el as HTMLElement & { _split?: InstanceType<typeof SplitText> })._split = split
                return splitType === "chars"
                  ? split.chars
                  : splitType === "lines"
                  ? split.lines
                  : split.words
              })()
            : [el]

          // Set initial state immediately so there's no flash of unsplit text
          gsap.set(targets, from)

          const animProps: gsap.TweenVars = {
            ...to,
            duration,
            stagger,
            ease: "power2.out",
            delay: useScrollTrigger ? 0 : delay,
          }

          if (useScrollTrigger) {
            animProps.scrollTrigger = {
              trigger: el,
              start,
              toggleActions,
            }
          }

          gsap.to(targets, animProps)
        }, el)
      } catch (err) {
        console.error("TextReveal init failed:", err)
        // Last resort — make sure text is visible if everything fails
        if (el) el.style.opacity = "1"
      }
    }

    init()

    return () => {
      // ctx.revert() cleans up animations AND ScrollTriggers scoped to this element
      ctx?.revert()
      // Revert SplitText if it was used — restores original DOM
      const split = (el as HTMLElement & { _split?: { revert: () => void } })._split
      if (split) split.revert()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) // Run once on mount — props are read at init time

  return (
    <div ref={textRef} className={className}>
      {children}
    </div>
  )
}