"use client"

import React from "react"
import { useEffect, useRef } from "react";
import { Github, Linkedin, Twitter } from "lucide-react"
// import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from 'next/navigation';
// import { useAnimation } from "@/context/AnimationContext";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null)
  const pathname = usePathname();

  // const { registerAnimation } = useAnimation()

  // Register footer animation with low priority (-10)
  // useEffect(() => {
  //   if (footerRef.current) {
  //     registerAnimation(
  //       footerRef as React.RefObject<HTMLElement>,
  //       (tl) => {
  //         tl.fromTo(
  //           footerRef.current,
  //           { y: 50, opacity: 0 },
  //           // { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
  //           { y: 0, opacity: 1, duration: 0.8, ease: "none" },
  //           "+=0.5", // Start after other animations
  //         )
  //       },
  //       -10, // Low priority to ensure footer animates last
  //     )
  //   }
  // }, [registerAnimation])


  useEffect(() => {
    if (!footerRef.current) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      // Set initial state to prevent flicker
      gsap.set(footerRef.current, { opacity: 0, y: 30 })

      gsap.to(footerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
          once: false,
          invalidateOnRefresh: true,
        },
      })
    }, footerRef)

    return () => ctx.revert()
  }, []);


  const isActive = (path: string) => {
    return pathname === path;
  }
  


  return (
    <footer ref={footerRef} className="bg-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">TubiOb</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-4">Frontend Developer</p>
        <nav className="mb-4">
          <div className="flex justify-center space-x-4">
            <Link href="/" className={`text-[var(--light-text-color)] hover:text-secondary ${isActive('/') ? 'text-muted' : ''} `}>
              Home
            </Link>
            <Link href="/about" className={`text-[var(--light-text-color)] hover:text-secondary ${isActive('/about') ? 'text-muted' : ''} `}>
              About
            </Link>
            <Link href="/skills" className={`text-[var(--light-text-color)] hover:text-secondary ${isActive('/skills') ? 'text-muted' : ''} `}>
              Portfolio
            </Link>
            <Link href="/contact" className={`text-[var(--light-text-color)] hover:text-secondary ${isActive('/contact') ? 'text-muted' : ''} `}>
              Contact
            </Link>
          </div>
        </nav>
        <div className="flex justify-center space-x-4 mb-4">
          <a
            href="https://www.linkedin.com/in/obaloluwa-tubi-09a35617b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-secondary"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/TubiOb"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-secondary"
          >
            <Github />
          </a>
          <a
            href="https://twitter.com/Teclef"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-secondary"
          >
            <Twitter />
          </a>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-10 lg:mb-0">
          &copy;  TubiOb. All rights reserved.
        </p>
      </div>
    </footer>
  )
}