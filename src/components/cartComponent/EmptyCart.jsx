import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const EmptyCart = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <EmptyCartContainer>
      <Container>
        <EmptyCartContent>
          <Img src="https://res.cloudinary.com/mobinet/image/upload/v1645427475/Cart_ylbhj9.svg" />
          <EmptyCartTextContainer>
            <EmptyCartTitle>Your cart is Empty!</EmptyCartTitle>
            <EmptyCartSubTitle>Browse our categories for Best deals on Bud.</EmptyCartSubTitle>
            <EmptyCartButton onClick={handleClick}>Start Shopping</EmptyCartButton>
          </EmptyCartTextContainer>
        </EmptyCartContent>
      </Container>
    </EmptyCartContainer>
  )
}

const EmptyCartContainer = styled.div`
  padding: 30px 0px;
`

const EmptyCartContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Img = styled.img``

const EmptyCartTextContainer = styled.div`
  text-align: center;
`

const EmptyCartTitle = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #141414;
  margin: 10px 0px;
`
const EmptyCartSubTitle = styled.p`
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 24px;
  color: #141414;
  margin: 10px 0px;
`

const EmptyCartButton = styled.button`
  padding: 14px 51px;
  width: 206px;
  height: 53px;
  background: #256ee4;
  border-radius: 5px;
  margin: 21px 0px;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin: 0px 10px;
  cursor: pointer;
`

export default EmptyCart
