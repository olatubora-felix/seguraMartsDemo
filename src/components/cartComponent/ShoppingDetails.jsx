import { Add, Remove } from '@mui/icons-material'
import { Typography, Grid } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'

import styled from 'styled-components'
import { addToCart, decreaseCart, removeFromCart } from '../../redux/cartSlice'

const ShoppingDetails = ({ cart }) => {
  const dispatch = useDispatch()
  // Add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(cart))
    // history.push("/cart");
  }

  // Decrease from cart
  const handleDecreaseCart = () => {
    dispatch(decreaseCart(cart))
    // history.push("/cart");
  }

  // Remove from cart
  const handleRemoveCart = () => {
    dispatch(removeFromCart(cart))
    // history.push("/cart");
  }

  return (
    <div>
      <CartDetails>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <Wrapper>
              <Img src={cart.image} />
              <TextDetails>
                <Span>Funmi Store</Span>
                <Subtitle>{cart.name}</Subtitle>
              </TextDetails>
            </Wrapper>
            <IconContainer>
              <IconContent onClick={handleRemoveCart}>
                <DeleteOutlineOutlinedIcon src="https://res.cloudinary.com/mobinet/image/upload/v1644849328/Component_43_hwpphn.svg" />
                <Typography variant="subtitle1" component="span" color="#141414">
                  Remove Item
                </Typography>
              </IconContent>
              <IconContent>
                <DeleteOutlineOutlinedIcon src="https://res.cloudinary.com/mobinet/image/upload/v1644851089/Vector_pfhnce.svg" />
                <Typography variant="subtitle1" component="span" color="#141414">
                  Add to Wishlist
                </Typography>
              </IconContent>
            </IconContainer>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <ShoppingPrice>
              <ShoppingPriceText>${cart.price}</ShoppingPriceText>
              <ShoppingPriceQuantity>
                <Remove style={icon} onClick={handleDecreaseCart} />
                <QuantityText>{cart.cartQuantity}</QuantityText>
                <Add style={icon} onClick={handleAddToCart} />
              </ShoppingPriceQuantity>
              <ShoppingPriceText>${cart.price * cart.cartQuantity}</ShoppingPriceText>
            </ShoppingPrice>
          </Grid>
        </Grid>
      </CartDetails>
    </div>
  )
}

const CartDetails = styled.div`
  border-bottom: 1px solid #cecece;
  background: #ffffff;
`
const Img = styled.img`
  height: 64px;
  width: 108px;
  border-radius: 5px;
  margin: 0px 9px;
`
const Span = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #141414;
  opacity: 0.7;
  margin: 5px 0px;
`
const Subtitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  margin: 5px 0px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 0px 10px 0px;
`
const TextDetails = styled.div``

const IconContainer = styled.div`
  display: flex;
  align-items: center;
`

const IconContent = styled.div`
  margin: 16px 16px 16px 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
`

const DeleteOutlineOutlinedIcon = styled.img`
  margin-right: 5px;
`

const ShoppingPrice = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  padding: 16px;
  margin: 30px 10px 10px 0px;
`

const icon = {
  cursor: 'pointer',
  height: '24px',
  width: '24px',
  border: '2px solid #141414',
  borderRadius: '5px',
  margin: '0px 12px',
}

const QuantityText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
`

const ShoppingPriceQuantity = styled.h5`
  display: flex;
  align-items: center;
  margin-right: 16px;
`

const ShoppingPriceText = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  margin-right: 16px;
`

export default ShoppingDetails
