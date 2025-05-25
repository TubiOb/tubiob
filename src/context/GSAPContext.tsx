"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ScrollToPlugin } from "gsap/ScrollToPlugin"

// Create context
const GSAPContext = createContext({})

export const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextReady, setContextReady] = useState(false)

  useEffect(() => {
    // Register GSAP plugins
    if (typeof window !== "undefined") {
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
      setContextReady(true)
    }

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  const value = {
    contextReady,
  }

  return <GSAPContext.Provider value={value}>{children}</GSAPContext.Provider>
}

export const useGSAP = () => useContext(GSAPContext);