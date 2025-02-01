"use client"
import { motion } from 'framer-motion'
import ParticleEffect from './ParticleEffect'

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('/interior.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-r from-sienna-600/90 to-sienna-500/70" />
      </div>

      {/* Particle Effect */}
      <ParticleEffect />

      {/* Hieroglyphic Border */}
      <div className="absolute inset-x-0 top-0 h-16 bg-[url('/hieroglyphic-border.jpg')] bg-repeat-x opacity-20" />
      <div className="absolute inset-x-0 bottom-0 h-16 bg-[url('/hieroglyphic-border.jpg')] bg-repeat-x opacity-20 transform rotate-180" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-5xl sm:text-7xl font-decorative text-white mb-6 tracking-wider">
          <span className="bg-gradient-to-r from-ochre-400 to-lapis-500 text-transparent bg-clip-text">
            Where History Meets Future
          </span>
        </h1>
        <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-serif">
          Experience our museum through time with our digital guide
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="ancient-button text-lg sm:text-xl px-8 py-4"
        >
          Start Your Journey
        </motion.button>
      </motion.div>
    </div>
  )
}