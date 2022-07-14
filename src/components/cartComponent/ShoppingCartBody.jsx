import { Grid } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import ShoppingDetails from './ShoppingDetails'
import ShoppingSummery from './ShoppingSummery'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ShoppingCartBody = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)
  return (
    <div>
      <ProductDetailsContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={9} lg={9}>
            {cartItems.map((cart) => (
              <ShoppingDetails cart={cart} key={cart._id} />
            ))}
            <Button onClick={handleClick}>Continue Shopping</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <ShoppingSummery cartTotalAmount={cartTotalAmount} cartItems={cartItems} />
            <Stack>
              <AlertContainer>
                <Alert src="https://res.cloudinary.com/mobinet/image/upload/v1644989000/Group_xztryy.svg" />
              </AlertContainer>
              <AlertText>
                Please Note: Your checkout process would be complete after you Login or create an
                account on SeguraMart.
              </AlertText>
            </Stack>
          </Grid>
        </Grid>
      </ProductDetailsContainer>
    </div>
  )
}

const ProductDetailsContainer = styled.div`
  margin-top: 20px;
`

const Button = styled.button`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: rgba(20, 20, 20, 0.5);
  width: 189px;
  height: 53px;
  background: rgba(232, 232, 232, 0.55);
  border-radius: 5px;
  margin: 10px 0px;
  outline: none;
  border: none;
  cursor: pointer;
`

const Stack = styled.div`
  display: flex;
  width: 316px;
  height: 85px;
  background: #fff2dc;
  border: 1px solid #da850d;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 10px;
  margin: 18px 0px;
`

const AlertText = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  text-align: justify;
  color: #da850d;
  margin: 10px 0px;
  padding-bottom: 10px;
  width: 228px;
`

const AlertContainer = styled.div``
const Alert = styled.img`
  margin: 10px;
`

export default ShoppingCartBody
