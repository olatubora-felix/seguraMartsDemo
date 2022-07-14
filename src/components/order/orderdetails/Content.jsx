import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../layouts/Sidebar'
import Heading from '../components/Heading'
import OrderDetail from './OrderDetail'

const Content = () => {
  return (
    <Profile>
      <Container>
        <Heading />
        <Grid>
          <Items>
            <Sidebar />
          </Items>
          <Items>
            <OrderDetail />
          </Items>
        </Grid>
      </Container>
    </Profile>
  )
}

const Profile = styled.div`
  background-color: #f1f1f1;
  padding: 30px 0px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: 256px 1fr;
  padding: 30px 0px;
  gap: 20px;
  height: 100vh;
`
const Items = styled.div``

export default Content
