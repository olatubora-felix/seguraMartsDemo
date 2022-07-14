import React, { useState } from 'react'
import styled from 'styled-components'
import MyProfile from '../Info/MyProfile'
import ChangePassword from './../Info/ChangePassword'
import ShippingAddress from './../Info/ShippingAddress'
import Header from '../../UI/HeaderComponents'
import CardComponent from '../../UI/CardComponent'

const Main = () => {
  const [toggle, setToggle] = useState('profile')
  const [address, setAddress] = useState(true)

  const style = {
    borderBottom: toggle === 'profile' ? '2px solid #256ee4' : '',
    color: toggle === 'profile' ? '2px solid #256ee4' : '',
  }

  return (
    <Container>
      <Header>
        <Title text="active" onClick={() => setToggle('profile')} style={style}>
          My Profile
        </Title>
        <Title
          onClick={() => setToggle('changePassword')}
          style={{ borderBottom: toggle === 'changePassword' ? '2px solid #256ee4' : '' }}
        >
          Change Password
        </Title>
        <Title
          onClick={() => setToggle('shippingAddress')}
          style={{ borderBottom: toggle === 'shippingAddress' ? '2px solid #256ee4' : '' }}
        >
          Shipping Address
        </Title>
      </Header>
      <CardComponent>
        <Text>Personal Details</Text>
        {toggle === 'profile' && <MyProfile />}
        {toggle === 'changePassword' && <ChangePassword />}
        {toggle === 'shippingAddress' && (
          <ShippingAddress setAddress={setAddress} address={address} />
        )}
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

const Text = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #141414;
  padding: 10px 20px;
`

export default Main
