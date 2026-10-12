import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import {
  BookOpen,
  ShoppingBag,
  Shirt,
  Footprints,
  Printer,
  ClipboardCheck,
  Boxes,
} from 'lucide-react'

const services = [
  {
    icon: BookOpen,
    title: 'Textbooks & Reading Materials',
    description: 'Comprehensive range of educational books and learning resources, including GES-approved curriculum textbooks, supplementary reading, reference materials, dictionaries, atlases, BECE and WASSCE examination preparation guides, storybooks, and library collections.',
    tags: ['GES-Approved', 'IB & Cambridge', 'International Textbooks'],
  },
  {
    icon: ShoppingBag,
    title: 'Stationery & Office Supplies',
    description: 'Wide range of school and office stationery, including exercise books, notebooks, pens, pencils, markers, geometry sets, files, folders, paper, staplers, toners, and other essential classroom and administrative supplies.',
    tags: ['Classroom', 'Administrative', 'Bulk Orders'],
  },
  {
    icon: Shirt,
    title: 'School Uniforms',
    description: 'Quality school uniforms and related apparel, including shirts, trousers, skirts, dresses, sweaters, cardigans, ties, socks, and other customised schoolwear — produced to meet each school\'s colours, designs, and specifications.',
    tags: ['Custom Designs', 'All Sizes', 'Premium Quality'],
  },
  {
    icon: Footprints,
    title: 'Sportswear & Jerseys',
    description: 'Customised sportswear and team apparel for schools, including football jerseys, sports kits, tracksuits, P.E. kits, shorts, T-shirts, and other athletic wear, with options for school branding and team personalisation.',
    tags: ['Team Branding', 'Custom Kits', 'Athletic Wear'],
  },
  {
    icon: Printer,
    title: 'Printing & Printables',
    description: 'Customised printing solutions for schools, including exercise books, diaries, school bags, brochures, flyers, certificates, ID cards, stickers, letterheads, report sheets, prospectuses, banners, and other branded materials.',
    tags: ['Custom Printing', 'Branded Materials', 'ID Cards'],
  },
  {
    icon: ClipboardCheck,
    title: 'Examination Materials',
    description: 'Essential examination and assessment materials, including answer booklets, foolscap sheets, question papers, examination envelopes, scripts, attendance sheets, invigilation materials, certificates, and other resources.',
    tags: ['Answer Booklets', 'Exam Supplies', 'Assessment Tools'],
  },
  {
    icon: Boxes,
    title: 'General School Supplies',
    description: 'Broad range of school essentials, including classroom consumables, art and craft materials, science laboratory supplies, educational resources, cleaning and hygiene products, classroom accessories, sports equipment, and other items.',
    tags: ['Lab Supplies', 'Art Materials', 'Sports Equipment'],
  },
]

const scrollToContact = (e) => {
  e.preventDefault()
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  return (
    <section id="services" className="section-padding bg-mist">
      <div className="container-fluid">
        <SectionHeading eyebrow="Global Collections Books" title="Our Services">
          From textbooks to technology, uniforms to lab equipment — we source, supply, and deliver
          everything your institution needs, all from one trusted partner.
        </SectionHeading>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="card flex flex-col border-b-4 border-transparent hover:border-brand transition-colors duration-300"
            >
              <service.icon size={44} strokeWidth={1.75} className="text-ink" />

              <h6 className="mt-6 text-xs font-medium uppercase tracking-wider text-brand">
                {service.tags.join(' · ')}
              </h6>
              <h3 className="mt-2 text-xl font-medium text-ink">{service.title}</h3>

              <p className="mt-3 mb-7 text-[15px] leading-relaxed flex-grow">{service.description}</p>

              <a href="#contact" onClick={scrollToContact} className="btn btn-primary self-start">
                Request a Quote
              </a>
            </motion.div>
          ))}

          {/* Fills the last row beside the seventh service */}
          <div className="md:col-span-1 lg:col-span-2 bg-brand text-white p-8 sm:p-10 flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Need more than one of these?</h3>
            <p className="mt-4 max-w-md leading-relaxed text-white/90">
              Share your full list and receive one consolidated, competitive quote covering every item.
            </p>
            <a href="#contact" onClick={scrollToContact} className="btn btn-dark self-start mt-7">
              Get a Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
