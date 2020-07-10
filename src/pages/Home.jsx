import React from 'react'
import Disclaimer from '../components/Disclaimer'
import Download from '../components/Download'
import Features from '../components/Features'
import Hero from '../components/Hero'
import Contact from '../components/Contact'
import HighlightLearn from '../components/HighlightLearn'
import HighlightWhat from '../components/HighlightWhat'
import { Divider } from '@material-ui/core'

export default function Home() {
  return (
    <React.Fragment>
      <Hero />

      <HighlightLearn />

      <Features />

      <HighlightWhat />

      <Disclaimer />

      {/* <About /> */}

      <Download />

      <Divider />

      <Contact />
    </React.Fragment>
  )
}
