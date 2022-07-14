import React from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import ConfirmPassword from './ConfirmPassword'
import Password from './Password'

const ResetPasswordForm = () => {
  return (
    <FormContainer>
      <Form>
        {/* Password */}
        <FormControl>
          <Password />
        </FormControl>
        {/*Confirm Password */}
        <FormControl>
          <ConfirmPassword />
        </FormControl>
        <FormControl>
          <Button>Save & Continue</Button>
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
`

export default ResetPasswordForm
