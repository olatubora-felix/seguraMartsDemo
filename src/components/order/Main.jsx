import React, { useState } from 'react'
import styled from 'styled-components'
import CardComponent from '../UI/CardComponent'
import Header from '../UI/HeaderComponents'
import OnGoing from './OnGoing'
import Delivered from './Delivered'
import Cancelled from './Cancelled'

const Main = () => {
  const [toggle, setToggle] = useState('onGoing')

  const getColor = (name) => {
    const color = toggle === name ? '#256ee4' : '#B8B8B8'
    return color
  }

  return (
    <Container>
      <Header>
        <Title onClick={() => setToggle('onGoing')} style={{ color: getColor('onGoing') }}>
          Ongoing
        </Title>
        <Title onClick={() => setToggle('delivered')} style={{ color: getColor('delivered') }}>
          Delivered
        </Title>
        <Title onClick={() => setToggle('cancelled')} style={{ color: getColor('cancelled') }}>
          Cancelled
        </Title>
      </Header>
      <CardComponent>
        {toggle === 'onGoing' && <OnGoing />}
        {toggle === 'delivered' && <Delivered />}
        {toggle === 'cancelled' && <Cancelled />}
      </CardComponent>
    </Container>
  )
}

const Container = styled.div``
const Title = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 10px;
  cursor: pointer;
  margin: 0px 10px;
`

export default Main
