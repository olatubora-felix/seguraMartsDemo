import { Checkbox } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const PayFromWalletBalance = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Container>
      <Content>
        <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        <Text>Pay from Wallet Balance</Text>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
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

export default PayFromWalletBalance
