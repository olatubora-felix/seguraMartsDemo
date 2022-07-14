import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import DelieveryInformation from './DelieveryInformation'
import PaymentOptions from './PaymentOptions'
import OrderSummary from './OrderSummary'

const Content = () => {
  return (
    <Checkout>
      <Container>
        <Title>Checkout</Title>
        <Grid>
          <Items>
            <DelieveryInformation />
            <PaymentOptions />
          </Items>
          <Items>
            <OrderSummary />
          </Items>
        </Grid>
      </Container>
    </Checkout>
  )
}

const Checkout = styled.div`
  background-color: #f1f1f1;
  padding: 30px 0px;
`

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #000000;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 300px;
  margin: 20px 0px;
  gap: 60px;
`

const Items = styled.div``

export default Content
