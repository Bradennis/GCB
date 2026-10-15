import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronRight, Phone } from 'lucide-react'

// Icons are cut from GCB's procurement process artwork, recoloured from green to the site's reds
const icons = import.meta.glob('../assets/process/*.png', { eager: true, import: 'default' })
const icon = (name) => icons[`../assets/process/${name}.png`]

const steps = [
  {
    icon: icon('step-1'),
    title: 'Let’s Understand Your Needs',
    description: 'We start with a brief consultation to understand your school’s procurement needs, timelines, specifications and budget requirements.',
  },
  {
    icon: icon('step-2'),
    title: 'Share Your Procurement List',
    description: 'Send us your list of required items — whether it’s textbooks, stationery, uniforms, sportswear, printing, examination materials or general school supplies.',
  },
  {
    icon: icon('step-3'),
    title: 'We Source & Prepare Your Quote',
    description: 'Our team sources the required items through our network of trusted suppliers and prepares a consolidated quotation for your review.',
  },
  {
    icon: icon('step-4'),
    title: 'Review & Approve',
    description: 'We present the quotation and specifications clearly, making it easy for your school to review, make adjustments, and approve the order.',
  },
  {
    icon: icon('step-5'),
    title: 'We Handle the Procurement',
    description: 'Once approved, we coordinate the sourcing, production, customisation, quality checks, and consolidation of your items — so you don’t have to manage multiple vendors.',
  },
  {
    icon: icon('step-6'),
    title: 'Delivery to Your School',
    description: 'Your order is prepared and delivered to your school, according to the agreed timeline and delivery arrangements.',
  },
  {
    icon: icon('step-7'),
    title: 'Your Dedicated Procurement Partner',
    description: 'Our relationship doesn’t end with one order. We remain available to support your school’s ongoing procurement needs throughout the academic year.',
  },
]

const reasons = [
  { icon: icon('why-one-partner'), title: 'One Partner', note: 'Multiple needs' },
  { icon: icon('why-saves-time'), title: 'Saves Time', note: 'and effort' },
  { icon: icon('why-trusted-suppliers'), title: 'Trusted Suppliers', note: 'Quality you can count on' },
  { icon: icon('why-personalised-support'), title: 'Personalised', note: 'Support' },
  { icon: icon('why-reliable-delivery'), title: 'Reliable', note: 'Delivery' },
]

const books = [
  { label: 'Textbooks', className: 'bg-[#2b5ea7] text-white', offset: 'ml-4' },
  { label: 'Stationery', className: 'bg-[#3e8e4f] text-white', offset: 'ml-0' },
  { label: 'Uniforms', className: 'bg-gold text-ink', offset: 'ml-6' },
  { label: 'Sportswear', className: 'bg-brand text-white', offset: 'ml-2' },
  { label: 'Printing', className: 'bg-[#3a3f9a] text-white', offset: 'ml-5' },
  { label: '& More', className: 'bg-ink text-white', offset: 'ml-1' },
]

function StepCard({ step, number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (number % 4) * 0.08 }}
      className="relative h-full rounded-2xl bg-blush px-6 pt-10 pb-8 text-center"
    >
      <span className="absolute -top-4 -left-3 w-11 h-11 rounded-full bg-brand-dark text-white font-heading font-semibold text-lg flex items-center justify-center ring-4 ring-white">
        {number}
      </span>

      <img src={step.icon} alt="" className="mx-auto h-20 w-auto max-w-[8rem] object-contain" />

      <h3 className="mt-5 text-lg font-semibold leading-snug text-brand-dark">{step.title}</h3>
      <p className="mt-3 text-sm leading-relaxed">{step.description}</p>
    </motion.li>
  )
}

function StepRow({ items, startAt, columns }) {
  return (
    <ol className={`grid gap-8 sm:grid-cols-2 lg:gap-3 ${columns}`}>
      {items.map((step, i) => (
        <Fragment key={step.title}>
          {i > 0 && (
            <li aria-hidden="true" className="hidden lg:flex items-center justify-center">
              <ChevronRight size={22} strokeWidth={2.5} className="text-brand-dark" />
            </li>
          )}
          <StepCard step={step} number={startAt + i} />
        </Fragment>
      ))}
    </ol>
  )
}

export default function Process() {
  return (
    <>
      <section id="process" className="section-padding bg-white">
        <div className="container-fluid">
          <div className="text-center">
            <p className="font-heading text-lg md:text-xl font-semibold text-ink">
              Your School’s Procurement Made{' '}
              <span className="font-script text-4xl md:text-5xl text-brand align-middle">Simple</span>
            </p>
            <h2 className="mt-5 inline-block rounded-full bg-brand-dark px-8 py-3 text-xl md:text-3xl font-semibold text-white">
              Our Simple Procurement Process
            </h2>
            <p className="mt-5 max-w-2xl mx-auto leading-relaxed">
              From your needs to delivery — we make school procurement easy, efficient and stress-free.
            </p>
          </div>

          <div className="mt-16 space-y-10">
            <StepRow
              items={steps.slice(0, 4)}
              startAt={1}
              columns="lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]"
            />
            <StepRow
              items={steps.slice(4)}
              startAt={5}
              columns="lg:grid-cols-[1fr_auto_1fr_auto_1fr]"
            />
          </div>
        </div>
      </section>

      {/* Why Schools Choose GCB */}
      <section className="pb-20 md:pb-24 bg-white">
        <div className="container-fluid">
          <div className="border-t border-gray-200 pt-16 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-ink">Why Schools Choose GCB</h2>
              <div className="mt-4 h-1 w-24 bg-brand" />

              <ul className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-y-8 md:divide-x md:divide-gray-200">
                {reasons.map((reason) => (
                  <li key={reason.title} className="flex flex-col items-center text-center px-3">
                    <img src={reason.icon} alt="" className="w-14 h-14" />
                    <span className="mt-3 font-heading text-sm font-semibold text-ink">{reason.title}</span>
                    <span className="text-xs text-balance">{reason.note}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-12">
                <p className="font-script text-3xl md:text-4xl text-brand-dark">One school. One procurement partner.</p>
                <p className="mt-1 text-lg md:text-xl text-ink">Multiple needs. One seamless process.</p>
                <svg aria-hidden="true" viewBox="0 0 220 14" className="mt-2 w-56 h-4 text-gold">
                  <path d="M2 10C60 2 150 1 218 7" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
                <a href="tel:+233275286178" className="btn btn-dark">
                  <Phone size={16} />
                  Call Us
                </a>
              </div>
            </div>

            {/* Book stack illustration */}
            <div aria-hidden="true" className="hidden sm:block justify-self-center">
              <div className="flex flex-col gap-1 -rotate-2">
                {books.map((book) => (
                  <div
                    key={book.label}
                    className={`${book.offset} ${book.className} w-60 h-10 rounded-l-sm rounded-r-md border-r-[10px] border-r-[#f4eee4] shadow-md flex items-center px-4 font-heading text-sm font-bold uppercase tracking-wide`}
                  >
                    {book.label}
                  </div>
                ))}
              </div>
              <div className="mt-1 h-3 w-72 -ml-4 rounded bg-[#a8763e] shadow-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
