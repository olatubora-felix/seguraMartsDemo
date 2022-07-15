import React from 'react'
import { Box, Grid, Paper, Rating } from '@mui/material'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { mobile } from '../../responsive'

const Items = ({ item, id }) => {
  const { _id, name, image, discount, price, ratings } = item
  const totalDiscount = price - price / discount

  const save = price - totalDiscount
  function financial(x) {
    return Number.parseFloat(x).toFixed(2)
  }

  return (
    <Grid item xs={12} sm={12} md={4}>
      <StyledLink to={`/product/details/${_id}`}>
        <Paper elevation={3} style={{ position: 'relative' }}>
          <ImgContainer>
            <Img src={image} alt="Top product" />
          </ImgContainer>
          {discount === 0 ? '' : <Discount>-{discount}%</Discount>}
          <Box padding={2} display="flex">
            <Box flex="1">
              <GridTitle>{name}</GridTitle>
              <Box display="flex" paddingY={1}>
                <GridSubtitle text="style" style={{ marginRight: '8px' }}>
                  ${financial(price)}
                </GridSubtitle>
                {discount === 0 ? (
                  ''
                ) : (
                  <GridSubtitle text="discount">${financial(save)}</GridSubtitle>
                )}
              </Box>
              <Box display="flex">
                <Rating
                  name="half-rating-read"
                  defaultValue={3.5}
                  precision={3.5}
                  readOnly
                  style={{ marginRight: '8px' }}
                />
                <GridSubtitle style={{ color: '#141414' }}>({ratings})</GridSubtitle>
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

const GridTitle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #141414;
  flex: none;
  order: 0;
`

const GridSubtitle = styled.h5`
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
