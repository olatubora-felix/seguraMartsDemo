import { Box, Rating } from '@mui/material'
import React, { Fragment, useState } from 'react'
import styled from 'styled-components'
import Header from '../UI/HeaderComponents'
import Card from './../UI/CardComponent'
import StarIcon from '@mui/icons-material/Star'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import semolina from '../../images/semolina2.svg'
import EmptyWishlist from './EmptyWishlist'

const Main = () => {
  const [heartOutlined, setHeartOutlined] = useState(false)
  const value = 4.5
  const wishlist = false
  return (
    <Container>
      <Header>
        <Title>My Wishlist</Title>
      </Header>
      <Card>
        {wishlist ? (
          <Fragment>
            <WishListContainer>
              <Items text="flex">
                <Img src={semolina} alt="semo" />
                <Details>
                  <Text text="price">Semolina</Text>
                  <Text>
                    ₦ 54,130 <SubText>₦ 64,130</SubText>
                  </Text>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={value}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Span>(4.5)</Span>
                  </Box>
                </Details>
              </Items>
              <Items>
                {heartOutlined ? (
                  <AiFillHeart
                    fontSize={24}
                    color="#256EE4"
                    onClick={() => setHeartOutlined(!heartOutlined)}
                    cursor="pointer"
                  />
                ) : (
                  <AiOutlineHeart
                    fontSize={24}
                    onClick={() => setHeartOutlined(!heartOutlined)}
                    cursor="pointer"
                  />
                )}
              </Items>
            </WishListContainer>
            <WishListContainer>
              <Items text="flex">
                <Img src={semolina} alt="semo" />
                <Details>
                  <Text text="price">Semolina</Text>
                  <Text>
                    ₦ 54,130 <SubText>₦ 64,130</SubText>
                  </Text>

                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Rating
                      name="text-feedback"
                      value={value}
                      readOnly
                      precision={0.5}
                      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                    />
                    <Span>(4.5)</Span>
                  </Box>
                </Details>
              </Items>
              <Items>
                {heartOutlined ? (
                  <AiFillHeart
                    fontSize={24}
                    color="#256EE4"
                    onClick={() => setHeartOutlined(!heartOutlined)}
                    cursor="pointer"
                  />
                ) : (
                  <AiOutlineHeart
                    fontSize={24}
                    onClick={() => setHeartOutlined(!heartOutlined)}
                    cursor="pointer"
                  />
                )}
              </Items>
            </WishListContainer>
          </Fragment>
        ) : (
          <EmptyWishlist />
        )}
      </Card>
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
const WishListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 0.5px solid #cecece;
`
const Items = styled.div`
  display: ${(props) => (props.text ? 'flex' : '')};
`
const Img = styled.img`
  margin-right: 10px;
`
const Details = styled.div`
  width: 130px;
`
const Text = styled.h4`
  font-style: normal;
  font-weight: ${(props) => (props.text ? '600' : '700')};
  font-size: 18px ${(props) => (props.text ? '18px' : '14px')};
  line-height: 24px;
  color: ${(props) => (props.text ? '#141414' : '#256EE4')};
`
const SubText = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.0162em;
  text-decoration-line: line-through;
  color: #cccccc;
  display: inline;
`
const Span = styled.span`
  display: inline;
`

export default Main
