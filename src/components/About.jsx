import { motion } from 'framer-motion'
import { Target, Eye, Heart, Shield, Rocket, Wallet, BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'
import classroomImage from '../assets/images/classroom.jpg'

const stats = [
  { value: '18+', label: 'Years of serving schools' },
  { value: '25+', label: 'Institutions served' },
  { value: '1000+', label: 'Orders delivered' },
  { value: '100%', label: 'Commitment' },
]

const values = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To simplify school procurement across Ghana by providing quality educational supplies, innovative technology solutions, and dependable support services that help schools operate efficiently and students learn better.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: "To become Ghana's leading School Procurement & Educational Supply Partner, making quality educational resources accessible to schools and parents through convenient, reliable, and affordable solutions.",
  },
  {
    icon: Heart,
    title: 'Our Promise',
    description: "We simplify school procurement for schools and parents. From educational supplies to essential school resources, we make sourcing easier, more convenient, and more reliable — so schools can focus on education and parents on their children's success.",
  },
]

const reasons = [
  { icon: Shield, title: 'Reliable Delivery', desc: 'Consistent, on-time delivery you can count on every single time' },
  { icon: Wallet, title: 'Competitive Pricing', desc: 'Best market prices through our extensive supplier network' },
  { icon: Rocket, title: 'Fast Turnaround', desc: 'Quick processing and procurement for urgent school needs' },
  { icon: BookOpen, title: 'Premium Quality', desc: 'Only the finest educational resources and materials' },
]

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

export default function About() {
  return (
    <section id="about" className="bg-white">
      {/* Who We Are */}
      <div className="grid lg:grid-cols-2">
        <motion.div {...fadeUp} className="bg-brand text-white px-5 sm:px-10 lg:px-16 py-16 lg:py-20 flex">
          <div className="max-w-xl lg:ml-auto my-auto">
            <p className="font-heading text-sm text-white/75 mb-1">About</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Who We Are</h2>
            <p className="mt-6 leading-relaxed text-white/90">
              Global Collections Books &amp; Stationery (GCB) is a Ghanaian educational procurement company dedicated
              to helping schools source quality educational resources, supplies, and essential operational materials
              at competitive prices.
            </p>
            <p className="mt-4 leading-relaxed text-white/90">
              Founded in 2006 as a specialist book distribution company, GCB has grown to serve universities,
              senior high schools, junior high schools, private educational institutions, and corporate
              organisations across Ghana.
            </p>
            <p className="mt-4 leading-relaxed text-white/90">
              Through longstanding partnerships with renowned publishers in the United States and the United
              Kingdom, we provide access to premium educational resources for schools, libraries, and
              institutions nationwide.
            </p>
            <a href="#services" className="btn btn-dark mt-8">Our Services</a>
          </div>
        </motion.div>
        <div
          className="min-h-[320px] bg-cover bg-center grayscale"
          style={{ backgroundImage: `url(${classroomImage})` }}
          role="img"
          aria-label="Students in a classroom"
        />
      </div>

      {/* Stats */}
      <div className="bg-mist">
        <div className="container-fluid py-14 grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <motion.div key={stat.label} {...fadeUp} className="border-l-4 border-brand pl-5">
              <div className="font-heading text-4xl md:text-5xl font-semibold text-ink">{stat.value}</div>
              <div className="mt-2 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mission, Vision, Promise */}
      <div className="container-fluid section-padding">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative isolate"
            >
              <div className="dots absolute -bottom-7 -left-5 -z-10" />
              <div className="card h-full">
                <item.icon size={46} strokeWidth={1.75} className="text-ink" />
                <h3 className="mt-6 text-xl font-medium text-ink">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-24">
          <SectionHeading eyebrow="Global Collections Books" title="Why Schools Choose GCB" center>
            We understand the challenges schools face — from tight budgets and unreliable suppliers to delayed
            deliveries and the complexity of coordinating multiple vendors.
          </SectionHeading>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-brand flex items-center justify-center mx-auto">
                  <item.icon size={28} className="text-white" />
                </div>
                <h4 className="mt-5 font-medium text-lg text-ink">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
