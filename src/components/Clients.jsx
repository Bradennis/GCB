import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const logos = import.meta.glob('../assets/clients/*.png', { eager: true, import: 'default' })
const logo = (name) => logos[`../assets/clients/${name}.png`]

const clients = [
  { name: 'Central University College', type: 'University', logo: logo('central-university') },
  { name: 'University of Ghana, Balme Library', type: 'University Library', logo: logo('university-of-ghana') },
  { name: 'University of Ghana, School of Public Health', type: 'University', logo: logo('university-of-ghana') },
  { name: 'GIMPA', type: 'University', logo: logo('gimpa') },
  { name: 'Wa Polytechnic', type: 'Polytechnic', logo: logo('dhltu') },
  { name: 'University College of Wisconsin (Ghana)', type: 'University', logo: logo('wiuc') },
  { name: 'Pentecost University College', type: 'University', logo: logo('pentecost') },
  { name: 'KNUST', type: 'University', logo: logo('knust') },
  { name: 'University for Development Studies (Tamale/Wa)', type: 'University', logo: logo('uds') },
  { name: 'Community University College (Takoradi)', type: 'University', logo: logo('community-university-college') },
  { name: 'Webster University, Ghana', type: 'University', logo: logo('webster') },
  { name: 'Ashesi University', type: 'University', logo: logo('ashesi') },
  { name: 'Volta River Authority (VRA)', type: 'Corporate', logo: logo('vra') },
  { name: 'Akosombo International School', type: 'School', logo: logo('akosombo-international-school') },
  { name: 'Central Gospel School', type: 'School', logo: logo('central-gospel-school') },
  { name: 'International Community School', type: 'School', logo: logo('international-community-school') },
  { name: 'Springforth Community School', type: 'School', logo: logo('springforth') },
  { name: 'Dayspring International School', type: 'School', logo: logo('dayspring') },
  { name: 'DPS International School', type: 'School', logo: logo('dps-international') },
  { name: 'Academic City University', type: 'University', logo: logo('academic-city') },
]

export default function Clients() {
  return (
    <section id="clients" className="section-padding bg-white">
      <div className="container-fluid">
        <SectionHeading eyebrow="Trusted Partners" title="Our Client Records" center>
          We take pride in serving a diverse range of educational institutions and organisations
          across Ghana — from universities and polytechnics to international schools.
        </SectionHeading>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.05 }}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-xl border border-gray-200 bg-white"
            >
              <div className="h-20 w-full flex items-center justify-center">
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </div>
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
