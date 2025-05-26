"use client"

import React, { useRef, useEffect } from "react"
// import { motion } from "framer-motion"
import { FeaturedProject } from "./../FeaturedProject"
// import { Testimonials } from "./../Testimonials"
import Image from "next/image"
import { TubiOb } from "../../../public/img"
import { useGSAPScrollAnimation } from "@/hooks/useGSAPScrollAnimation";
import { TextReveal } from "../ui/textreveal"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { InteractiveSkills } from "../InteractiveSkills"
import { useAnimation } from "@/context/AnimationContext"

export const Home: React.FC = () => {
  const profileRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const featuredProjectRef = useRef<HTMLDivElement>(null);
  // const interactiveSkillsRef = useRef<HTMLDivElement>(null);
  const homeContentRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { registerAnimation } = useAnimation();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
    }
  }, []);

  // useEffect(() => {
  //   if (!profileRef.current || !introRef.current) return;

  //   const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

  //   tl.fromTo(profileRef.current, { opacity: 0, y: 60, }, { opacity: 1, y: 0, duration: 1 }).fromTo(
  //     introRef.current,
  //     { opacity: 0, y: 60, },
  //     { opacity: 1, y: 0, duration: 1 },
  //     '-=0.8'
  //   )

  //   return () => {
  //     tl.kill();
  //   }
  // }, []);



  useEffect(() => {
    if (homeContentRef.current && profileRef.current && introRef.current) {
      registerAnimation(
        homeContentRef as React.RefObject<HTMLElement>,
        (tl) => {

          gsap.set([sectionRef.current, profileRef.current, introRef.current], {
            opacity: 0,
            y: 0
          })
          // First animate the section background
          tl.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.5, ease: "power1.out" },
            0.3, // Start slightly after header
          )

          // Then animate the profile and intro sections
          tl.fromTo(
            profileRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            0.5, // Start after section background
          ).fromTo(
            introRef.current,
            { opacity: 0, y: 60 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
            0.7, // Start slightly after profile
          )
        },
        5, // Medium-high priority
      )
    }
  }, [registerAnimation])



  useGSAPScrollAnimation(featuredProjectRef, {
    start: 'top 90%',
    end: "bottom 90%",
    toggleActions: 'play pause play pause',
    from: { opacity: 0, y: 50 },
    to: { opacity: 1, y: 0, duration: 1, ease: "power.easeOut" },
    exitTo: { opacity: 0.8, y: -40, duration: 1, ease: "power.easeIn" },
  })

  // useGSAPScrollAnimation(interactiveSkillsRef, {
  //   start: 'top 80%',
  //   end: "bottom 25%",
  //   toggleActions: 'play reverse play reverse',
  //   from: { opacity: 0, y: 50 },
  //   to: { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
  //   exitTo: { opacity: 0, y: -50, duration: 1, ease: "power2.in" },
  // })

  useEffect(() => {
    if (!sectionRef.current) return

    gsap.to(sectionRef.current, {
      backgroundPositionY: "10%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 25%",
        endTrigger: featuredProjectRef.current,
        end: "bottom 90%",
        scrub: true,
        toggleActions: "play reverse play reverse",
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <section ref={sectionRef} id="Home" className="py-16 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div ref={homeContentRef} className="max-w-6xl mx-auto" style={{ opacity: 1 }}>
        <div className="grid md:grid-cols-2 gap-8 items-center my-2 mb-40 z-10">
          <div
            className="flex justify-center"
            ref={profileRef}
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <Image
                src={TubiOb}
                alt="Tubi Obaloluwa Shalom"
                className="rounded-3xl border-4 border-secondary object-cover"
              />
            </div>
          </div>
          <div
            className="text-center md:text-left"
            ref={introRef}
            // initial={{ opacity: 0, y: 50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl md:text-2xl font-normal mb-2">Hi,</h3>
            <TextReveal
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
            </h2>
            <TextReveal
              className="text-foreground max-w-lg mx-auto md:mx-0 font-light"
              from={{ x: 50, opacity: 0 }}
              to={{ x: 0, opacity: 1, duration: 0.5, ease: "power2.out" }}
              exitTo={{ x: -30, opacity: 0, duration: 0.5, ease: "power2.in" }}
              toggleActions="play pause play pause"
            >
              who is passionate about and creates fascinating web designs. I have keen interest in bringing services
              closer to users, as well as providing solutions by building user friendly and accessible websites.
            </TextReveal>
          </div>
        </div>

        <div ref={featuredProjectRef}>
          <FeaturedProject />
        </div>
        {/* <div ref={interactiveSkillsRef}>
          <InteractiveSkills />
        </div> */}
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