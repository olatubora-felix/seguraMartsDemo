import { Checkbox, TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const PayLater = () => {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } }

  return (
    <Container>
      <Content>
        <Checkbox {...label} sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }} />
        <Text>Pay Later</Text>
        <SubText>
          Please fill in the account you want payments to be deducted from as at when due.
        </SubText>
        <ContentForm>
          <SubText>1. Personal Information</SubText>
          <FormControl>
            <TextField
              fullWidth
              id="outlined-basic"
              type="date"
              label="Set Payment Date"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <Wrapper>
            <SubText>2. Personal Information</SubText>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                style={{ marginRight: '10px' }}
              />
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
            </FormControl>
            <FormControl>
              <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
            </FormControl>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="State/Province"
                variant="outlined"
                style={{ marginRight: '10px' }}
              />
              <TextField id="outlined-basic" label="Country" variant="outlined" />
            </FormControl>
          </Wrapper>
          <Wrapper>
            <SubText>3. Fill in your card information.</SubText>
            <FormControl>
              <TextField
                id="outlined-basic"
                label="Full Name"
                variant="outlined"
                style={{ marginRight: '10px' }}
              />
              <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
            </FormControl>
            <FormControl>
              <TextField
                fullWidth
                id="outlined-basic"
                label="CVV"
                variant="outlined"
                style={{ marginRight: '10px' }}
              />
              <TextField fullWidth id="outlined-basic" label="Expiry Date" variant="outlined" />
            </FormControl>
          </Wrapper>
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

const Wrapper = styled.div`
  margin: 10px 0px;
`
const FormControl = styled.div`
  margin: 20px 0px;
  width: 60%;
  display: flex;
`

export default PayLater
