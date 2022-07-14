import React, { Fragment } from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import Content from '../components/wishlist/Content'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default Home
