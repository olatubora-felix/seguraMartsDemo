import React, { useEffect } from 'react'
import Container from '@mui/material/Container'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link, useParams } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import styled from 'styled-components'
import PharmacyLeft from '../components/pharmacy/category/PharmacyLeft'
import PharmacyRight from '../components/pharmacy/PharmacyRight'
import Navbar from '../components/layouts/Navbar'
import Footer from '../components/layouts/Footer'
import { useDispatch } from 'react-redux'
import { getSubCategories } from './../redux/allProduct/subcategoryService'

const AllFoodItems = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getSubCategories())
  }, [dispatch])

  const breadcrumbs = [
    <StyledLink key="1" to="/">
      Home
    </StyledLink>,
    <StyledLink key="2" to={`/product/food/${id}`} text="active">
      Food
    </StyledLink>,
  ]
  return (
    <>
      <Navbar />
      <FoodContainer>
        <Container>
          <Stack spacing={1}>
            <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
              {breadcrumbs}
            </Breadcrumbs>
          </Stack>
          <Component>
            <Left>
              <PharmacyLeft />
            </Left>
            <Right>
              <PharmacyRight id={id} />
            </Right>
          </Component>
        </Container>
      </FoodContainer>
      <Footer />
    </>
  )
}

const FoodContainer = styled.div`
  background: #fafafa;
  padding: 30px 0px;
`

const Component = styled.div`
  padding: 60px 0px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`
  flex: 2;
  background: #ffffff;
  border-radius: 5px;
  margin-right: 30px;
`
const Right = styled.div`
  flex: 8;
`

const StyledLink = styled(Link)`
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.text === 'active' ? '#256EE4' : '#B8B8B8')};
  text-decoration: none;
`

export default AllFoodItems
