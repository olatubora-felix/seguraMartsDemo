import React, { Fragment } from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import Content from '../components/checkout/Content'

const Checkout = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default Checkout
