import React, { useEffect } from 'react'
import { Typography, Box } from '@mui/material'
// import { topProducts } from '../../data'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import { Swiper, SwiperSlide } from 'swiper/react'

// / import required modules
import { Navigation } from 'swiper'
import { useDispatch, useSelector } from 'react-redux'
import { getFeaturedProducts } from '../../redux/featured/featuredService'
import FeaturedItems from '../Home/FeaturedItems'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const TopProduct = () => {
  const dispatch = useDispatch()
  const featuredproducts = useSelector((state) => state.featured.featured?.data)
  // const loading = useSelector((state) => state.featured.loading)

  useEffect(() => {
    dispatch(getFeaturedProducts())
  }, [dispatch])

  return (
    <TopContainer>
      <Box padding={3}>
        <Typography variant="body2" component="h2">
          Top Selling Products
        </Typography>
      </Box>
      <Wrapper>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {featuredproducts?.map((topProduct) => (
            <SwiperSlide>
              <FeaturedItems topProduct={topProduct} key={topProduct._id} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </TopContainer>
  )
}

const TopContainer = styled.div`
  width: 100%;
  padding: 40px 0px;
  background: #f2f7ff;
`
const Wrapper = styled.div`
  position: relative;
  width: 90%;
  ${mobile({ width: '100%' })}
  margin: 0 auto;
`

export default TopProduct
