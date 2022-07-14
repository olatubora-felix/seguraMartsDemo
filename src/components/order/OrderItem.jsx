import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Semo from '../../images/semolina.svg'

const OrderItem = ({ order }) => {
  return (
    <Content>
      <Items>
        <Img src={Semo} alt="semo" />
        <List>
          <Title text="heading">Semolina</Title>
          <Title>Seller: {order.seller}</Title>
          <Title>Order ID: 123456</Title>
          <Title>QTY - 2</Title>
        </List>
      </Items>
      <Items>
        <LinkContainer>
          <StyleLink to={`/account/order/${order.id}`}>View Details</StyleLink>
        </LinkContainer>
      </Items>
    </Content>
  )
}

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  border-bottom: 0.5px solid #cecece;
  padding: 10px 0px;
`
const Items = styled.div`
  display: flex;
`
const Img = styled.img``
const List = styled.div`
  margin: 0px 16px;
`
const Title = styled.h3`
  font-style: normal;
  font-weight: ${(props) => (props.text ? '600' : '400')};
  font-size: ${(props) => (props.text ? '18px' : '14px')};
  line-height: 24px;
  color: #141414;
  opacity: ${(props) => (props.text ? '' : '0.7')};
`
const LinkContainer = styled.h3`
  align-self: center;
`

const StyleLink = styled(Link)`
  width: 189px;
  height: 53px;
  background: rgba(232, 232, 232, 0.55);
  border-radius: 5px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: rgba(20, 20, 20, 0.5);
`

export default OrderItem
