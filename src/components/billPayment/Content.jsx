import { Container } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Sidebar from '../../components/layouts/Sidebar'
import Main from './Main'
import Heading from '../order/components/Heading'

const Content = () => {
  return (
    <Profile>
      <Container>
        <Heading title="Bill Payment" />
        <Grid>
          <Items>
            <Sidebar />
          </Items>
          <Items>
            <Main />
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
`
const Items = styled.div``

export default Content
