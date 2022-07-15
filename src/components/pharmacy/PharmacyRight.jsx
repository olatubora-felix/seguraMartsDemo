import { Grid } from '@mui/material'
import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { getProductSubCat } from '../../redux/allProduct/subcategoryService'
import Grids from '../ItemsComponent/Grids'
import List from '../ItemsComponent/List'

const PharmacyRight = ({ id }) => {
  // Get Current Location
  const location = useLocation()

  const subcart = location.pathname.split('/')[2]

  console.log(subcart)

  const [show, setShow] = useState('grid')
  const toggle = (value) => {
    setShow(value)
  }

  const { productSubCat } = useSelector((state) => state.subcategory)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getProductSubCat({ id }))
  }, [id, dispatch])

  return (
    <PharmacyContainer>
      <PharmacyHeader>
        <PharmacyTitle text="title">{subcart}</PharmacyTitle>
        <SwitchContainer>
          <PharmacyTitle>Switch view:</PharmacyTitle>
          <PharmacyImgIcon
            src="https://res.cloudinary.com/mobinet/image/upload/v1644327542/Group_11949_veig5g.svg"
            style={{ marginRight: '5px' }}
            onClick={() => toggle('grid')}
          />
          <PharmacyImgIcon
            src="https://res.cloudinary.com/mobinet/image/upload/v1644327655/format-list-bulleted_xdpk5v.svg"
            onClick={() => toggle('list')}
          />
        </SwitchContainer>
      </PharmacyHeader>
      <ItemContainer>
        {show === 'grid' && (
          <Grid container spacing={3}>
            {productSubCat?.map((item) => (
              <Grids key={item._id} item={item} />
            ))}
          </Grid>
        )}

        {show === 'list' && (
          <ListItems>
            {productSubCat?.map((item) => (
              <List key={item._id} item={item} />
            ))}
          </ListItems>
        )}
      </ItemContainer>
    </PharmacyContainer>
  )
}

const PharmacyContainer = styled.div``

const PharmacyHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px 0px;
`
const PharmacyTitle = styled.h4`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'title' ? '600' : 'normal')};
  font-size: ${(props) => (props.text === 'title' ? '24px' : '14px')};
  line-height: 24px;
  color: #141414;
  letter-spacing: 0.02em;
  margin: ${(props) => (props.text === 'title' ? '16px' : '5px')};
`
const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 10px;
`

const PharmacyImgIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`

const ItemContainer = styled.div`
  background: #ffffff;
  border-radius: 5px;
  padding: 30px 20px;
  margin-top: 10px;
`
const ListItems = styled.div``

export default PharmacyRight
