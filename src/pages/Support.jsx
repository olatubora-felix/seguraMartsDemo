import React, { Fragment } from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import Faqs from '../components/support/Faqs'
import HeroComponent from '../components/support/HeroComponent'
import Question from '../components/support/Question'

const Support = () => {
  return (
    <Fragment>
      <Navbar />
      <HeroComponent />
      <Faqs />
      <Question />
      <Footer />
    </Fragment>
  )
}

export default Support
