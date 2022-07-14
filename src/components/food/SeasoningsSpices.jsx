import { Container, Grid } from '@mui/material'
import axios from 'axios'
import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import Items from './Items'

const FoodItem = () => {
  const [foods, setFoods] = useState([])

  useEffect(() => {
    const getDryFood = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/foods`)

        setFoods(res.data)
      } catch (err) {}
    }
    getDryFood()
  }, [])

  const Spices = 'Seasonings & Spices'
  const vegetable = 'Vegetables'
  return (
    <FoodContainer>
      <Container>
        {foods.map((foodItem, index) => (
          <Fragment key={index}>
            {foodItem.name === Spices || foodItem.name === vegetable ? (
              <Fragment key={foodItem.id}>
                <FoodContent>
                  <FoodText text="black">{foodItem.name}</FoodText>
                  <FoodText text="blue">
                    <StyledLink text="active" to={`/food/${foodItem.id}`}>
                      See All
                      <ArrowRightAltIcon size="small" />
                    </StyledLink>
                  </FoodText>
                </FoodContent>
                <Grid container spacing={3}>
                  {foodItem.groceries.slice(0, 4).map((item, index) => (
                    <Items item={item} key={index} id={foodItem.id} />
                  ))}
                </Grid>
              </Fragment>
            ) : null}
          </Fragment>
        ))}
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

export default FoodItem
