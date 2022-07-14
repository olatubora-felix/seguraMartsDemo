import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'

const ForgotPasswordForm = () => {
  return (
    <FormContainer>
      <Form>
        <FormControl>
          <TextField fullWidth id="outlined-basic" label="Email Address" variant="outlined" />
        </FormControl>
        <FormControl>
          <Button>Reset Password</Button>
        </FormControl>
      </Form>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  margin: 30px 0px;
`

const Form = styled.form`
  margin: 20px 0px;
`

const FormControl = styled.div`
  margin-bottom: 20px;
  position: relative;
`

export default ForgotPasswordForm
