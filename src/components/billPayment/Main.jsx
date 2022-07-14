import React, { useState } from 'react'
import styled from 'styled-components'
import Header from '../UI/HeaderComponents'
import CardComponent from '../UI/CardComponent'
import Television from './subscription/Television'
import Electricity from './subscription/Electricity'
import Internet from './subscription/Internet'

const Main = () => {
  const [toggle, setToggle] = useState('television')
  const [address, setAddress] = useState(true)

  const style = {
    borderBottom: toggle === 'television' ? '2px solid #256ee4' : '',
    color: toggle === 'television' ? '#256ee4' : '#B8B8B8',
  }

  return (
    <Container>
      <Header>
        <Title text="active" onClick={() => setToggle('television')} style={style}>
          Television
        </Title>
        <Title
          onClick={() => setToggle('electricity')}
          style={{
            borderBottom: toggle === 'electricity' ? '2px solid #256ee4' : '',
            color: toggle === 'electricity' ? '#256ee4' : '#B8B8B8',
          }}
        >
          Electricity
        </Title>
        <Title
          onClick={() => setToggle('internet')}
          style={{
            borderBottom: toggle === 'internet' ? '2px solid #256ee4' : '',
            color: toggle === 'internet' ? '#256ee4' : '#B8B8B8',
          }}
        >
          Internet
        </Title>
      </Header>
      <CardComponent>
        <Text>Select Biller</Text>
        {toggle === 'television' && <Television />}
        {toggle === 'electricity' && <Electricity />}
        {toggle === 'internet' && <Internet setAddress={setAddress} address={address} />}
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
  color: #b8b8b8;
`

const Text = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #141414;
  padding: 10px 20px;
`

export default Main
