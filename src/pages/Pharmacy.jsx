import React, { Fragment } from 'react'
import FoodBanner from '../components/food/FoodBanner'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import PharmacyCategory from '../components/pharmacy/category/PharmacyCategory'
import Syrups from '../components/pharmacy/category/Syrups'

const Pharmacy = () => {
  const img =
    'https://res.cloudinary.com/mobinet/image/upload/v1645258254/Rectangle_6258_tcvq11.svg'
  return (
    <Fragment>
      <Navbar />
      <PharmacyCategory />
      <FoodBanner img={img} />
      <Syrups />
      <Footer />
    </Fragment>
  )
}

export default Pharmacy
