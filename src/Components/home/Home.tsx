import React from 'react'
import ContactSection from './ContactSection'
import WhoAmI from './WhoAmI'
import HeroSection from './HeroSection'
import TechStack from './TechStack'
import FeatureSection from './FeatureSection'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <HeroSection />
      <WhoAmI />
      <TechStack />
      <FeatureSection />
      <ContactSection />
    </div>
  )
}
