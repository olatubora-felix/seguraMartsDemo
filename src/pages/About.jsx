import { Fragment } from 'react'
import Hero from '../components/about/Hero'
import MarketPlace from '../components/about/MarketPlace'
import OurTeam from '../components/about/OurTeam'
import Transaction from '../components/about/Transaction'
import WhatWeDo from '../components/about/WhatWeDo'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

const About = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero />
      <WhatWeDo />
      <MarketPlace />
      <Transaction />
      <OurTeam />
      <Footer />
    </Fragment>
  )
}

export default About
