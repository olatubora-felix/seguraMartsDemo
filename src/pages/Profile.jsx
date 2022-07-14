import React, { Fragment } from 'react'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import Content from '../components/account/profile/Content'

const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <Content />
      <Footer />
    </Fragment>
  )
}

export default Profile
