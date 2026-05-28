"use client"

import React, { useRef, useEffect, useState } from "react"
// import { motion } from "framer-motion"
// import { FeaturedProject } from "./../FeaturedProject"
// import { Testimonials } from "./../Testimonials"
import Image from "next/image"
import { TubiOb } from "../../../public/img"
import { useGSAPScrollAnimation } from "@/hooks/useGSAPScrollAnimation";
import { TextReveal } from "../ui/textreveal"
import { Typewriter } from "../ui/typewriter"
import { useAnimation } from "@/context/AnimationContext"
import { Button } from "../ui/button";

let gsapPromise: Promise<typeof gsap> | null = null;

export const Home: React.FC = () => {
  const [gsapInstance, setGsapInstance] = useState<typeof gsap | null>(null)
  const profileRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const featuredProjectRef = useRef<HTMLDivElement>(null);
  const homeContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { registerAnimation } = useAnimation();

  // Initialize GSAP

  const getGSAP = () => {
    if (!gsapPromise) {
      gsapPromise = import('gsap').then(async (mod) => {
        const { ScrollTrigger } = await import("gsap/ScrollTrigger")
        mod.default.registerPlugin(ScrollTrigger)
        return mod.default
      })
    }
    return gsapPromise
  }


  useEffect(() => {
    getGSAP().then(setGsapInstance);
  }, [])


  useEffect(() => {
    if (homeContentRef.current && profileRef.current && introRef.current && gsapInstance) {
      registerAnimation(
        homeContentRef as React.RefObject<HTMLElement>,
        (tl) => {
          gsapInstance.set([sectionRef.current, profileRef.current, introRef.current], {
            opacity: 0,
            y: 0
          })
          // First animate the section background
          tl.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.2, ease: "power1.out" },
            0, // Start slightly after header
          )

          // Then animate the profile and intro sections
          tl.fromTo(
            profileRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            0.1, // Start after section background
          ).fromTo(
            introRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" },
            0.2, // Start slightly after profile
          )
        },
        5, // Medium-high priority
      )
    }
  }, [registerAnimation, gsapInstance])



  useGSAPScrollAnimation(featuredProjectRef, {
    start: 'top 90%',
    end: "bottom 90%",
    toggleActions: 'play pause play pause',
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power.easeOut" },
    exitTo: { opacity: 0.5, y: -40, duration: 1, ease: "power.easeIn" },
  })

  useEffect(() => {
    if (!sectionRef.current || !gsapInstance) return

    const ctx = gsapInstance.context(() => {
      gsapInstance.to(sectionRef.current, {
        backgroundPositionY: "10%",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 25%",
          end: "bottom 90%",
          scrub: false,
          toggleActions: "play reverse play pause",
        },
      })
    }, sectionRef)
    
    return () => ctx.revert()
  }, [gsapInstance])

  const switchingTexts = [" Obaloluwa Tubi", " a Frontend Developer"]

  return (
    <section ref={sectionRef} id="Home" className="py-16 px-4 flex items-start justify-center sm:px-6 lg:px-8 overflow-x-hidden">
      <div ref={homeContentRef} className="max-w-6xl mx-auto h-[30rem]" >
        <div className="grid md:grid-cols-2 gap-8 items-center justify-center place-items-center my-auto z-10 h-full">
          {/* <div
            className="flex bg-green-600 h-auto rounded-3xl"
            
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          > */}
            <div ref={profileRef} className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={TubiOb}
                alt="Tubi Obaloluwa Shalom"
                className="rounded-3xl border-4 border-secondary object-cover"
                priority={true}
                fill
                sizes="(max-width: 768px) 256px, 320px"
              />
            </div>
          {/* </div> */}
          <div
            className="text-center md:text-left px-2"
            ref={introRef}
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-normal mb-2 text-[var(--text-color-light)]">Hi there, <span className="text-2xl">👋</span></h3>
            <span className="text-3xl md:text-4xl font-normal mb-4">
              I&apos;m
              <Typewriter texts={switchingTexts} speed={3000} delay={300} className='text-[var(--text-color-green)]' />
            </span>
            {/* <TextReveal
              className="text-3xl md:text-4xl font-normal mb-2"
              from={{ y: 50, opacity: 0 }}
              to={{ y: 0, opacity: 1, duration: 1, ease: "power2.out" }}
              exitTo={{ y: -30, opacity: 0, duration: 0.8, ease: "power2.in" }}
              toggleActions="play pause play pause"
            >
              Obaloluwa Tubi here.
            </TextReveal>
            <h2 className="text-2xl md:text-3xl font-normal mb-1">
              A <span className="text-[var(--text-color-green)]">Frontend Developer</span>,
            </h2> */}
            <TextReveal
              className="text-foreground text-justify max-w-lg font-light"
              from={{ x: 50, opacity: 0 }}
              to={{ x: 0, opacity: 1, duration: 0.2, ease: "power2.out" }}
              exitTo={{ x: -30, opacity: 0, duration: 0.2, ease: "power2.in" }}
              toggleActions="play pause play pause"
            >
              I build web products that solve real problems; insurance platforms, hiring tools, healthcare infrastructure, using Next.js and TypeScript.
              I have a particular depth in products built for emerging markets, where performance, cost, and reliability aren&apos;t nice-to-haves.
              {/* who is passionate about and creates fascinating web designs. I have keen interest in bringing services
              closer to users, as well as providing solutions by building user friendly and accessible websites. */}
              </TextReveal>

            <div className='flex flex-row gap-6 mt-6 justify-center lg:justify-start'>
              <Button asChild className="bg-white dark:text-neutral-600 text-[var(--text-color-light)] py-2 px-4 text-xs lg:text-sm rounded-lg shadow-sm border border-neutral-100 transition-colors duration-300">
                <a href='/skills'>View my work</a>
              </Button>
              <a href='https://drive.google.com/file/d/14LM1Y0pjnwP4M7wtdOqUTa1Mh_p8JO1t/view?usp=drive_link' className="bg-black text-white py-2 px-4 text-xs lg:text-sm rounded-lg shadow-sm border border-white transition-colors duration-300" download target='_blank' rel='noreferrer'>Download CV</a>
            </div>

            <div className="mt-6 text-sm text-[var(--text-color-light)] flex flex-wrap gap-4 lg:gap-6">
              <span className='py-0.5 px-2 rounded-full items-center text-center border border-neutral-200'>Next.js</span>
              <span className='py-0.5 px-2 rounded-full items-center text-center border border-neutral-200'>TypeScript</span>
              <span className='py-0.5 px-2 rounded-full items-center text-center border border-neutral-200'>React</span>
              <span className='py-0.5 px-2 rounded-full items-center text-center border border-neutral-200'>Firebase</span>
              <span className='py-0.5 px-2 rounded-full items-center text-center border border-neutral-200'>Git</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

























// "use client"

// import React, { useRef, useEffect } from "react"
// import { motion } from "framer-motion"
// import { FeaturedProject } from "./../FeaturedProject"
// import { Testimonials } from "./../Testimonials"
// import Image from "next/image"
// import { TubiOb } from "../../../public/img"
// import { useGSAPScrollAnimation } from "@/hooks/useGSAPScrollAnimation";
// import { TextReveal } from "../ui/textreveal"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// export const Home: React.FC = () => {
//   const profileRef = useRef<HTMLDivElement>(null);
//   const introRef = useRef<HTMLDivElement>(null);
//   const featuredProjectRef = useRef<HTMLDivElement>(null);
//   const interactiveSkillsRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLElement>(null);
  
//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       gsap.registerPlugin(ScrollTrigger)
//     }
//   }, []);

//   useEffect(() => {
//     if (!profileRef.current || !introRef.current) return;

//     const tl = gsap.timeline({ defaults: { ease: 'power2.inOut' } })

//     tl.fromTo(profileRef.current, { opacity: 0, y: 60, xPercent: -90}, { opacity: 1, y: 0, xPercent: 0, duration: 1 }).fromTo(
//       introRef.current,
//       { opacity: 0, y: 60, xPercent: 90 },
//       { opacity: 1, y: 0, xPercent: 0, duration: 1 },
//       '-=0.5'
//     )

//     return () => {
//       tl.kill();
//     }
//   }, []);

//   useGSAPScrollAnimation(featuredProjectRef, {
//     start: "bottom 80%",
//     end: "top 15%",
//     toggleActions: "play reverse play reverse",
//     from: { opacity: 0, y: 50 },
//     to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
//     exitTo: { opacity: 0, y: -50, duration: 1, ease: "power2.in" },
//   })

//   useGSAPScrollAnimation(interactiveSkillsRef, {
//     start: "bottom 80%",
//     end: "top 15%",
//     toggleActions: "play reverse play reverse",
//     from: { opacity: 0, y: 50 },
//     to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
//     exitTo: { opacity: 0, y: -50, duration: 1, ease: "power2.in" },
//   })

//   useEffect(() => {
//     if (!sectionRef.current) return

//     gsap.to(sectionRef.current, {
//       backgroundPositionY: "10%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "bottom 45%",
//         endTrigger: featuredProjectRef.current,
//         end: "top 30%",
//         markers: true,
//         scrub: true,
//         toggleActions: "play reverse play reverse",
//       },
//     })

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
//     }
//   }, [])

//   return (
//     <section ref={sectionRef} id="Home" className="min-h-screen bg-[var(--bg-color)] flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 z-10">
//       <div className="max-w-6xl mx-auto w-full">
//         <div className="grid md:grid-cols-2 gap-8 items-center mb-16 z-10">
//           <div
//             className="flex justify-center"
//             ref={profileRef}
//             // initial={{ opacity: 0, y: 50 }}
//             // animate={{ opacity: 1, y: 0 }}
//             // transition={{ duration: 0.5 }}
//           >
//             <div className="relative w-64 h-64 md:w-80 md:h-80">
//               <Image
//                 src={TubiOb}
//                 alt="Tubi Obaloluwa Shalom"
//                 className="rounded-3xl border-4 border-secondary object-cover"
//               />
//             </div>
//           </div>
//           <div
//             className="text-center md:text-left"
//             ref={introRef}
//             // initial={{ opacity: 0, y: 50 }}
//             // animate={{ opacity: 1, y: 0 }}
//             // transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <h3 className="text-xl md:text-2xl font-normal mb-2">Hi,</h3>
//             <h1 className="text-3xl md:text-4xl font-normal mb-2">I'm Obaloluwa Tubi.</h1>
//             <h2 className="text-2xl md:text-3xl font-normal mb-1">
//               A <span className="text-[var(--text-color-green)]">Frontend Developer</span>,
//             </h2>
//             <p className="text-foreground max-w-lg mx-auto md:mx-0 font-light">
//               who is passionate about and creates fascinating web designs. I have keen interest in bringing services
//               closer to users, as well as providing solutions by building user friendly and accessible websites.
//             </p>
//           </div>
//         </div>

//         <div ref={featuredProjectRef}>
//           <FeaturedProject />
//         </div>
//         <div ref={interactiveSkillsRef}>
//           <Testimonials />
//         </div>
//       </div>
//     </section>
//   )
// }