import React from 'react'
import { Box, Grid, Paper, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { mobile } from '../../responsive'

const Items = ({ item }) => {
  return (
    <Grid item xs={12} sm={12} md={3}>
      <StyledLink to={`/product/details/${item._id}`}>
        <Paper elevation={3} style={{ position: 'relative' }}>
          <ImgContainer>
            <Img src={item.image} alt="Top product" />
          </ImgContainer>
          <Discount>10%</Discount>
          <Box padding={2} display="flex">
            <Box flex="1">
              <FoodTitle>{item.name}</FoodTitle>
              <Box display="flex" paddingY={1}>
                <FoodSubtitle text="style" style={{ marginRight: '8px' }}>
                  ${item.price}
                </FoodSubtitle>
                <FoodSubtitle text="discount">60000</FoodSubtitle>
              </Box>
              <Box display="flex">
                <Rating
                  name="half-rating-read"
                  defaultValue={3}
                  precision={4}
                  readOnly
                  style={{ marginRight: '8px' }}
                />
                <FoodSubtitle style={{ color: '#141414' }}>{item.ratings}</FoodSubtitle>
              </Box>
            </Box>
            <Box>
              <FavoriteBorderOutlined />
            </Box>
          </Box>
        </Paper>
      </StyledLink>
    </Grid>
  )
}

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

const FoodTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #141414;
  flex: none;
  order: 0;
`

const FoodSubtitle = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0162em;
  text-decoration: ${(props) => (props.text === 'discount' ? 'line-through' : '')};
  color: ${(props) => (props.text === 'style' ? '#256EE4' : '#ccc')};
`

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.text === 'active' ? '#256EE4' : '#B8B8B8')};
  text-decoration: none;
`

export default Items
