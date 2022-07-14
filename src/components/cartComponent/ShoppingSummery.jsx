import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ShoppingSummery = ({ cartTotalAmount, cartItems }) => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.auth.user)

  const handleCheckout = () => {
    if (!user) {
      return navigate('/user/login')
    }

    return navigate('/checkout')
  }

  return (
    <div>
      <CartSummery>
        <CartSummerycontent>
          <CartSummeryTititle>ITEMS ({cartItems.length})</CartSummeryTititle>
          <Price>${cartTotalAmount}</Price>
        </CartSummerycontent>
        <CartSummerycontent>
          <CartSummeryTotal>
            <CartSummeryTititle>TOTAL</CartSummeryTititle>
            <Span>Not inclusive of delivery fee</Span>
          </CartSummeryTotal>
          <Price>${cartTotalAmount}</Price>
        </CartSummerycontent>
        <BtnContainer>
          <Button onClick={handleCheckout}>Proceed to Checkout</Button>
        </BtnContainer>
      </CartSummery>
    </div>
  )
}

const CartSummery = styled.div`
  margin-left: 16px;
  background: #ffffff;
  border-radius: 5px;
  width: 395px;
`
const CartSummerycontent = styled.div`
  display: flex;
`
const CartSummeryTititle = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  padding: 16px;
  flex: 1;
  padding: 16px;
`
const CartSummeryTotal = styled.div`
  flex: 1;
`
const Price = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  padding: 16px;
`
const Span = styled.h6`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: rgba(20, 20, 20, 0.6);
  margin: 5px 0px;
  padding: 16px;
`
const BtnContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Button = styled.button`
  background: #256ee4;
  border-radius: 5px;
  height: 53px;
  width: 219px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  padding: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default ShoppingSummery
