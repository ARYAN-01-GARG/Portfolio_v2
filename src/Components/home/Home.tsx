import React from 'react'
import Hero from './components/Hero'
import About from './components/About'

export default function Home() {
  return (
    <div className='min-h-screen'>
      <Hero />
      <About />
    </div>
  )
}
