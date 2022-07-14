import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const CardPayment = () => {
  // const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Container>
      <Content>
        {/* <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} /> */}
        <Text>Card Payment</Text>
        <SubText>Fill in your card information.</SubText>
        <ContentForm>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Card Holder’s Name"
              variant="outlined"
              style={{ marginRight: '10px' }}
            />
            <TextField id="outlined-basic" label="Card Number" variant="outlined" />
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="CVV"
              variant="outlined"
              style={{ marginRight: '10px' }}
            />
            <TextField id="outlined-basic" label="Expiry Date" variant="outlined" />
          </FormControl>
        </ContentForm>
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
  color: #141414;
`

const SubText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: rgba(20, 20, 20, 0.7);
  padding: 10px;
`

const ContentForm = styled.div``
const FormControl = styled.div`
  margin: 20px 0px;
  width: 66%;
`

export default CardPayment
