import React, { useEffect } from 'react'
import { Breadcrumbs, Container, Rating, Stack } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { FavoriteBorderOutlined } from '@mui/icons-material'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import ItemDetails from './detailsComponet/ItemDetails'
import SmiliarProduct from './detailsComponet/SmiliarProduct'
import { useDispatch, useSelector } from 'react-redux'
import { getProduct } from '../../redux/allProduct/productsService'
import { addToCart } from '../../redux/cartSlice'

const Details = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  const products = useSelector((state) => state.product.product?.data)
  const { cartTotalQuantity } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getProduct({ id }))
  }, [dispatch, id, cartTotalQuantity])

  // Add to cart
  const handleAddToCart = () => {
    dispatch(addToCart(products))
    // history.push("/cart");
  }

  return (
    <DetailsContainer>
      <Container>
        <Stack spacing={1}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            <StyledLink color="inherit" to="/">
              Home
            </StyledLink>
            ,<StyledLink to={`/food/`}>Food</StyledLink>,
            <StyledLink to={`/food/${products?.subcategory?._id}`}>
              {' '}
              {products?.subcategory?.name}
            </StyledLink>
            ,
            <StyledLink to={`/food/`} text="active">
              {products?.name}
            </StyledLink>
          </Breadcrumbs>
        </Stack>

        <DetailsContent>
          <DetailsContentImg>
            <Img src={products?.image} alt={products?.name} text="main" />
            <ImgContainer>
              <Img src={products?.image} />
              <Img src={products?.image} />
              <Img src={products?.image} />
            </ImgContainer>
          </DetailsContentImg>
          <DetailsContentText>
            <DetailsTitle>{products?.name}</DetailsTitle>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={4.5}
              readOnly
              size="small"
            />
            <DetailsSubTitle>Sellers: Funmi Stores, Frank Farms</DetailsSubTitle>
            <DetailsPara>
              a packaged cereal product formed from small toasted flakes of corn filled with
              nutrients.
            </DetailsPara>
            <DetailsPriceContainer>
              <DetailsPriceText text="design">${products?.price}</DetailsPriceText>
              <DetailsPriceText>₦ 45,765</DetailsPriceText>
              <DetailsPriceDiscount>-10% </DetailsPriceDiscount>
            </DetailsPriceContainer>
            <AddContainer>
              <Button onClick={handleAddToCart}>ADD TO CART</Button>
            </AddContainer>
            <Social>
              <SocialText>Share this Product:</SocialText>
              <FacebookIcon style={SocialIcon} />
              <TwitterIcon style={SocialIcon} text="marginRight" />
            </Social>
          </DetailsContentText>
          <FavoriteBorderOutlined />
        </DetailsContent>
        <ItemDetails />
      </Container>
      <SmiliarProduct subCatId={products?.subcategory?._id} />
      {/* <DryFood /> */}
    </DetailsContainer>
  )
}

const DetailsContainer = styled.div`
  background: #fafafa;
  padding: 30px 0px;
`

const DetailsContent = styled.div`
  display: flex;
  background: #fff;
  padding: 30px 20px;
  margin: 20px 0px;
`

const DetailsContentImg = styled.div`
  flex: 2;
  margin-right: 10px;
`

const DetailsContentText = styled.div`
  flex: 8;
  padding: 0px 20px;
`

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.text === 'active' ? '#256EE4' : '#B8B8B8')};
  text-decoration: none;
`

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 18px;
`

const Img = styled.img`
  height: ${(props) => (props.text === 'main' ? '340.76x' : '87.66px')};
  width: ${(props) => (props.text === 'main' ? '498px' : '145px')};
  border-radius: 5px;
`

const DetailsTitle = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 24px;
  align-items: center;
  color: #141414;
  margin: 8px 0px;
`

const DetailsSubTitle = styled.h5`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  text-align: justify;
  color: #141414;
  opacity: 0.6;
  margin: 8px 0px;
`
const DetailsPara = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
  color: #141414;
  margin: 8px 0px;
`
const DetailsPriceContainer = styled.div``
const DetailsPriceText = styled.span`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'design' ? 'bold' : '400')};
  font-size: 22px;
  line-height: 24px;
  letter-spacing: 0.0162em;
  color: ${(props) => (props.text === 'design' ? '#256EE4' : '#ccc')};
  text-decoration: ${(props) => (props.text === 'design' ? '' : 'line-through')};
  margin: 0px 8px;
`
const DetailsPriceDiscount = styled.span`
  padding: 10px;
  background: #c9ddff;
  border-radius: 5px;
  margin: 0px 23px;
  height: 22px;
  width: 52px;
`

const AddContainer = styled.div`
  margin-top: 50px;
`

const Button = styled.button`
  height: 53px;
  width: 442px;
  border-radius: 5px;
  background: #256ee4;
  border-radius: 5px;
  margin: 18px 0px;
  cursor: pointer;
  outline: none;
  border: none;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
`

const Social = styled.div`
  display: flex;
  align-items: center;
`
const SocialText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  text-align: justify;
  text-transform: uppercase;
  color: #141414;
  margin: 0px 8px;
`

const SocialIcon = {
  cursor: 'pointer',
  borderRadius: '10px',
  color: '#2d8aa1',
  marginRight: `${(props) => (props.text === 'marginRight' ? '' : '10px')}`,
}

export default Details
