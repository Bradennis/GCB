import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import heroImage from '../assets/images/hero.jpg'

const SITE_NAME = 'GCB - Global Collections Books & Stationery'

export default function PageHeader({ title, subtitle }) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`
  }, [title])

  return (
    <section className="photo-section" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="container-fluid py-16 md:py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm text-white/70 font-heading">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-white">{title}</span>
          </nav>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-semibold uppercase tracking-tight">{title}</h1>
          <div className="mt-5 h-[3px] w-28 bg-brand" />
          {subtitle && <p className="mt-5 max-w-2xl text-white/80 leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  )
}
