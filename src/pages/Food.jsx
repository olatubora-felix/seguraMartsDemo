import React, { Fragment } from 'react'
import FoodBanner from '../components/food/FoodBanner'
import FoodSubCategory from '../components/food/FoodSubCategory'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

const Food = () => {
  // const img = 'https://res.cloudinary.com/mobinet/image/upload/v1644230585/Flier_n0wbel.svg'
  const img2 = 'https://res.cloudinary.com/mobinet/image/upload/v1644234516/Flier_1_iprkgm.svg'

  return (
    <Fragment>
      <Navbar />
      <FoodSubCategory />
      <FoodBanner img={img2} />
      <Footer />
    </Fragment>
  )
}

export default Food
