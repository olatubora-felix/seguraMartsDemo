import React from 'react'
import Grid from '../components/UI/Grid'
import styled from 'styled-components'
import LogoImg from '../images/logo.svg'
import img from '../images/register2.png'
import { Link } from 'react-router-dom'
import ResetPasswordForm from '../components/reset/ResetPasswordForm'

const ResetPassword = () => {
  return (
    <Grid>
      <FormContent>
        <LogoContainer>
          <StyleLink to="/">
            <Logo src={LogoImg} />
          </StyleLink>
        </LogoContainer>
        <Title>Reset Password</Title>
        <SubTitle>Enter a new password and continue shopping on SeguraMart</SubTitle>
        {/* Login Form Component */}
        <ResetPasswordForm />
        <StyleLink to="/user/login">Login</StyleLink>{' '}
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
  height: 100vh;
`
const Logo = styled.img`
  height: 48px;
  width: 195px;
  text-align: center;
`

const StyleLink = styled(Link)`
  color: #256ee4;
  text-decoration: none;
`

export default ResetPassword
