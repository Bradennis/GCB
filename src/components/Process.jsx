import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MessageSquare, ListChecks, FileText, BadgeCheck, PackageCheck, Truck, Phone } from 'lucide-react'
import SectionHeading from './SectionHeading'

const steps = [
  {
    icon: MessageSquare,
    title: 'Tell Us What You Need',
    description: 'Share your procurement requirements and specific needs with our dedicated team.',
  },
  {
    icon: ListChecks,
    title: 'Share Your List',
    description: 'Provide a detailed list of items, quantities, and any specifications your institution requires.',
  },
  {
    icon: FileText,
    title: 'Get a Consolidated Quote',
    description: 'Receive a comprehensive, competitive quote covering all items from our extensive supplier network.',
  },
  {
    icon: BadgeCheck,
    title: 'Approve Your Order',
    description: 'Review and approve the quote. We handle all negotiations and sourcing on your behalf.',
  },
  {
    icon: PackageCheck,
    title: 'We Handle Procurement',
    description: 'Our team manages the entire procurement process — quality checking, consolidation, and logistics.',
  },
  {
    icon: Truck,
    title: 'Receive Your Delivery',
    description: 'Your ordered items are delivered promptly to your institution, ready when you need them.',
  },
]

export default function Process() {
  return (
    <>
      <section id="process" className="section-padding bg-mist">
        <div className="container-fluid">
          <SectionHeading eyebrow="From Inquiry to Delivery" title="Our Simple Procurement Process" center>
            Getting everything your school needs has never been easier. Just six simple steps from inquiry to delivery.
          </SectionHeading>

          <ol className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="card relative overflow-hidden border-t-4 border-brand"
              >
                <span
                  aria-hidden="true"
                  className="absolute top-3 right-5 font-heading text-[5.5rem] leading-none font-bold text-brand/10 select-none"
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="relative w-14 h-14 rounded-full bg-brand/10 flex items-center justify-center">
                  <step.icon size={26} strokeWidth={1.75} className="text-brand" />
                </div>
                <p className="relative mt-6 font-heading text-xs font-medium uppercase tracking-wider text-brand">
                  Step {i + 1}
                </p>
                <h3 className="relative mt-1 text-xl font-medium text-ink">{step.title}</h3>
                <p className="relative mt-3 text-[15px] leading-relaxed">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-brand text-white">
        <div className="container-fluid py-14 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Ready to start step one?</h2>
            <p className="mt-3 max-w-xl text-white/90 leading-relaxed">
              Send us your list today and receive one consolidated, competitive quote for everything your school needs.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 flex-shrink-0">
            <Link to="/contact" className="btn btn-dark">Request a Quote</Link>
            <a href="tel:+233275286178" className="btn btn-outline">
              <Phone size={16} />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
