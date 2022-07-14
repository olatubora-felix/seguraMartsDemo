import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import BtnSm from '../../UI/BtnSm'

const ChangePassword = () => {
  return (
    <Container>
      <FormControl>
        <TextField id="outlined-basic" label="Your Password" variant="outlined" />
      </FormControl>
      <FormControl>
        <TextField
          id="outlined-basic"
          label="Your Password"
          variant="outlined"
          style={{ marginRight: '20px' }}
        />
        <TextField id="outlined-basic" label="Your Password" variant="outlined" />
      </FormControl>
      <BtnContainer>
        <BtnSm>Save Changes</BtnSm>
      </BtnContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`
const FormControl = styled.div`
  margin: 20px 0px;
`
const BtnContainer = styled.div``

export default ChangePassword
