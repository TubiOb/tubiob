import React from "react"
import { Header } from "@/components/Header"
// import { Home } from "./components/Home"
// import { About } from "./components/About"
// import { SkillsAndProjects } from "./components/SkillsAndProjects"
// import { Contact } from "./components/Contact"
import { Footer } from "@/components/Footer"

const Home = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        {/* <About />
        <SkillsAndProjects />
        <Contact /> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home