import React from 'react'
import styled from 'styled-components'
import Header from '../../UI/HeaderComponents'
import { BsArrowLeft } from 'react-icons/bs'
import Card from './../../UI/CardComponent'
import Button from './../../UI/BtnSm'
import Semolina from '../../../images/semolina.svg'

const OrderDetail = () => {
  return (
    <Container>
      <Header>
        <Title>
          <BsArrowLeft style={{ marginRight: '2px' }} />
          Order Details{' '}
        </Title>
      </Header>
      <Card>
        <Text>Order ID: 123456 (2 Items)</Text>
        <Text text="subtext">Date Placed : 15th January, 2022</Text>
        <Status>
          Order Status: <Span>Ongoing</Span>{' '}
        </Status>
        <Content>
          <Item text="product">
            <Img src={Semolina} alt="Semolina" />
            <ItemInfo>
              <Text>Semolina</Text>
              <SubText text="lead">₦ 108, 260</SubText>
              <SubText>Seller: Sade Store</SubText>
              <SubText>QTY - 2</SubText>
            </ItemInfo>
          </Item>
          <Item>
            <BtnContainer>
              <Button>Buy Again</Button>
            </BtnContainer>
            <BtnContainer>
              <Button text="order">Cancel Order</Button>
            </BtnContainer>
          </Item>
        </Content>
        <OrderInfo>
          <Box>
            <Text>Payment Details</Text>
            <SubText>Total: ₦ 108, 260</SubText>
            <SubText>Delivery Fee: 1000</SubText>
            <SubText text="lead">Total: ₦ 109, 260</SubText>
          </Box>
          <Box>
            <Text>Payment Method</Text>
            <SubText text="lead">Pay on Delivery</SubText>
          </Box>
          <Box>
            <Text>Delivery Address</Text>
            <SubText text="lead">Tosin Oyegoke</SubText>
            <SubText>24 Jack Bauer street, Festac Town, Lagos, Nigeria.</SubText>
            <SubText>08033322211</SubText>
          </Box>
        </OrderInfo>
        <BtnContainer text="flex">
          <Button text="order">Track Order</Button>
        </BtnContainer>
      </Card>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  width: 100%;
`
const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 10px;
  cursor: pointer;
  margin: 0px 10px;
  display: flex;
  align-items: center;
  color: #256ee4;
`
const Text = styled.h3`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'subtext' ? '400' : '600')};
  font-size: ${(props) => (props.text === 'subtext' ? '16px' : '18px')};
  line-height: ${(props) => (props.text === 'subtext' ? '19px' : '24px')};
  color: #141414;
  margin: 10px;
  opacity: ${(props) => (props.text === 'subtext' ? '0.7' : '')};
`
const Status = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  opacity: 0.7;
  margin: 10px;
`
const Span = styled.span`
  width: 122px;
  background: #d0ffe4;
  border-radius: 8px;
  padding: 4px 16px;
`
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  border-bottom: 0.5px solid #cecece;
`
const Item = styled.div`
  display: ${(props) => (props.text ? 'flex' : '')};
`
const Img = styled.img``
const ItemInfo = styled.div``
const SubText = styled.h4`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #141414;
  margin: 10px;
  opacity: ${(props) => (props.text ? '' : '0.7')};
`
const BtnContainer = styled.div`
  margin: 16px 0px;
  display: ${(props) => (props.text === 'flex' ? 'flex' : '')};
  justify-content: flex-end;
  align-items: center;
`
const OrderInfo = styled.div`
  display: flex;
  justify-content: space-between;
`
const Box = styled.div``

export default OrderDetail
