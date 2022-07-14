import * as React from 'react'
import { Typography, Box, Paper, Container, Grid, Rating } from '@mui/material'
import styled from 'styled-components'
import { mobile } from '../../responsive'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import { useEffect } from 'react'
import { getProducts } from './../../redux/allProduct/productsService'
import { useDispatch, useSelector } from 'react-redux'
import StyleLink from '../UI/StyleLink'

const FreshDeal = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.product.products?.data)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  return (
    <TopContainer>
      <Box padding={3}>
        <Typography variant="body2" component="h2">
          Fresh Deals
        </Typography>
      </Box>
      <Wrapper>
        <Container>
          <Grid container spacing={3}>
            {products?.slice(0, 8).map((product) => (
              <Grid item xs={12} sm={12} md={3} key={product._id}>
                <StyleLink to={`/product/details/${product._id}`}>
                  <Paper elevation={3} style={{ position: 'relative' }}>
                    <ImgContainer>
                      <Img src={product.image} alt="Top product" />
                    </ImgContainer>
                    <Discount>5%</Discount>
                    <Box paddingY={1} display="flex">
                      <Box flex="1" paddingX={1}>
                        <Typography variant="body3" component="h3">
                          {product.name}
                        </Typography>
                        <Typography variant="body4" component="span" style={{ color: '#256EE4' }}>
                          ${product.price}
                        </Typography>
                        <Typography
                          variant="body4"
                          component="span"
                          style={{ color: '#CCCCCC', textDecoration: 'line-through' }}
                        >
                          $50000
                        </Typography>
                        <Box display="flex" margin="0px 8px">
                          <Rating name="read-only" fontSize="small" />
                          <Typography variant="body4" component="p" style={{ color: '#141414' }}>
                            (3.6)
                          </Typography>
                        </Box>
                      </Box>
                      <Box margin="0px 10px">
                        <FavoriteBorderOutlinedIcon />
                      </Box>
                    </Box>
                  </Paper>
                </StyleLink>
              </Grid>
            ))}
          </Grid>
        </Container>
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
`

const ImgContainer = styled.div`
  padding: 10px;
`

const Img = styled.img`
  width: 100%;
  ${mobile({ width: '100%', padding: '10px' })}
`

const Discount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #256ee4;
  margin: 0px 10px;
  bottom: 82.95%;
  background: #c9ddff;
  border-radius: 5px;
  padding: 8px 5px;
  position: absolute;
  left: 5%;
  top: 10%;
`
export default FreshDeal
