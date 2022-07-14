import React, { Fragment } from 'react'
import FreshDeal from '../components/categories/FreshDeal'
import TopCategory from '../components/categories/TopCategory'
import ProductBanner from '../components/latest product/ProductBanner'
import Heroes from '../components/layouts/Heroes'
import TopProduct from '../components/layouts/TopProduct'
import TopSellingProduct from '../components/layouts/TopSellingProduct'
import BannerComponent from '../components/layouts/BannerComponent'
import ComingSoon from '../components/layouts/ComingSoon'
import Subscribe from '../components/layouts/Subscribe'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <Heroes />
      <TopSellingProduct />
      <TopProduct />
      <TopCategory />
      <ProductBanner />
      <FreshDeal />
      <BannerComponent />
      <ComingSoon />
      <Subscribe />
      <Footer />
    </Fragment>
  )
}

export default Home
