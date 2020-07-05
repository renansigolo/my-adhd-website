import React from 'react'
import Disclaimer from '../components/Disclaimer'
import Download from '../components/Download'
import Features from '../components/Features'
import Hero from '../components/Hero'
import HighlightLearn from '../components/HighlightLearn'
import HighlightWhat from '../components/HighlightWhat'

export default function About() {
  return (
    <React.Fragment>
      <Hero />

      <HighlightLearn />

      <Features />

      <HighlightWhat />

      <Disclaimer />

      <Download />

      {/* <About /> */}

      {/* <Contact /> */}
    </React.Fragment>
  )
}
