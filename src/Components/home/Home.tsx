import React from 'react'
import ContactSection from './ContactSection'
import WhoAmI from './WhoAmI'
import HeroSection from './HeroSection'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <WhoAmI />
      <ContactSection />
    </div>
  )
}
