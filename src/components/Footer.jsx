import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import libraryImage from '../assets/images/library.jpg'
import { submitForm } from '../lib/contact'

// lucide-react v1 dropped brand icons, so the social icons are inlined here
function BrandIcon({ size = 24, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  )
}

const Facebook = (props) => (
  <BrandIcon {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </BrandIcon>
)

const Twitter = (props) => (
  <BrandIcon {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </BrandIcon>
)

const Linkedin = (props) => (
  <BrandIcon {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </BrandIcon>
)

const Instagram = (props) => (
  <BrandIcon {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </BrandIcon>
)

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'How It Works', to: '/how-it-works' },
  { label: 'Client Records', to: '/clients' },
  { label: 'Contact Us', to: '/contact' },
]

const serviceLinks = [
  'Textbooks & Reading Materials',
  'Stationery & Office Supplies',
  'School Uniforms',
  'Sportswear & Jerseys',
  'Printing & Printables',
  'Examination Materials',
]

const year = new Date().getFullYear()

function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | sending | email | whatsapp | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      setStatus(
        await submitForm({
          subject: 'New newsletter subscriber',
          fields: { Email: email, Request: 'Please add me to the GCB newsletter.' },
          whatsappText: `Hello GCB, please add me to your newsletter.\n\nEmail: ${email}`,
        }),
      )
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          aria-label="Email address"
          className="field flex-1"
        />
        <button type="submit" disabled={status === 'sending'} className="btn btn-primary flex-shrink-0 disabled:opacity-60">
          {status === 'sending' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      <p role="status" className="mt-4 text-sm text-white/80 min-h-5">
        {status === 'email' && 'Thank you for subscribing!'}
        {status === 'whatsapp' && 'WhatsApp has opened with your request — just press send to subscribe.'}
        {status === 'error' && 'Sorry, something went wrong. Please try again.'}
      </p>
    </>
  )
}

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Section */}
      <div
        id="newsletter"
        className="photo-section py-20"
        style={{ backgroundImage: `url(${libraryImage})` }}
      >
        <div className="container-fluid text-center">
          <h3 className="text-2xl md:text-[2rem] font-semibold uppercase">Stay Updated with GCB</h3>
          <div className="mt-4 h-1 w-24 bg-brand mx-auto" />
          <p className="mt-6 max-w-xl mx-auto text-white/80 leading-relaxed">
            Subscribe to our newsletter for the latest educational resources, special offers, and procurement tips.
          </p>
          <NewsletterForm />
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-ink text-white">
        <div className="container-fluid py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 bg-brand flex items-center justify-center">
                <span className="font-heading text-white font-bold text-xl">G</span>
              </div>
              <div className="font-heading leading-tight">
                <span className="block font-bold text-lg tracking-wide">GCB</span>
                <span className="block text-[11px] text-white/60">Global Collections Books</span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Your trusted one-stop procurement partner for all educational needs. Simplifying school
              procurement across Ghana since 2006.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand transition-colors"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-white/60 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-medium text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link to="/services" className="text-white/60 hover:text-white transition-colors text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-medium text-lg mb-6">Contact Info</h4>
            <div className="space-y-4 text-white/60 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-brand mt-0.5 flex-shrink-0" />
                <span>P.O. Box MD 1503, Madina, Accra, Ghana</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-brand mt-0.5 flex-shrink-0" />
                <span>+233 275 286 178<br />+233 543 882 840</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-brand mt-0.5 flex-shrink-0" />
                <span className="break-all">gcollectionsbooks@yahoo.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container-fluid py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/50">
            <p>© {year} Global Collections Books &amp; Stationery. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
