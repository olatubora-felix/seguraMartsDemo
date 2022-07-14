import { Breadcrumbs, Container, Grid, Paper, Stack } from '@mui/material'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSubCategories } from '../../../redux/allProduct/subcategoryService'
import { getProducts } from '../../../redux/allProduct/productsService'
import Items from '../../food/Items'

const PharmacyCategory = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const subcategories = useSelector((state) => state.subcategory.subcategories?.data)
  const products = useSelector((state) => state.product.products?.data)

  useEffect(() => {
    dispatch(getSubCategories())
    dispatch(getProducts())
  }, [dispatch])
  const breadcrumbs = [
    <StyledLink key="1" to="/">
      Home
    </StyledLink>,
    <StyledLink key="2" to="/food" text="active">
      Food
    </StyledLink>,
  ]

  return (
    <FoodContainer>
      <Container>
        <Stack spacing={1}>
          <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
            {breadcrumbs}
          </Breadcrumbs>
        </Stack>
        <Paper style={{ margin: '20px 0px', background: 'none', boxShadow: 'none' }}>
          <FoodImg
            src="https://res.cloudinary.com/mobinet/image/upload/v1644052554/Frame_43695_euv6eh.svg"
            alt="Food Banner"
            style={{ width: '100%' }}
          />
        </Paper>
        {subcategories?.map((subcategory, index) => {
          return (
            subcategory.category?._id === id && (
              <Fragment key={index}>
                <Fragment key={subcategory._id}>
                  <FoodContent>
                    <FoodText text="black">{subcategory.name}</FoodText>
                    <FoodText text="blue">
                      <StyledLink
                        text="active"
                        to={`/${subcategory.category?.name}/${subcategory._id}`}
                      >
                        See All
                        <ArrowRightAltIcon size="small" />
                      </StyledLink>
                    </FoodText>
                  </FoodContent>
                  <Grid container spacing={3}>
                    {products?.map((product) => {
                      return (
                        product.subcategory._id === subcategory._id && (
                          <Items item={product} key={product._id} />
                        )
                      )
                    })}
                  </Grid>
                </Fragment>
              </Fragment>
            )
          )
        })}
      </Container>
    </FoodContainer>
  )
}

const FoodContainer = styled.div`
  background: #fafafa;
`

const FoodContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 0px 18px 0px;
`
const FoodText = styled.span`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'black' ? '600' : 'normal')};
  font-size: ${(props) => (props.text === 'black' ? '24px' : '16px')};
  line-height: ${(props) => (props.text === 'black' ? '29px' : '19px')};
  color: ${(props) => (props.text === 'black' ? '#141414' : '#256EE4')};
  padding: 20px 0px;
`

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.text === 'active' ? '#256EE4' : '#B8B8B8')};
  text-decoration: none;
  display: flex;
  align-items: center;
`

const FoodImg = styled.img``

export default PharmacyCategory
