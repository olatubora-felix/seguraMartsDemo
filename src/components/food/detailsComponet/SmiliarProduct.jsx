import { Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { getProductSubCat } from '../../../redux/allProduct/subcategoryService'
import Items from '../Items'

const FoodItem = ({ subCatId }) => {
  const dispatch = useDispatch()
  const similiarProducts = useSelector((state) => state.subcategory.productSubCat?.data)
  useEffect(() => {
    dispatch(getProductSubCat({ id: subCatId }))
  }, [dispatch, subCatId])
  return (
    <FoodContainer>
      <Container>
        <Grid container spacing={3}>
          {similiarProducts?.slice(0, 4).map((item) => (
            <Items item={item} key={item._id} />
          ))}
        </Grid>
      </Container>
    </FoodContainer>
  )
}

const FoodContainer = styled.div`
  background: #fafafa;
`

export default FoodItem
