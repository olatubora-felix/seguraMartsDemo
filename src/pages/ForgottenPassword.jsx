import React from 'react'
import styled from 'styled-components'
import LogoImg from '../images/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import LoginForm from '../components/forgotPassword/ForgotPasswordForm'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

const ForgottenPassword = () => {
  const navigate = useNavigate()
  return (
    <Forgot>
      <Goback onClick={() => navigate('/user/login')}>
        <ArrowBackIcon /> Go Back
      </Goback>
      <FormContent>
        <LogoContainer>
          <StyleLink to="/">
            <Logo src={LogoImg} />
          </StyleLink>
        </LogoContainer>
        <Title>Forgot Password?</Title>
        <SubTitle>
          Enter the email associated with your account and we’ll send an email with instructions to
          reset your password.
        </SubTitle>
        {/* Login Form Component */}
        <LoginForm />
        <Text>
          Remember password? <StyleLink to="/user/register">Log in</StyleLink>{' '}
        </Text>
      </FormContent>
    </Forgot>
  )
}

const Forgot = styled.div`
  padding: 30px 60px;
`

const Goback = styled.h2`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #141414;
  cursor: pointer;
`

const FormContent = styled.div`
  margin: 0 auto;
  width: 30%;
  padding: 60px 0px 0px 0px;
`

const LogoContainer = styled.div`
  text-align: center;
`

const Title = styled.h2`
  font-family: 'Gotham';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 29px;
  color: #141414;
  margin: 16px 0px;
  text-align: center;
`
const SubTitle = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 134.5%;
  text-align: center;
  color: #141414;
`

const Logo = styled.img`
  height: 48px;
  width: 195px;
  text-align: center;
`

const Text = styled.p`
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #141414;
  padding-bottom: 20px;
  text-align: center;
`

const StyleLink = styled(Link)`
  color: #256ee4;
  text-decoration: none;
`

export default ForgottenPassword
