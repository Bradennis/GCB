import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import booksImage from '../assets/images/books.jpg'

const steps = [
  {
    title: 'Tell Us What You Need',
    description: 'Share your procurement requirements and specific needs with our dedicated team.',
  },
  {
    title: 'Share Your List',
    description: 'Provide a detailed list of items, quantities, and any specifications your institution requires.',
  },
  {
    title: 'Get a Consolidated Quote',
    description: 'Receive a comprehensive, competitive quote covering all items from our extensive supplier network.',
  },
  {
    title: 'Approve Your Order',
    description: 'Review and approve the quote. We handle all negotiations and sourcing on your behalf.',
  },
  {
    title: 'We Handle Procurement',
    description: 'Our team manages the entire procurement process — quality checking, consolidation, and logistics.',
  },
  {
    title: 'Receive Your Delivery',
    description: 'Your ordered items are delivered promptly to your institution, ready when you need them.',
  },
]

export default function Process() {
  return (
    <section
      id="process"
      className="photo-section section-padding rounded-br-[80px] md:rounded-br-[150px]"
      style={{ backgroundImage: `url(${booksImage})` }}
    >
      <div className="container-fluid">
        <SectionHeading eyebrow="How It Works" title="Our Simple Procurement Process" light>
          Getting everything your school needs has never been easier. Just six simple steps from inquiry to delivery.
        </SectionHeading>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="border-t border-white/25 pt-6"
            >
              <span className="font-heading text-5xl font-semibold text-brand">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 text-xl font-medium">{step.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-white/75">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
