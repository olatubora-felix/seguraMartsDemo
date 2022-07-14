import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Semolina from '../../images/semolina.svg'
import Stepper from './Stepper'

const TrackOrderDetails = () => {
  return (
    <TrackOrder>
      <Container>
        <Content>
          <Title>Track your Order</Title>
          <OrderInfo>
            <Items>
              <Text>Order Information</Text>
              <SubText text="subtext">Order ID: 123456 (2 Items)</SubText>
              <SubText text="subtext">Date Placed : 15th January, 2022</SubText>
              <SubText text="subtext">
                Order Status: <Span>Ongoing</Span>
              </SubText>
              <Wrapper>
                <Img src={Semolina} />
                <Box>
                  <Text>Semolina</Text>
                  <Text text="text">₦ 108, 260</Text>
                  <SubText text="subtext">Seller: Sade Store</SubText>
                  <SubText text="subtext">QTY - 2</SubText>
                </Box>
              </Wrapper>
              <PaymentDetails>
                <Items text="items">
                  <SubText>Payment Details</SubText>
                  <SubText text="subtext">Total: ₦ 108, 260</SubText>
                  <SubText text="subtext">Delivery Fee: 1000</SubText>
                  <Text text="text">Total: ₦ 109, 260</Text>
                </Items>
                <Items text="items">
                  <SubText>Payment Method</SubText>
                  <Text text="text">Pay on Delivery</Text>
                </Items>
                <Items text="items">
                  <SubText>Delivery Address</SubText>
                  <Text text="text">Tosin Oyegoke</Text>
                  <SubText text="subtext">
                    24 Jack Bauer street, Festac Town, Lagos, Nigeria.
                  </SubText>
                  <SubText text="subtext">08033322211</SubText>
                </Items>
              </PaymentDetails>
            </Items>
            <StepperContainer>
              <Stepper />
            </StepperContainer>
          </OrderInfo>
        </Content>
      </Container>
    </TrackOrder>
  )
}

const TrackOrder = styled.div`
  background-color: #f1f1f1;
  padding: 30px 0px;
`
const Content = styled.div`
  background-color: #fff;
  margin: 20px;
  padding: 20px;
`

const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  color: #141414;
`

const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0px;
`

const Text = styled.h4`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'text' ? '400' : '600')};
  font-size: ${(props) => (props.text === 'text' ? '14px' : '20px')};
  line-height: ${(props) => (props.text === 'text' ? '17px' : '24px')};
  color: #141414;
  margin: 10px 0px;
`
const Img = styled.img``
const Items = styled.div`
  margin-right: ${(props) => (props.text === 'items' ? '30px' : '')};
`
const SubText = styled.h4`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'subtext' ? '400' : '600')};
  font-size: ${(props) => (props.text === 'subtext' ? '16px' : '18px')};
  line-height: ${(props) => (props.text === 'subtext' ? '19px' : '24px')};
  color: #141414;
  opacity: ${(props) => (props.text === 'subtext' ? '0.7' : '')};
  margin: 6px 0px;
`
const Span = styled.span`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #066d31;
  background: #d0ffe4;
  border-radius: 3px;
  padding: 4px 8px;
`
const Wrapper = styled.div`
  display: flex;
`
const Box = styled.div`
  margin: 0px 10px;
`
const PaymentDetails = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 16px 0px;
`
const StepperContainer = styled.div`
  background: #fafafa;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
`

export default TrackOrderDetails
