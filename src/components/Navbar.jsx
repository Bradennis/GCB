import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import emblem from '../assets/gcb-emblem.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Client Records', to: '/clients' },
  { label: 'Contact Us', to: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : ''}`}>
      <div className="container-fluid">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" onClick={() => setIsOpen(false)} aria-label="Global Collections Books — Home" className="flex items-center gap-3">
            <img src={emblem} alt="" className="h-12 w-auto" />
            <div className="font-heading font-semibold uppercase leading-tight">
              <span className="block text-[13px] sm:text-[15px] text-brand tracking-wide">Global Collections</span>
              <span className="block text-[13px] sm:text-[15px] text-ink tracking-[0.2em]">Books</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                end
                className={({ isActive }) => `font-heading text-sm transition-colors ${
                  isActive ? 'text-ink' : 'text-brand-dark hover:text-ink'
                }`}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="tel:+233275286178" className="hidden lg:inline-flex btn btn-primary">
            <Phone size={16} />
            +233 275 286 178
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-ink"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-200 shadow-lg"
          >
            <div className="container-fluid py-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.to}
                  end
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) => `block py-3 font-heading text-sm border-b border-gray-100 ${
                    isActive ? 'text-ink' : 'text-brand-dark'
                  }`}
                >
                  {link.label}
                </NavLink>
              ))}
              <a href="tel:+233275286178" className="btn btn-primary w-full mt-4 mb-2">
                <Phone size={16} />
                +233 275 286 178
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
