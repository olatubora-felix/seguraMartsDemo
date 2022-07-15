import React from 'react'
import styled from 'styled-components'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import { Rating } from '@mui/material'
import { Link } from 'react-router-dom'

const List = ({ item }) => {
  const { _id, name, image, discount, price } = item
  const totalDiscount = price - price / discount

  const save = price - totalDiscount
  function financial(x) {
    return Number.parseFloat(x).toFixed(2)
  }
  return (
    <StyledLink to={`/product/details/${_id}`}>
      <ListContainer>
        <ListContent>
          <Img src={image} />
          <ListContentText>
            <ListContentTitle>{name}</ListContentTitle>
            <ListContentSubtitle text="price">${financial(price)}</ListContentSubtitle>
            {discount === 0 ? (
              ''
            ) : (
              <ListContentSubtitle text="save">${financial(save)}</ListContentSubtitle>
            )}
            <Box>
              <Rating
                name="half-rating-read"
                defaultValue={3.5}
                precision={3.5}
                readOnly
                style={{ marginRight: '8px' }}
              />
              <ListRating style={{ color: '#141414' }}>(3.5)</ListRating>
            </Box>
          </ListContentText>
        </ListContent>
        <FavoriteBorderOutlined />
      </ListContainer>
    </StyledLink>
  )
}

const ListContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`

const ListContent = styled.div`
  display: flex;
`
const Img = styled.img``
const ListContentText = styled.div`
  margin: 0px 50px;
`

const ListContentTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  align-items: center;
  color: #141414;
`
const ListContentSubtitle = styled.span`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.0162em;
  color: ${(props) => (props.text === 'price' ? '#256EE4' : '#ccc')};
  margin-left: ${(props) => (props.text === 'save' ? '16px' : '')};
  text-decoration: ${(props) => (props.text === 'save' ? 'line-through' : '')};
`
const Box = styled.div`
  display: flex;
  align-items: center;
`

const ListRating = styled.span``

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.text === 'active' ? '#256EE4' : '#B8B8B8')};
  text-decoration: none;
`

export default List
