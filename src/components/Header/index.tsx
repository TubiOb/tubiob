// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X, House, User, Cpu, BotMessageSquare } from "lucide-react"
// import { motion } from "framer-motion"
// import { useTheme } from "next-themes"

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

//   if (!mounted) {
//     return null
//   }

//   return (
//     <header className="fixed w-full bottom-2 lg:bottom-auto lg:top-0 bg-white dark:bg-[#181A1B] left-0 z-50 lg:shadow-lg shadow-[#445B6F1A]">
//       <nav className="relative rounded-full lg:rounded-none shadow-lg lg:shadow-none shadow-[#445B6F1A] py-3 px-6 flex justify-between items-center lg:columns-3 w-[88%] lg:max-w-[64rem] lg:w-auto h-[4rem] lg:h-[5rem] mx-auto transition-background duration-400">
//         <a href="#" className="text-base text-white font-semibold">
//           TubiOb
//         </a>

//         <div className="w-full sticky lg:w-auto left-0 right-0 lg:bottom-[-60%] lg:left-auto lg:right-auto lg:bottom-0 mx-auto lg:mx-0 lg:ml-auto my-0 lg:my-auto shadow-md shadow-[#445B6F1A] lg:shadow-none px-3 lg:px-6 rounded-3xl lg:rounded-none transition-[bottom] lg:transition-all duration-400">
//           <motion.div className='absolute lg:relative bottom-full bg-white dark:bg-[#181A1B] py-4 px-6 mb-2 grid grid-cols-3 lg:flex w-full justify-center gap-x-12 gap-y-8 lg:columns-3 rounded-2xl shadow-md shadow-[#445B6F1A]'>
//             <motion.a href="Home" className="nav-link flex flex-col items-center gap-y-[0.25rem text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93]" whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }}>
//              <House className='text-[0.5rem] md:text-[1.125rem] flex lg:hidden' /> Home
//             </motion.a>
//             <motion.a href="About" className="nav-link flex flex-col items-center gap-y-[0.25rem text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93]" whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }}>
//              <User className='text-[0.5rem] md:text-[1.125rem] flex lg:hidden' /> About
//             </motion.a>
//             <motion.a href="Skills" className="nav-link flex flex-col items-center gap-y-[0.25rem text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93]" whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }}>
//              <Cpu className='text-[0.5rem] md:text-[1.125rem] flex lg:hidden' /> Skills & Portfolio
//             </motion.a>
//             <motion.a href="Contact" className="nav-link flex flex-col items-center gap-y-[0.25rem text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93]" whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }}>
//              <BotMessageSquare className='text-[0.5rem] md:text-[1.125rem] flex lg:hidden' /> Contact
//             </motion.a>
//           </motion.div>
//         </div>

//         <div className="flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {theme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>

//           <button onClick={toggleMenu} className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700">
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </nav>

//       {isMenuOpen && (
//         <div className="md:hidden absolute bottom-full left-0 w-full bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg py-4 px-6 mb-2">
//           <motion.a
//             href="#Home"
//             className="block py-2 nav-link"
//             onClick={toggleMenu}
//             whileHover={{ scale: 0.99 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Home
//           </motion.a>
//           <motion.a
//             href="#About"
//             className="block py-2 nav-link"
//             onClick={toggleMenu}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             About
//           </motion.a>
//           <motion.a
//             href="#Skills"
//             className="block py-2 nav-link"
//             onClick={toggleMenu}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Skills & Portfolio
//           </motion.a>
//           <motion.a
//             href="#Contact"
//             className="block py-2 nav-link"
//             onClick={toggleMenu}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact
//           </motion.a>
//         </div>
//       )}
//     </header>
//   )
// }


























// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X, House, User, Cpu, BotMessageSquare } from "lucide-react"
// import { motion } from "framer-motion"
// import { useTheme } from "next-themes"

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

//   if (!mounted) {
//     return null
//   }

//   return (
//     <header className="fixed w-full bottom-2 lg:bottom-auto lg:top-0 bg-white dark:bg-[#181A1B] left-0 z-50 lg:shadow-lg shadow-[#445B6F1A]">
//       <nav className="relative rounded-full lg:rounded-none shadow-lg lg:shadow-none shadow-[#445B6F1A] py-3 px-6 flex justify-between items-center lg:columns-3 w-[88%] lg:max-w-[64rem] lg:w-auto h-[4rem] lg:h-[5rem] mx-auto transition-background duration-400">
//         <a href="#" className="text-base text-white font-semibold">
//           TubiOb
//         </a>

//         {/* Mobile Menu Button - only shows on small screens */}
//         <div className="flex items-center space-x-4 lg:hidden">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {theme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>

//           <button 
//             onClick={toggleMenu} 
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Navigation Links - different behavior based on screen size */}
//         <div className={`w-[90%] lg:w-auto fixed lg:sticky left-0 right-0 bottom-[5rem] lg:bottom-auto mx-auto lg:mx-0 lg:ml-auto my-0 lg:my-auto px-3 lg:px-6 rounded-3xl lg:rounded-none transition-all duration-400 ${isMenuOpen ? 'block' : 'flex'}`}>
//           <motion.div 
//             className='bg-white dark:bg-[#181A1B] py-4 px-6 lg:py-0 lg:px-0 grid grid-cols-3 lg:flex w-full justify-center gap-x-12 gap-y-8 lg:gap-6 rounded-2xl lg:rounded-none shadow-md lg:shadow-none shadow-[#445B6F1A] border border-[#445B6F1A]'
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 20 }}
//             transition={{ duration: 0.3 }}
//           >
//             <motion.a 
//               href="#" 
//               className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//               whileHover={{ scale: 0.99 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <House className='text-[1.125rem] flex lg:hidden' /> Home
//             </motion.a>
//             <motion.a 
//               href="#about" 
//               className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//               whileHover={{ scale: 0.99 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <User className='text-[1.125rem] flex lg:hidden' /> About
//             </motion.a>
//             <motion.a 
//               href="#skills" 
//               className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//               whileHover={{ scale: 0.99 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <Cpu className='text-[1.125rem] flex lg:hidden' /> Skills & Portfolio
//             </motion.a>
//             <motion.a 
//               href="#contact" 
//               className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//               whileHover={{ scale: 0.99 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <BotMessageSquare className='text-[1.125rem] flex lg:hidden' /> Contact
//             </motion.a>
//           </motion.div>
//         </div>

//         {/* Theme Toggle - only shows on desktop */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {theme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>
//         </div>
//       </nav>
//     </header>
//   )
// }
















// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X, House, User, Cpu, BotMessageSquare } from "lucide-react"
// import { motion } from "framer-motion"
// import { useTheme } from "next-themes"

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { theme, setTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//     console.log(isMenuOpen)
//   }
//   const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark")

//   if (!mounted) {
//     return null
//   }

//   return (
//     <header className="fixed w-full bottom-2 lg:bottom-auto lg:top-0 bg-white dark:bg-[#181A1B] left-0 z-50 lg:shadow-lg shadow-[#445B6F1A]">
//       <nav className="relative rounded-full lg:rounded-none shadow-lg lg:shadow-none shadow-[#445B6F1A] border border-[#445B6F1A] lg:border-none py-3 px-6 flex justify-between items-center w-[88%] lg:max-w-[64rem] lg:w-auto h-[4rem] lg:h-[5rem] mx-auto">
//         <a href="#" className="text-base text-white font-semibold">
//           TubiOb
//         </a>

//         {/* Mobile Menu Button - only shows on small screens */}
//         <div className="flex items-center space-x-4 lg:hidden">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {theme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>

//           <button 
//             onClick={toggleMenu} 
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Navigation Links - different behavior based on screen size */}
//         <div className={`${isMenuOpen ? 'fixed' : 'hidden'} lg:block inset-0 lg:inset-auto lg:relative`}>
//           <div className="absolute lg:static bottom-[5rem] left-0 right-0 lg:bottom-auto mx-auto lg:mx-0 w-[90%] lg:w-auto bg-white dark:bg-[#181A1B] lg:bg-transparent rounded-2xl lg:rounded-none shadow-lg shadow-[#445B6F1A] border border-[#445B6F1A] lg:border-none lg:shadow-none p-4 lg:p-0">
//             <motion.div className="grid grid-cols-3 lg:flex gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: isMenuOpen ? 1 : 1, y: isMenuOpen ? 0 : 0 }} transition={{ duration: 0.3 }}>
//               <motion.a href="#" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}>
//                 <House className='text-[1.125rem] flex lg:hidden' /> Home
//               </motion.a>
//               <motion.a href="#about" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}>
//                 <User className='text-[1.125rem] flex lg:hidden' /> About
//               </motion.a>
//               <motion.a href="#skills" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}>
//                 <Cpu className='text-[1.125rem] flex lg:hidden' /> Skills & Portfolio
//               </motion.a>
//               <motion.a href="#contact" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}>
//                 <BotMessageSquare className='text-[1.125rem] flex lg:hidden' /> Contact
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>

//         {/* Theme Toggle - only shows on desktop */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {theme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>
//         </div>
//       </nav>
//     </header>
//   )
// }
















// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X, House, User, Cpu, BotMessageSquare } from "lucide-react"
// import { motion } from "framer-motion"
// import { useTheme } from "next-themes"

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { theme, setTheme, resolvedTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

//   const toggleTheme = () => {
//     setTheme(resolvedTheme === "dark" ? "light" : "dark")
//   }

//   if (!mounted) {
//     return null
//   }

//   return (
//     <header className="fixed w-full bottom-2 lg:bottom-auto lg:top-0 bg-white dark:bg-[#181A1B] left-0 z-50 lg:shadow-lg shadow-[#445B6F1A]">
//       <nav className="relative rounded-full lg:rounded-none shadow-lg lg:shadow-none shadow-[#445B6F1A] border border-[#445B6F1A] lg:border-none py-3 px-6 flex justify-between items-center w-[88%] lg:max-w-[64rem] lg:w-auto h-[4rem] lg:h-[5rem] mx-auto">
//         <a href="#" className="text-base text-white font-semibold">
//           TubiOb
//         </a>

//         {/* Mobile Menu Button - only shows on small screens */}
//         <div className="flex items-center space-x-4 lg:hidden">
//           <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200" aria-label="Toggle dark mode" >
//             {resolvedTheme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>

//           <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 touch-manipulation" aria-label="Toggle menu" >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Navigation Links - different behavior based on screen size */}
//         {isMenuOpen && (
//           <div className={`${isMenuOpen ? 'fixed inset-0 bg-black/10 lg:bg-transparent' : 'hidden'} lg:block lg:relative`}>
//             <div className="absolute lg:static bottom-[5rem] left-0 right-0 lg:bottom-auto mx-auto lg:mx-0 w-[90%] lg:w-auto bg-white dark:bg-[#181A1B] lg:bg-transparent rounded-2xl lg:rounded-none shadow-lg shadow-[#445B6F1A] border border-[#445B6F1A] lg:border-none lg:shadow-none p-4 lg:p-0"onClick={(e) => e.stopPropagation()}>
//               <motion.div className="grid grid-cols-3 lg:flex gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 1 : 0 }} transition={{ duration: 0.3 }}>
//                 <motion.a href="#" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}onClick={() => setIsMenuOpen(false)} >
//                   <House className='text-[1.125rem] flex lg:hidden' /> Home
//                 </motion.a>
//                 <motion.a href="#about" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}onClick={() => setIsMenuOpen(false)}>
//                   <User className='text-[1.125rem] flex lg:hidden' /> About
//                 </motion.a>
//                 <motion.a href="#skills" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}onClick={() => setIsMenuOpen(false)}>
//                   <Cpu className='text-[1.125rem] flex lg:hidden' /> Skills & Portfolio
//                 </motion.a>
//                 <motion.a href="#contact" className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] lg:text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"whileHover={{ scale: 0.99 }}whileTap={{ scale: 0.95 }}onClick={() => setIsMenuOpen(false)}>
//                   <BotMessageSquare className='text-[1.125rem] flex lg:hidden' /> Contact
//                 </motion.a>
//               </motion.div>
//             </div>
//           </div>
//         )}

//         {/* Theme Toggle - only shows on desktop */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {resolvedTheme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>
//         </div>
//       </nav>
//     </header>
//   )
// }




























// "use client"

// import type React from "react"
// import { useState, useEffect } from "react"
// import { Moon, Sun, Menu, X, HomeIcon as House, User, Cpu, BotMessageSquare } from "lucide-react"
// import { motion } from "framer-motion"
// import { useTheme } from "next-themes"

// export const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false)
//   const { theme, setTheme, resolvedTheme } = useTheme()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev)
//   }

//   const closeMenu = () => {
//     setIsMenuOpen(false)
//   }

//   const toggleTheme = () => {
//     setTheme(resolvedTheme === "dark" ? "light" : "dark")
//   }

//   if (!mounted) {
//     return null
//   }

//   return (
//     <header className="fixed w-full bottom-2 lg:bottom-auto lg:top-0 bg-white dark:bg-[#181A1B] left-0 z-50 lg:shadow-lg shadow-[#445B6F1A]">
//       <nav className="relative rounded-full lg:rounded-none shadow-lg lg:shadow-none shadow-[#445B6F1A] border border-[#445B6F1A] lg:border-none py-3 px-6 flex justify-between items-center w-[88%] lg:max-w-[64rem] lg:w-auto h-[4rem] lg:h-[5rem] mx-auto">
//         <a href="#" className="text-base text-black dark:text-white font-semibold">
//           TubiOb
//         </a>

//         {/* Desktop Navigation Links */}
//         <div className="hidden lg:flex space-x-6">
//           <motion.a
//             href="#"
//             className="nav-link text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Home
//           </motion.a>
//           <motion.a
//             href="#about"
//             className="nav-link text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             About
//           </motion.a>
//           <motion.a
//             href="#skills"
//             className="nav-link text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Skills & Portfolio
//           </motion.a>
//           <motion.a
//             href="#contact"
//             className="nav-link text-[0.941rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//             whileHover={{ scale: 0.97 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Contact
//           </motion.a>
//         </div>

//         {/* Mobile Menu Button - only shows on small screens */}
//         <div className="flex items-center space-x-4 lg:hidden">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {resolvedTheme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>

//           <button
//             onClick={toggleMenu}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 touch-manipulation"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>

//         {/* Theme Toggle - only shows on desktop */}
//         <div className="hidden lg:flex items-center space-x-4">
//           <button
//             onClick={toggleTheme}
//             className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
//             aria-label="Toggle dark mode"
//           >
//             {resolvedTheme === "dark" ? (
//               <Sun size={24} className="text-yellow-400" />
//             ) : (
//               <Moon size={24} className="text-gray-600" />
//             )}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu Overlay */}
//       {isMenuOpen && (
//         <div className="fixed inset-0 bg-black/10 z-40 lg:hidden" onClick={closeMenu}>
//           <div
//             className="absolute bottom-[5rem] left-0 right-0 mx-auto w-[90%] bg-white dark:bg-[#181A1B] rounded-2xl shadow-lg shadow-[#445B6F1A] border border-[#445B6F1A] p-4"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <motion.div
//               className="grid grid-cols-3 gap-6"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <motion.a
//                 href="#"
//                 className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//                 whileHover={{ scale: 0.99 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={closeMenu}
//               >
//                 <House className="text-[1.125rem]" /> Home
//               </motion.a>
//               <motion.a
//                 href="#about"
//                 className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//                 whileHover={{ scale: 0.99 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={closeMenu}
//               >
//                 <User className="text-[1.125rem]" /> About
//               </motion.a>
//               <motion.a
//                 href="#skills"
//                 className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//                 whileHover={{ scale: 0.99 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={closeMenu}
//               >
//                 <Cpu className="text-[1.125rem]" /> Skills
//               </motion.a>
//               <motion.a
//                 href="#contact"
//                 className="nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] text-[#8A8F93] hover:text-black dark:hover:text-white"
//                 whileHover={{ scale: 0.99 }}
//                 whileTap={{ scale: 0.95 }}
//                 onClick={closeMenu}
//               >
//                 <BotMessageSquare className="text-[1.125rem]" /> Contact
//               </motion.a>
//             </motion.div>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }





















"use client"

import React from "react";
import { useState, useEffect, useRef } from "react";
import { Moon, Sun, Menu, X, HomeIcon as House, User, Cpu, BotMessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAnimation } from "@/context/AnimationContext";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { /* theme, */ setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);

  const { registerAnimation } = useAnimation();

  useEffect(() => {
    setMounted(true);
  }, [])

  useEffect(() => {
    if (headerRef.current) {
      registerAnimation(
        headerRef as React.RefObject<HTMLElement>,
        (tl) => {
          tl.fromTo(
            headerRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
            0, // Start at the beginning of the timeline
          )
        },
        10, // High priority to ensure header animates early
      )
    }
  }, [registerAnimation])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  }

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      if (isMenuOpen && !target.closest(".menu-container") && !target.closest(".menu-button")) {
        closeMenu();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    }
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    return pathname === path;
  }

  if (!mounted) {
    return null;
  }

  return (
    <header ref={headerRef} className="fixed w-dvw lg:w-full bottom-2 lg:bottom-auto lg:top-0 left-0 bg-transparent lg:bg-[var(--bg-color)] lg:shadow-lg shadow-[#445B6F1A] transition-all ease-in-out z-[100]">
      {/* <div className="w-full flex justify-center"> */}
        <nav className="relative rounded-full lg:rounded-none bg-[var(--bg-color)] shadow-lg lg:shadow-none shadow-[#445B6F1A] border border-gray-100 dark:border-gray-800 lg:border-none py-3 px-6 flex justify-between items-center w-[90%] lg:max-w-[64rem] lg:w-auto h-[4rem] lg:h-[5rem] mx-auto z-[100]">
          <Link href="#" className="text-base text-foreground">
            TubiOb
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6 bg-background transition-discrete">
            <motion.a href="/" className={`nav-link text-[0.941rem] ${isActive("/") ? "text-muted" : ""}`} whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
              Home
            </motion.a>
            <motion.a href="/about" className={`nav-link text-[0.941rem] ${isActive("/about") ? "text-muted" : ""}`} whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
              About
            </motion.a>
            <motion.a href="/skills" className={`nav-link text-[0.941rem] ${isActive("/skills") ? "text-muted" : ""}`} whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
              Skills & Portfolio
            </motion.a>
            <motion.a href="/contact" className={`nav-link text-[0.941rem] ${isActive("/contact") ? "text-muted" : ""}`} whileHover={{ scale: 0.97 }} whileTap={{ scale: 0.95 }}>
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button - only shows on small screens */}
          <div className="flex items-center space-x-4 lg:hidden transition-discrete">
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-background transition-colors duration-200" aria-label="Toggle dark mode">
              {resolvedTheme === "dark" ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} className="text-foreground" />
              )}
            </button>

            <button onClick={toggleMenu} className="menu-button p-2 rounded-full hover:bg-background touch-manipulation text-muted" aria-label="Toggle menu">
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Theme Toggle - only shows on desktop */}
          <div className="hidden lg:flex items-center transition-discrete">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-background transition-colors duration-200"
              aria-label="Toggle dark mode"
            >
              {resolvedTheme === "dark" ? (
                <Sun size={24} className="text-yellow-400" />
              ) : (
                <Moon size={24} className="text-foreground" />
              )}
            </button>
          </div>
        </nav>
      {/* </div> */}

      {/* Mobile Menu - Integrated but conditionally rendered */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[99] transition-discrete">
          <div className="menu-container absolute bottom-[5rem] left-0 right-0 mx-auto w-[90%] bg-[var(--bg-color)] rounded-2xl shadow-lg shadow-[#445B6F1A] border border-gray-100 dark:border-gray-800 p-4">
            <motion.div className="grid grid-cols-3 gap-6 bg-background" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
              <motion.a href="/" className={`nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] ${isActive("/") ? "text-muted" : ""}`} whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
                <House className="text-[1.125rem]" /> Home
              </motion.a>
              <motion.a href="/about" className={`nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] ${isActive("/about") ? "text-muted" : ""}`} whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
                <User className="text-[1.125rem]" /> About
              </motion.a>
              <motion.a href="/skills" className={`nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] ${isActive("/skills") ? "text-muted" : ""}`} whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
                <Cpu className="text-[1.125rem]" /> Skills & Portfolio
              </motion.a>
              <motion.a href="/contact" className={`nav-link flex flex-col items-center justify-center gap-y-1 text-[0.75rem] ${isActive("/contact") ? "text-muted" : ""}`} whileHover={{ scale: 0.99 }} whileTap={{ scale: 0.95 }} onClick={closeMenu}>
                <BotMessageSquare className="text-[1.125rem]" /> Contact
              </motion.a>
            </motion.div>
          </div>
        </div>
      )}
    </header>
  )
}