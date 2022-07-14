import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
// import itemImg from '../../images/semolina.svg'
import { useSelector } from 'react-redux'

const OrderSummary = () => {
  const Navigate = useNavigate()
  const { cartItems, cartTotalAmount } = useSelector((state) => state.cart)
  const discut = cartItems.filter((item) => {
    return item.shippingPrice === 30
  })

  console.log(discut)
  return (
    <Container>
      <Header>
        <Title>ORDER SUMMARY </Title>
      </Header>
      <Content>
        {cartItems.map((order) => (
          <Items>
            <Img src={order.image} alt={order.name} />
            <ItemsSummary>
              <Text>Seller: Sade Store</Text>
              <Text text="title">{order.name}</Text>
              <Text>{order.proce}</Text>
              <Text>Size: 38</Text>
              <Text>QTY: {order.cartQuantity}</Text>
            </ItemsSummary>
          </Items>
        ))}
      </Content>
      <Content text="price">
        <Price>
          <Text text="title">Sub-Total</Text>
          <Text text="title">${cartTotalAmount}</Text>
        </Price>
        <Price>
          <Text text="title">Delivery Fee</Text>
          <Text text="title">₦ 1,000</Text>
        </Price>
        <Price>
          <Total>TOTAL</Total>
          <Text text="title">₦ 109, 260</Text>
        </Price>
      </Content>
      <ButtonContainer>
        <Button onClick={() => Navigate('/cart')}>EDIT ORDER</Button>
      </ButtonContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background-color: #fff;
`
const Header = styled.div`
  border-bottom: 1px solid #c1c1c1;
  padding: 20px;
  text-align: center;
`
const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  /* identical to box height */
  color: #141414;
`
const Content = styled.div`
  padding: 20px;
  border-bottom: ${(props) => props.text !== 'price' && '1px solid #c1c1c1'};
`
const Items = styled.div`
  display: flex;
`
const Img = styled.img`
  margin-right: 10px;
  width: 108px;
`
const ItemsSummary = styled.div``
const Total = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #141414;
  margin: 8px 0px;
`
const Text = styled.h4`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'title' ? '500' : '400')};
  font-size: ${(props) => (props.text === 'title' ? '16px' : '12px')};
  line-height: 14px;
  color: #141414;
  opacity: ${(props) => props.text !== 'title' && '0.7'};
  margin: 8px 0px;
`

const Price = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ButtonContainer = styled.div`
  padding: 16px;
  width: 100%;
  text-align: center;
`
const Button = styled.button`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #256ee4;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`

export default OrderSummary
