import React from 'react'
import EmptyIcon from '../../images/emptyWishlist.svg'
import Button from '../UI/BtnSm'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const EmptyWishlist = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/food')
  }
  return (
    <Container>
      <Img src={EmptyIcon} />
      <Text>No Items in Wishlist!</Text>
      <Text text="subtext">Start shopping to get the best deals on SeguraMart</Text>
      <BtnContainer>
        <Button onClick={handleClick}>Start Shopping</Button>
      </BtnContainer>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 595px;
`
const Img = styled.img`
  height: 144px;
  width: 158px;
`
const Text = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: ${(props) => (props.text ? '16px' : '18px')};
  line-height: 24px;
  color: ${(props) => (props.text ? '#828282' : '#141414')};
  margin: 16px;
`
const BtnContainer = styled.div``

export default EmptyWishlist
