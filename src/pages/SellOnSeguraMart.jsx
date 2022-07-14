import React, { Fragment } from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import Audience from '../components/SellOnSeguraMart/Audience'
import Banner from '../components/SellOnSeguraMart/Banner'
import GrowYourBusiness from '../components/SellOnSeguraMart/GrowYourBusiness'
import Sell from '../components/SellOnSeguraMart/Sell'

const SellOnSeguraMart = () => {
  return (
    <Fragment>
      <Navbar />
      <Banner />
      <Audience />
      <GrowYourBusiness />
      <Sell />
      <Footer />
    </Fragment>
  )
}

export default SellOnSeguraMart
