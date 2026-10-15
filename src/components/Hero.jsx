import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import heroImage from '../assets/images/hero.jpg'

export default function Hero() {
  return (
    <section
      id="hero"
      className="photo-section min-h-[90vh] flex flex-col rounded-br-[80px] md:rounded-br-[150px]"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="container-fluid flex-1 flex items-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="font-heading text-lg md:text-xl text-white/90 mb-3">Welcome To</p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-semibold uppercase leading-[1.15] tracking-tight">
            Global Collections Books &amp; Stationery
          </h1>
          <div className="mt-6 h-[3px] w-44 bg-brand" />
          <p className="mt-6 text-lg md:text-xl text-white/90">
            Simplifying school procurement across Ghana since 2006
          </p>
          <p className="mt-3 max-w-2xl text-white/75 leading-relaxed">
            From textbooks to uniforms, supplies to technology — one procurement partner delivering quality
            educational resources at competitive prices.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/services" className="btn btn-primary">
              Our Services
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
