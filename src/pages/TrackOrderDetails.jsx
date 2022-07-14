import React, { Fragment } from 'react'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import Main from './../components/trackOrder/TrackOrderDetails'

const TrackOrderDetails = () => {
  return (
    <Fragment>
      <Navbar />
      <Main />
      <Footer />
    </Fragment>
  )
}

export default TrackOrderDetails
