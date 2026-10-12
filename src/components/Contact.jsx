import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import SectionHeading from './SectionHeading'
import stationeryImage from '../assets/images/stationery.jpg'

const details = [
  { icon: Phone, label: 'Phone', lines: ['+233 275 286 178', '+233 543 882 840'] },
  { icon: Mail, label: 'Email', lines: ['gcollectionsbooks@yahoo.com'] },
  { icon: MapPin, label: 'Address', lines: ['P.O. Box MD 1503', 'Madina, Accra, Ghana'] },
  { icon: Clock, label: 'Working Hours', lines: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'] },
]

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-mist">
      <div className="container-fluid">
        <SectionHeading eyebrow="Get In Touch" title="Contact Us" center>
          Ready to simplify your school procurement? Reach out to us and let us handle the rest.
        </SectionHeading>

        <div className="mt-14 grid lg:grid-cols-5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="photo-section lg:col-span-2 p-8 sm:p-10"
            style={{ backgroundImage: `url(${stationeryImage})` }}
          >
            <h3 className="text-2xl font-semibold">Let&apos;s Talk</h3>
            <div className="mt-3 h-[3px] w-16 bg-brand" />
            <p className="mt-5 text-white/80 leading-relaxed">
              We&apos;re here to help your institution thrive. Get in touch today.
            </p>

            <div className="mt-10 space-y-8">
              {details.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <item.icon size={22} className="text-brand mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-heading text-xs uppercase tracking-wider text-white/60 mb-1">{item.label}</p>
                    {item.lines.map((line) => (
                      <p key={line} className="font-medium break-words">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white p-8 sm:p-10"
          >
            <h3 className="text-2xl font-medium text-ink">Send Us a Message</h3>
            <p className="mt-2 mb-8 text-sm">Fill out the form below and we&apos;ll get back to you shortly.</p>

            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block font-heading text-sm text-ink mb-2">Full Name</span>
                  <input type="text" placeholder="Your full name" className="field" />
                </label>
                <label className="block">
                  <span className="block font-heading text-sm text-ink mb-2">Institution</span>
                  <input type="text" placeholder="Your institution name" className="field" />
                </label>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <label className="block">
                  <span className="block font-heading text-sm text-ink mb-2">Email</span>
                  <input type="email" placeholder="your@email.com" className="field" />
                </label>
                <label className="block">
                  <span className="block font-heading text-sm text-ink mb-2">Phone</span>
                  <input type="tel" placeholder="+233 XX XXX XXXX" className="field" />
                </label>
              </div>

              <label className="block">
                <span className="block font-heading text-sm text-ink mb-2">Service Needed</span>
                <select className="field">
                  <option value="">Select a service</option>
                  <option>Textbooks & Reading Materials</option>
                  <option>Stationery & Office Supplies</option>
                  <option>School Uniforms</option>
                  <option>Sportswear & Jerseys</option>
                  <option>Printing & Printables</option>
                  <option>Examination Materials</option>
                  <option>General School Supplies</option>
                  <option>Multiple Services</option>
                </select>
              </label>

              <label className="block">
                <span className="block font-heading text-sm text-ink mb-2">Message</span>
                <textarea rows={4} placeholder="Tell us about your procurement needs..." className="field resize-none" />
              </label>

              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
