import React, { Fragment } from 'react'
import Details from '../components/food/Details'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'

const FoodDetail = () => {
  return (
    <Fragment>
      <Navbar />
      <Details />
      <Footer />
    </Fragment>
  )
}

export default FoodDetail
