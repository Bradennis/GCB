import { useEffect } from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'

export default function Home() {
  useEffect(() => {
    document.title = 'GCB - Global Collections Books & Stationery | Simplifying School Procurement'
  }, [])

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Clients />
    </>
  )
}
