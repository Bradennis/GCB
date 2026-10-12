import { motion } from 'framer-motion'
import { GraduationCap, School, Building2 } from 'lucide-react'
import SectionHeading from './SectionHeading'

const clients = [
  { name: 'Central University College', type: 'University', icon: GraduationCap },
  { name: 'University of Ghana, Balme Library', type: 'University Library', icon: Building2 },
  { name: 'University of Ghana, School of Public Health', type: 'University', icon: GraduationCap },
  { name: 'GIMPA', type: 'University', icon: GraduationCap },
  { name: 'Wa Polytechnic', type: 'Polytechnic', icon: School },
  { name: 'University College of Wisconsin (Ghana)', type: 'University', icon: GraduationCap },
  { name: 'Pentecost University College', type: 'University', icon: GraduationCap },
  { name: 'KNUST', type: 'University', icon: GraduationCap },
  { name: 'University for Development Studies (Tamale/Wa)', type: 'University', icon: GraduationCap },
  { name: 'Community University College (Takoradi)', type: 'University', icon: GraduationCap },
  { name: 'Webster University, Ghana', type: 'University', icon: GraduationCap },
  { name: 'Ashesi University', type: 'University', icon: GraduationCap },
  { name: 'Volta River Authority (VRA)', type: 'Corporate', icon: Building2 },
  { name: 'Akosombo International School', type: 'School', icon: School },
  { name: 'Central Gospel School', type: 'School', icon: School },
  { name: 'International Community School', type: 'School', icon: School },
  { name: 'Springforth Community School', type: 'School', icon: School },
  { name: 'Dayspring International School', type: 'School', icon: School },
  { name: 'DPS International School', type: 'School', icon: School },
  { name: 'Academic City University', type: 'University', icon: GraduationCap },
]

export default function Clients() {
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-fluid">
        <SectionHeading eyebrow="Trusted Partners" title="Our Client Records" center>
          We take pride in serving a diverse range of educational institutions and organisations
          across Ghana — from universities and polytechnics to international schools.
        </SectionHeading>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.05 }}
              className="flex items-center gap-4 py-4 border-b border-gray-200"
            >
              <client.icon size={22} className="text-brand flex-shrink-0" />
              <div className="min-w-0">
                <p className="font-heading font-medium text-ink text-sm">{client.name}</p>
                <p className="text-xs mt-0.5">{client.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
