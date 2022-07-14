import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'
import MarkEmailUnreadOutlinedIcon from '@mui/icons-material/MarkEmailUnreadOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined'
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined'
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined'
import { NavLink, useLocation } from 'react-router-dom'
import { Logout } from '@mui/icons-material'

const Sidebar = () => {
  const location = useLocation()
  const active = location.pathname

  const getColor = (pathname) => {
    if (active === pathname) {
      return '#256ee4'
    }
  }

  const getBackground = (pathname) => {
    if (active === pathname) {
      return '#fafafa'
    }
  }

  const getBorder = (pathname) => {
    if (active === pathname) {
      return '5px solid #256ee4'
    }
  }

  return (
    <Container>
      <ContentSidebar>
        <Box
          style={{
            background: getBackground('/account/profile'),
            borderRight: getBorder('/account/profile'),
          }}
        >
          <StyledLink
            to="/account/profile"
            style={{
              color: getColor('/account/profile'),
            }}
          >
            <PersonIcon style={{ marginRight: '10px' }} />
            Profile
          </StyledLink>
        </Box>
        <Box
          style={{
            background: getBackground('/account/order'),
            borderRight: getBorder('/account/order'),
          }}
        >
          <StyledLink
            to="/account/order"
            style={{
              color: getColor('/account/order'),
            }}
          >
            <Inventory2OutlinedIcon style={{ marginRight: '10px' }} />
            My Orders
          </StyledLink>
        </Box>
        <Box
          style={{
            background: getBackground('/account/myWishlist'),
            borderRight: getBorder('/account/myWishlist'),
          }}
        >
          <StyledLink
            to="/account/myWishlist"
            style={{
              color: getColor('/account/myWishlist'),
            }}
          >
            <FavoriteBorderRoundedIcon style={{ marginRight: '10px' }} />
            My Wishlist
          </StyledLink>
        </Box>
        <Box>
          <StyledLink to="/">
            <MarkEmailUnreadOutlinedIcon style={{ marginRight: '10px' }} />
            Message
          </StyledLink>
        </Box>
        <Box>
          <StyledLink to="/">
            <AccountBalanceWalletOutlinedIcon style={{ marginRight: '10px' }} />
            Wallet
          </StyledLink>
        </Box>
        <Box
          style={{
            background: getBackground('/account/bill_payment'),
            borderRight: getBorder('/account/bill_payment'),
          }}
        >
          <StyledLink
            to="/account/bill_payment"
            style={{
              color: getColor('/account/bill_payment'),
            }}
          >
            <CreditCardOutlinedIcon style={{ marginRight: '10px' }} />
            Bill payment
          </StyledLink>
        </Box>
        <Box>
          <StyledLink to="/">
            <SummarizeOutlinedIcon style={{ marginRight: '10px' }} />
            Settle Invoice
          </StyledLink>
        </Box>
      </ContentSidebar>
      <LogoutWrapper>
        <Logout />
        <Span>Logut</Span>
      </LogoutWrapper>
    </Container>
  )
}

const Container = styled.div`
  background: #ffffff;
  border-radius: 5px;
  width: 100%;
`
const ContentSidebar = styled.div`
  padding: 10px 0px 10px 10px;
`

const Box = styled.div`
  background: ${(props) => (props.text ? '#fafafa' : '')};
  padding: 10px 0px 10px 10px;
  margin: 20px 0px;
`

const StyledLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b8b8b8;
  &:active {
    color: #256ee4;
  }
`

const LogoutWrapper = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
`
const Span = styled.span``

export default Sidebar
