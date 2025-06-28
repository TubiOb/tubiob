"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"

// Create context
const GSAPContext = createContext({
  contextReady: false,
})

export const GSAPProvider = ({ children }: { children: React.ReactNode }) => {
  const [contextReady, setContextReady] = useState(false)

  useEffect(() => {
    const initGSAP = async () => {
      const { default: gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      const { ScrollToPlugin } = await import("gsap/ScrollToPlugin")
      
      gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
      setContextReady(true)
    }

    initGSAP();
    
    // Cleanup function
    return () => {
      if (typeof window !== "undefined") {
        import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
        })
      }
    }
  }, [])

  const value = {
    contextReady,
  }

  return <GSAPContext.Provider value={value}>{children}</GSAPContext.Provider>
}

export const useGSAP = () => useContext(GSAPContext);