"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Timeline } from "./../Timeline"
import { LearningNow } from "./../LearningNow"

let gsapPromise: Promise<typeof gsap> | null = null;

const getGSAP = () => {
  if (!gsapPromise) {
    gsapPromise = import("gsap").then(async (mod) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      mod.default.registerPlugin(ScrollTrigger)
      return mod.default
    })
  }
  return gsapPromise
}

export const About: React.FC = () => {
  const [isClient, setIsClient] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const headingRef = useRef<HTMLDivElement>(null)
  const leftColumnRef = useRef<HTMLDivElement>(null)
  const rightColumnRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const learningRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    // // Register ScrollTrigger plugin
    // if (!isClient) return

    // const initAnimation = async () => {
    //   const gsapModule = await import("gsap")
    //   const { ScrollTrigger } = await import("gsap/ScrollTrigger")
    //   const gsap = gsapModule.default

    //   gsap.registerPlugin(ScrollTrigger)
  
    //   gsap.set([headingRef.current?.children, leftColumnRef.current, rightColumnRef.current], {
    //     opacity: 0,
    //   })
  
    //   // Create a main timeline for initial animations
    //   const tl = gsap.timeline({ defaults: { ease: "power3.out" } })
  
    //   // Heading animation
    //   if (headingRef.current) {
    //     tl.fromTo(headingRef.current.children, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 })
    //   }
  
    //   // Text columns animation with a slight stagger and different directions
    //   if (leftColumnRef.current && rightColumnRef.current) {
    //     tl.fromTo(leftColumnRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 0.8 }, "-=0.4").fromTo(
    //       rightColumnRef.current,
    //       { opacity: 0, x: 50 },
    //       { opacity: 1, x: 0, duration: 0.8 },
    //       "-=0.6",
    //     )
    //   }
  
    //   // Stats cards animation with a bounce effect
    //   if (statsRef.current) {
    //     const cards = statsRef.current.querySelectorAll(".stat-card")
    //     tl.fromTo(
    //       cards,
    //       { opacity: 0, y: 30, scale: 0.9 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         scale: 1,
    //         duration: 0.6,
    //         stagger: 0.2,
    //         ease: "back.out(1.7)", // Add a slight bounce
    //       },
    //       "-=0.4",
    //     )
    //   }
  
    //   // Button animation with a slight pulse
    //   if (buttonRef.current) {
    //     tl.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.5 }, "-=0.2").to(
    //       buttonRef.current,
    //       {
    //         scale: 1.05,
    //         duration: 0.3,
    //         repeat: 1,
    //         yoyo: true,
    //         ease: "power1.inOut",
    //       },
    //     )
    //   }
  
    //   // Create scroll animations for Timeline and LearningNow components
    //   if (timelineRef.current) {
    //     gsap.fromTo(
    //       timelineRef.current,
    //       { opacity: 0, y: 50 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.8,
    //         scrollTrigger: {
    //           trigger: timelineRef.current,
    //           start: "top 70%",
    //           end: "bottom 50%",
    //           toggleActions: "play reverse play reset",
    //         },
    //       },
    //     )
    //   }
  
    //   if (learningRef.current) {
    //     gsap.fromTo(
    //       learningRef.current,
    //       { opacity: 0, y: 50 },
    //       {
    //         opacity: 1,
    //         y: 0,
    //         duration: 0.8,
    //         scrollTrigger: {
    //           trigger: learningRef.current,
    //           start: "top 80%",
    //           end: "bottom 20%",
    //           toggleActions: "play reverse play pause",
    //         },
    //       },
    //     )
    //   }
  
    //   // Text highlight animation for the "About Me" section
    //   if (leftColumnRef.current) {
    //     const highlights = leftColumnRef.current.querySelectorAll(".text-secondary")
    //     gsap.fromTo(
    //       highlights,
    //       { color: "var(--text-color)", fontWeight: "normal" },
    //       {
    //         color: "var(--secondary)",
    //         fontWeight: "semibold",
    //         duration: 1,
    //         delay: 1.5,
    //         ease: "power2.inOut",
    //       },
    //     )
    //   }
  
    //   // Parallax effect for the entire section
    //   if (sectionRef.current) {
    //     gsap.to(sectionRef.current, {
    //       backgroundPositionY: "30%",
    //       ease: "none",
    //       scrollTrigger: {
    //         trigger: sectionRef.current,
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: true,
    //       },
    //     })
    //   }
    // }

    // initAnimation();

    // // Cleanup function
    // return () => {
    //   import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    //   })
    // }

    let ctx: gsap.Context | null = null;

    getGSAP().then((gsap) => {
      ctx = gsap.context(() => {
        gsap.set(
          [
            headingRef.current?.children ?? [],
            leftColumnRef.current,
            rightColumnRef.current,
          ],
          { opacity: 0 }
        )

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        if (headingRef.current) {
          tl.fromTo(
            headingRef.current.children,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.2 }
          )
        }

        if (leftColumnRef.current && rightColumnRef.current) {
          tl.fromTo(
            leftColumnRef.current,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.8 },
            "-=0.4"
          ).fromTo(
            rightColumnRef.current,
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0, duration: 0.8 },
            "-=0.6"
          )
        }

        if (statsRef.current) {
          const cards = statsRef.current.querySelectorAll(".stat-card")
          tl.fromTo(
            cards,
            { opacity: 0, y: 30, scale: 0.9 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.6,
              stagger: 0.2,
              ease: "back.out(1.7)",
            },
            "-=0.4"
          )
        }

        if (buttonRef.current) {
          tl.fromTo(
            buttonRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5 },
            "-=0.2"
          )
        }

        // Scroll animations for Timeline and LearningNow components
        if (timelineRef.current) {
          gsap.fromTo(
            timelineRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: timelineRef.current,
                start: "top 70%",
                // toggleActions: "play reverse play reset",
                toggleActions: "play none none reverse",
              },
            }
          )
        }


        if (learningRef.current) {
          gsap.fromTo(
            learningRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              scrollTrigger: {
                trigger: learningRef.current,
                start: "top 80%",
                // toggleActions: "play reverse play reset",
                toggleActions: "play none none reverse",
              },
            }
          )
        }


        // Parallax on section background
        if (sectionRef.current) {
          gsap.to(sectionRef.current, {
            backgroundPositionY: "30%",
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          })
        }
      })
    })

    return () => {
      ctx?.revert();
    }
  }, [isClient])


  return (
    <section ref={sectionRef} id="About" className="py-16 px-4 sm:px-6 lg:px-8" suppressHydrationWarning>
      <div className="max-w-6xl mx-auto">
        <div ref={headingRef}>
          <h2 className="text-2xl font-semibold mb-2">Building, Breaking, Fixing, Repeat{" "}<span className="text-secondary">😎</span></h2>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div ref={leftColumnRef}>
            <p className="mb-4">
              I&#39;m a <span className="font-semibold text-[var(--text-color-green)]">Frontend Developer</span>
              {" "}with 3+ years building production web applications across fintech, edtech, and healthcare. My work has involved multi-role authentication systems, payment integrations 
              (<span className="font-mono bg-accent px-2 py-1 rounded">Flutterwave{" "}</span>
              and{" "}<span className="font-mono bg-accent px-2 py-1 rounded">Paystack</span>), rich text editors, and real-time data; often for products with real users and real stakes.
            </p>
            <p className="mb-4">
              I work primarily in 
              <span className="font-mono bg-accent px-2 py-1 rounded">Next.js</span>,{" "}
              <span className="font-mono bg-accent px-2 py-1 rounded">React</span>, and{" "}
              <span className="font-mono bg-accent px-2 py-1 rounded">TypeScript</span>
                , and I care about the part most developers skip: what happens when the network is slow, the user is confused, or the business model changes.
            </p>
            <p className="mb-4">
              I write code, break things, fix them, and somehow make it all work. I build user-friendly web experiences, 
              focusing on{" "} accessibility and{" "} clean design. When I&#39;m not wrestling with React hooks, 
              you&#39;ll find me arguing about <span className="text-[var(--text-color-light)] font-medium">Ronaldo (GOAT)</span> vs
              Messi, watching <span className="text-[var(--text-color-light)] font-medium">Steph Curry&#39;s</span> basketball highlights,
              or hoping <span className="text-[var(--text-color-light)] font-medium">Sir Lewis Hamilton</span> returns to winning F1
              races.
            </p>

            {/* <p className="mb-4">
               I build web apps with{" "}
              <span className="font-mono bg-accent px-2 py-1 rounded">Next.js</span>,{" "}
              <span className="font-mono bg-accent px-2 py-1 rounded">React</span>, and{" "}
              <span className="font-mono bg-accent px-2 py-1 rounded">TypeScript</span>, making sure they don&#39;t just run
              but run well. Sometimes, I add animations, because why not?
            </p> */}
          </div>
          <div ref={rightColumnRef}>
            <div ref={statsRef} className="grid grid-cols-2 gap-4 mb-4">
              <div className="stat-card bg-[var(--card-color)] p-4 rounded-lg shadow-md">
                <p className="text-sm text-[var(--title-color)]">YEARS OF EXPERIENCE</p>
                <h3 className="text-2xl font-medium">03+</h3>
                <span className="text-sm text-justify">Across freelance and personal products shipped to real users</span>
              </div>
              <div className="stat-card bg-[var(--card-color)] p-4 rounded-lg shadow-md">
                <p className="text-sm text-[var(--title-color)]">COMPLETED PROJECTS</p>
                <h3 className="text-2xl font-medium">10+</h3>
                <span className="text-sm text-justify">Including multi-role SaaS platforms, marketplaces and CMS tools</span>
              </div>
            </div>
            <div ref={buttonRef}>
              <Button asChild className="w-full text-lg">
                <a href="https://drive.google.com/file/d/1NU-eG0sAbKwvf8Z71S6vWV9f5BUg88Yy/view?usp=sharing" download target="_blank" rel="noreferrer">
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div ref={timelineRef}>
          <Timeline />
        </div>
        <div ref={learningRef}>
          <LearningNow />
        </div>
      </div>
    </section>
  )
}