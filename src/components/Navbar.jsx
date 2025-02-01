"use client"
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Globe } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-sienna-500/50 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-decorative font-bold bg-gradient-to-r from-ochre-400 to-lapis-500 text-transparent bg-clip-text">
              Museum Bot
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Exhibitions', 'Tickets', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-white/90 hover:text-lapis-400 transition-colors font-serif tracking-wide text-xl"
              >
                {item}
              </Link>
            ))}
            
            {/* Language Selector */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative group p-2 rounded-full bg-sienna-500/60 border border-terracotta-300/20"
            >
              <Globe className="w-5 h-5 text-lapis-400" />
            </motion.button>

            {/* Book Now Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ancient-button"
            >
              Book Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden glass-panel mx-4 mt-2"
        >
          <div className="p-4 space-y-4">
            {['Exhibitions', 'Tickets', 'Contact'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="block text-white/90 hover:text-lapis-400 transition-colors font-serif tracking-wide"
              >
                {item}
              </Link>
            ))}
            <button className="w-full ancient-button mt-4">
              Book Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  )
}