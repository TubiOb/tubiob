import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { GSAPProvider } from "@/context/GSAPContext"
import { AnimationProvider } from "@/context/AnimationContext"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-poppins",
  // weight: '100',
})

export const metadata: Metadata = {
  title: "Obaloluwa Tubi - Frontend Developer",
  description: "Portfolio website of Obaloluwa Tubi, the frontend developer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <body className="font-poppins" suppressHydrationWarning>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <GSAPProvider>
            <AnimationProvider>
              <div className="flex flex-col min-h-screen bg-[var(--bg-color)] text-[var(--text-color)] transition-colors ease-in-out duration-300" style={{ backgroundColor: "var(--bg-color)", color: "var(--text-color)", fontFamily: "var(--font-sans)" }}>
                <Header />
                <main className="pb-[4rem] lg:pb-0 lg:pt-[5rem] relative z-10">{children}</main>
                <Footer />
              </div>
            </AnimationProvider>
          </GSAPProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}