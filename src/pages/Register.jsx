import React from 'react'
import Grid from '../components/UI/Grid'
import styled from 'styled-components'
import LogoImg from '../images/logo.svg'
import img from '../images/register2.png'
import { Link } from 'react-router-dom'
import LoginForm from '../components/register/LoginForm'

const Register = () => {
  return (
    <Grid>
      <FormContent>
        <LogoContainer>
          <StyleLink to="/">
            <Logo src={LogoImg} />
          </StyleLink>
        </LogoContainer>
        <Title>Signup to SeguraMart</Title>
        <SubTitle>Create your account to begin an amazing experience</SubTitle>
        {/* Login Form Component */}
        <LoginForm />
        <Text>
          By signing up you accept our <Span>Terms and Conditions & Privacy policy</Span>{' '}
        </Text>
        <Text>
          Already have an account? <StyleLink to="/user/login">Login</StyleLink>{' '}
        </Text>
      </FormContent>
      <ImgContent></ImgContent>
    </Grid>
  )
}

const FormContent = styled.div`
  margin: 0 auto;
  width: 40%;
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
const ImgContent = styled.div`
  background: url(${img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
`
const Logo = styled.img`
  height: 48px;
  width: 195px;
  text-align: center;
`

const Text = styled.p`
  /* Bud/Typography/Body text 2 */
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #141414;
  padding-bottom: 20px;
`

const Span = styled.span`
  color: #256ee4;
`

const StyleLink = styled(Link)`
  color: #256ee4;
  text-decoration: none;
`

export default Register
