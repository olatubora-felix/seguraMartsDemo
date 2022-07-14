import { Checkbox } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const PayOnDelivery = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Container>
      <Content>
        <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        <Text>Pay on Delivery</Text>
        <Ol>
          <Li>For Pay on Delivery, please make your payments before unboxing your package.</Li>
          <Li>Large items may arrive later than the expected day of delivery.</Li>
          <Li>Packages can only be returned if it has missing parts or is damaged on arrival.</Li>
        </Ol>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px;
  border-bottom: 0.5px solid #cecece;
`
const Content = styled.div``
const Text = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
  color: #141414;
`

const Ol = styled.ol`
  padding: 16px;
`

const Li = styled.li`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: justify;
  color: #141414;
  opacity: 0.6;
  margin: 10px 0px;
`

export default PayOnDelivery
