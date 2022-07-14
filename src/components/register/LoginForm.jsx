import { TextField } from '@mui/material'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../UI/Button'
import ConfirmPassword from './ConfirmPassword'
import CountrySelect from './CountryInput'
import Password from './Password'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { register } from './../../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
    country: '',
    showPassword: false,
    showPassword2: false,
    password2: '',
  })

  const { name, email, password, password2, country } = values

  // Handle Onchange
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { isSuccess, message } = useSelector((state) => state.auth)

  useEffect(() => {
    if (isSuccess) {
      toast.success(message)
      return navigate('/')
    }
  }, [message, isSuccess, navigate])

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        name,
        email,
        password,
        country,
      }

      dispatch(register(userData))
    }
  }
  return (
    <FormContainer>
      <Form autoComplete="off" onSubmit={onSubmit}>
        <FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={handleChange('name')}
            value={values.name}
          />
        </FormControl>
        <FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            onChange={handleChange('email')}
            value={values.email}
          />
        </FormControl>
        {/* Select Countries */}
        <FormControl>
          <CountrySelect handleChange={handleChange} country={values.country} />
        </FormControl>
        {/* Password */}
        <FormControl>
          <Password handleChange={handleChange} setValues={setValues} values={values} />
        </FormControl>
        {/*Confirm Password */}
        <FormControl>
          <ConfirmPassword handleChange={handleChange} setValues={setValues} values={values} />
        </FormControl>
        <FormControl>
          <Button>Signup</Button>
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

export default LoginForm
