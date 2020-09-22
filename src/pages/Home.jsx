import { Divider } from '@material-ui/core'
import React from 'react'
import Contact from '../components/Contact'
import Disclaimer from '../components/Disclaimer'
import Download from '../components/Download'
import FeatureHighlight from '../components/FeatureHighlight'
import Features from '../components/Features'
import Footer from '../components/Footer'
import Hero from '../components/Hero'

import img_learn from '../assets/highlight/learn.png'
import img_what from '../assets/highlight/what.png'

const payloadLearn = {
  id: 'learn',
  imgSrc: img_learn,
  direction: 'row',
}
const payloadWhat = {
  id: 'what',
  imgSrc: img_what,
  direction: 'row-reverse',
}

export default function Home() {
  return (
    <React.Fragment>
      <Hero />

      <FeatureHighlight payload={payloadLearn} />

      <Features />

      <FeatureHighlight payload={payloadWhat} />

      <Disclaimer />

      <Download />

      <Divider />

      <Contact />

      <Footer />
    </React.Fragment>
  )
}
