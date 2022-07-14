import React from 'react'
import styled from 'styled-components'
import CardPayment from './paymentOptions/CardPayment'

const PaymentOptions = () => {
  return (
    <Container>
      <Header>
        <Title>PAYMENT OPTIONS</Title>
      </Header>
      <CardPayment />
      <ButtonContainer>
        <Button disabled>Confirm Order</Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 20px 0px;
  margin: 30px 0px;
`

const Header = styled.div`
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5px solid #cecece;
`

const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #141414;
`

const ButtonContainer = styled.div`
  margin: 10px;
  padding-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`
const Button = styled.button`
  height: 53px;
  width: 391px;
  border-radius: 5px;
  padding: 8px, 40px, 8px, 40px;
  background: #256ee4;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  border: 0px;
  cursor: pointer;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export default PaymentOptions
