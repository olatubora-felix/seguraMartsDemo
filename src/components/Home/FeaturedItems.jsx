import React, { Fragment } from 'react'
import styled from 'styled-components'
import StyleLink from './../UI/StyleLink'
import { Paper } from '@mui/material'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { mobile } from '../../responsive'

const FeaturedItems = ({ topProduct }) => {
  const { _id, name, image, discount, price } = topProduct
  const totalDiscount = price - price / discount

  const save = price - totalDiscount
  function financial(x) {
    return Number.parseFloat(x).toFixed(2)
  }
  return (
    <Fragment>
      <StyleLink to={`/product/details/${_id}`}>
        <Paper elevation={3} style={{ position: 'relative' }}>
          <ImgContainer>
            <Img src={image} alt="Top product" />
          </ImgContainer>
          {discount === 0 ? '' : <Discount>-{discount}%</Discount>}

          <Box padding={1}>
            <Typography variant="body3" component="h3">
              {name}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" paddingBottom={3} paddingX={1}>
            <Box>
              {discount === 0 ? (
                <>
                  {' '}
                  <Typography variant="body4" component="span">
                    ${price}
                  </Typography>
                </>
              ) : (
                <Typography variant="body4" component="span">
                  ${financial(totalDiscount)}
                </Typography>
              )}

              {discount > 0 && (
                <Typography
                  variant="body4"
                  component="span"
                  color="#CCCCCC"
                  style={{ textDecoration: 'line-through' }}
                >
                  ${price}
                </Typography>
              )}
            </Box>

            {discount === 0 ? (
              ''
            ) : (
              <Typography variant="body5" component="h3" color="#256EE4" textAlign="end">
                Save ${financial(save)}
              </Typography>
            )}
          </Box>
        </Paper>
      </StyleLink>
    </Fragment>
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
  padding: 5px 8px;
  position: absolute;
  left: 5%;
  top: 10%;
`

export default FeaturedItems
