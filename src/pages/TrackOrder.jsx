import React, { Fragment } from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import Content from '../components/trackOrder/Content'

const TrackOrder = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default TrackOrder
