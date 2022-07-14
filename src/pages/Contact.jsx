import React, { Fragment } from 'react'
import ContactHero from '../components/contact/ContactHero'
import ContactMessage from '../components/contact/ContactMessage'
import ComingSoon from '../components/layouts/ComingSoon'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

const Contact = () => {
  return (
    <Fragment>
      <Navbar />
      <ContactHero />
      <ContactMessage />
      <ComingSoon />
      <Footer />
    </Fragment>
  )
}

export default Contact
