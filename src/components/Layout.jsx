import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppIcon from './WhatsAppIcon'
import { whatsappLink } from '../lib/contact'

export default function Layout() {
  const { pathname } = useLocation()

  // Start each new page at the top, like a normal page load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />

      <a
        href={whatsappLink('Hello GCB, I would like to make an enquiry.')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with GCB on WhatsApp"
        title="Chat with us on WhatsApp"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#1ebe5b] hover:scale-105 transition"
      >
        <WhatsAppIcon size={30} />
      </a>
    </div>
  )
}
