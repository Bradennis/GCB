import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, CircleCheck, CircleAlert } from 'lucide-react'
import SectionHeading from './SectionHeading'
import WhatsAppIcon from './WhatsAppIcon'
import stationeryImage from '../assets/images/stationery.jpg'
import { emailEnabled, formatFields, submitForm, whatsappLink } from '../lib/contact'

const details = [
  { icon: Phone, label: 'Phone', lines: ['+233 275 286 178', '+233 543 882 840'] },
  { icon: Mail, label: 'Email', lines: ['gcollectionsbooks@yahoo.com'] },
  { icon: MapPin, label: 'Address', lines: ['P.O. Box MD 1503', 'Madina, Accra, Ghana'] },
  { icon: Clock, label: 'Working Hours', lines: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 1:00 PM'] },
]

const serviceOptions = [
  'Textbooks & Reading Materials',
  'Stationery & Office Supplies',
  'School Uniforms',
  'Sportswear & Jerseys',
  'Printing & Printables',
  'Examination Materials',
  'General School Supplies',
  'Multiple Services',
]

const emptyForm = { name: '', institution: '', email: '', phone: '', service: '', message: '' }

export default function Contact() {
  const [searchParams] = useSearchParams()
  const requestedService = searchParams.get('service')
  const [form, setForm] = useState(() => ({
    ...emptyForm,
    service: serviceOptions.includes(requestedService) ? requestedService : '',
  }))
  const [status, setStatus] = useState('idle') // idle | sending | email | whatsapp | error
  const [error, setError] = useState('')

  const update = (field) => (e) => setForm((current) => ({ ...current, [field]: e.target.value }))

  const labelled = {
    Name: form.name,
    Institution: form.institution,
    Email: form.email,
    Phone: form.phone,
    Service: form.service,
  }
  const whatsappText = `Hello GCB, I would like to request a quote.\n\n${formatFields(labelled)}\n\n${form.message.trim()}`

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const sentBy = await submitForm({
        subject: `Quote request from ${form.name}${form.institution ? ` (${form.institution})` : ''}`,
        fields: { ...labelled, Message: form.message },
        whatsappText,
      })
      setStatus(sentBy)
      if (sentBy === 'email') setForm(emptyForm)
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

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

            <a
              href={whatsappLink('Hello GCB, I would like to make an enquiry.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn mt-10 bg-[#25D366] text-white hover:bg-[#1ebe5b]"
            >
              <WhatsAppIcon size={18} />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 bg-white p-8 sm:p-10"
          >
            <h3 className="text-2xl font-medium text-ink">Request a Quote</h3>
            <p className="mt-2 mb-8 text-sm">
              Tell us what your institution needs and we&apos;ll get back to you shortly.
            </p>

            {status === 'email' ? (
              <div role="status" className="rounded-lg bg-blush p-6 text-center">
                <CircleCheck size={40} className="mx-auto text-brand" />
                <p className="mt-3 font-heading text-lg font-medium text-ink">Thank you, your request has been sent.</p>
                <p className="mt-2 text-sm">Our team will contact you shortly with your quote.</p>
                <button type="button" onClick={() => setStatus('idle')} className="btn btn-primary mt-6">
                  Send another request
                </button>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block font-heading text-sm text-ink mb-2">Full Name *</span>
                    <input type="text" required value={form.name} onChange={update('name')} placeholder="Your full name" className="field" />
                  </label>
                  <label className="block">
                    <span className="block font-heading text-sm text-ink mb-2">Institution</span>
                    <input type="text" value={form.institution} onChange={update('institution')} placeholder="Your institution name" className="field" />
                  </label>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <label className="block">
                    <span className="block font-heading text-sm text-ink mb-2">Email</span>
                    <input type="email" value={form.email} onChange={update('email')} placeholder="your@email.com" className="field" />
                  </label>
                  <label className="block">
                    <span className="block font-heading text-sm text-ink mb-2">Phone *</span>
                    <input type="tel" required value={form.phone} onChange={update('phone')} placeholder="+233 XX XXX XXXX" className="field" />
                  </label>
                </div>

                <label className="block">
                  <span className="block font-heading text-sm text-ink mb-2">Service Needed</span>
                  <select value={form.service} onChange={update('service')} className="field">
                    <option value="">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option}>{option}</option>
                    ))}
                  </select>
                </label>

                <label className="block">
                  <span className="block font-heading text-sm text-ink mb-2">What do you need? *</span>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={update('message')}
                    placeholder="List the items, quantities and any specifications..."
                    className="field resize-none"
                  />
                </label>

                {status === 'error' && (
                  <p role="alert" className="flex items-start gap-2 text-sm text-brand">
                    <CircleAlert size={18} className="flex-shrink-0 mt-0.5" />
                    <span>
                      Sorry, your request could not be sent ({error}). Please try again, or{' '}
                      <a href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer" className="underline">
                        send it on WhatsApp
                      </a>
                      .
                    </span>
                  </p>
                )}

                {status === 'whatsapp' && (
                  <p role="status" className="flex items-start gap-2 text-sm text-ink">
                    <CircleCheck size={18} className="flex-shrink-0 mt-0.5 text-[#25D366]" />
                    <span>
                      WhatsApp has opened with your request typed out — just press send there. If it didn&apos;t open,{' '}
                      <a href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer" className="underline">
                        tap here
                      </a>
                      .
                    </span>
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`btn ${emailEnabled ? 'btn-primary' : 'bg-[#25D366] text-white hover:bg-[#1ebe5b]'} disabled:opacity-60`}
                >
                  {!emailEnabled && <WhatsAppIcon size={18} />}
                  {status === 'sending' ? 'Sending…' : emailEnabled ? 'Send Request' : 'Send Request via WhatsApp'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
