import { Container, Grid, Box, Paper, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components'
// import { mobile } from '../../responsive';
import ContentImg1 from '../../images/unsplash_8RaUEd8zD-U.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getcategories } from './../../redux/allProduct/categoryService'
import { useSelector } from 'react-redux'
import StyleLink from './../UI/StyleLink'

const ProductBanner = () => {
  const categories = useSelector((state) => state.category.categories)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getcategories())
  }, [dispatch])
  return (
    <ProductBannerContainer>
      <Container>
        <Paper elevation={0} style={{ maxHeight: '345px', background: 'none' }}>
          <img
            src="https://res.cloudinary.com/mobinet/image/upload/v1643710383/Flier_zo520n.svg"
            alt="banner"
            width="100%"
            style={{ height: '100%' }}
          />
        </Paper>
        <Box paddingY={5}>
          <Grid container spacing={3}>
            {categories?.map((category) => (
              <Grid item xs={12} sm={12} md={6} key={category._id}>
                <StyleLink to={`/product/${category.name}/${category._id}`}>
                  <Content>
                    <Box padding={5}>
                      <Typography variant="subtitle1" color="#fff" component="span">
                        {category.name}
                      </Typography>
                      <Typography variant="h2" color="#fff" component="h2">
                        Groceries at the cheapest Rates
                      </Typography>
                      <Links to={`/product/${category.name}/${category._id}`}>Shop Now</Links>
                    </Box>
                  </Content>
                </StyleLink>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </ProductBannerContainer>
  )
}

const ProductBannerContainer = styled.div`
  background-color: rgba(229, 229, 229, 0.9);
  padding: 30px 0;
`

const Content = styled.div`
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 58.56%),
    url(${ContentImg1});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 263px;
`

const Links = styled(Link)`
  padding: 8px 16px;
  background: #ffffff;
  border-radius: 5.60932px;
  margin: 18px 0px;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  color: #256ee4;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background-color: #256ee4;
    color: #fff;
    transition: all 0.5ms ease-in-out;
  }
`

export default ProductBanner
