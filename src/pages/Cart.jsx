import { Container } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import EmptyCart from '../components/cartComponent/EmptyCart'
import ShoppingCartBody from '../components/cartComponent/ShoppingCartBody'
import ShoppingCartHeader from '../components/cartComponent/ShoppingCartHeader'
import Footer from '../components/layouts/Footer'
import Navbar from '../components/layouts/Navbar'
import { getTotals } from '../redux/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotals())
  }, [cart, dispatch])

  console.log(cart)
  return (
    <>
      <Navbar />
      <CartContainer>
        <Container>
          <CartTitle>Shopping Cart</CartTitle>
          {cart.length === 0 ? (
            <>
              <EmptyCart />
            </>
          ) : (
            <>
              {' '}
              <ShoppingCartHeader />
              <ShoppingCartBody />
            </>
          )}
        </Container>
      </CartContainer>
      <Footer />
    </>
  )
}

const CartContainer = styled.div`
  padding: 30px 0px;
  background: #fafafa;
`

const CartTitle = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
`

export default Cart
