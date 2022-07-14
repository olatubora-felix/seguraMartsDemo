import { TextField } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../UI/Button'
import Password from './Password'
import googleImg from '../../images/google.svg'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/auth/authSlice'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const LoginForm = () => {
  const [values, setValues] = React.useState({
    password: '',
    email: '',
    showPassword: false,
  })

  // Call UseSelector
  const { user, isSuccess } = useSelector((state) => state.auth)

  // Destructure State
  const { email, password } = values

  // Handle Onchange
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  // Call Dispatch from redux libray
  const dispatch = useDispatch()

  const Navigate = useNavigate()

  // Handle Onsubmit
  const handleSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(login(userData))

    if (!user && !isSuccess) {
      toast.error('Incorrect Email or Password', {
        position: 'top-right',
        theme: 'colored',
      })
      return Navigate('/user/login')
    } else {
      toast.success('Login Successfull', {
        position: 'top-right',
        theme: 'colored',
      })
      return Navigate('/')
    }
  }
  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Email Address"
            variant="outlined"
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl>

        {/* Password */}
        <FormControl>
          <Password values={values} setValues={setValues} handleChange={handleChange} />
        </FormControl>
        <FormControl>
          <StyleLink to="/user/forgot_password">Forgot Password?</StyleLink>
        </FormControl>
        <FormControl>
          <Button>Login</Button>
        </FormControl>
        <FormControl>
          <Span>Or</Span>
        </FormControl>
        <FormControl>
          <Button oauth="oauth">
            <GoogleIcon src={googleImg} />
            Login with Google
          </Button>
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

const Span = styled.div`
  width: 100%;
  text-align: center;
`
const StyleLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  text-decoration: none;
`

const GoogleIcon = styled.img`
  margin-right: 16px;
`

export default LoginForm
