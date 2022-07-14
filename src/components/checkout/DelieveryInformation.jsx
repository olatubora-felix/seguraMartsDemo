import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import FormComponent from './deliveryInform/FormComponent'

const DelieveryInformation = () => {
  const user = useSelector((state) => state.auth.user)
  return (
    <Container>
      <Header>
        <Title>DELIVERY INFORMATION</Title>
        <SubTitle>CHANGE ADDRESS</SubTitle>
      </Header>
      <Content>
        <Text>{user?.name}</Text>
        <Text text="style">24 Jack Bauer street, Festac Town, Lagos, Nigeria.</Text>
        <Text text="style">08033322211</Text>
      </Content>
      {/* <FormComponent /> */}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding: 0px 0px 20px 0px;
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

const SubTitle = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: justify;
  color: #256ee4;
  cursor: pointer;
`

const Content = styled.div`
  padding: 16px;
`
const Text = styled.h3`
  font-style: normal;
  font-weight: ${(props) => (props.text ? '400' : '500')};
  font-size: ${(props) => (props.text ? '14px' : '16px')};
  line-height: ${(props) => (props.text ? '17px' : '19px')};
  color: #141414;
  opacity: ${(props) => (props.text ? '0.7' : '')};
  margin-bottom: 12px;
`
export default DelieveryInformation
