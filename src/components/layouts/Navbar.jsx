import styled from 'styled-components'
import Logo from '../../images/logo.svg'
import { Search, ShoppingCart, ArrowDropDown } from '@mui/icons-material'
import { mobile } from '../../responsive'
import MenuIcon from '@mui/icons-material/Menu'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import NavModal from './Modal'
import { Badge } from '@mui/material'
import UserLoggedIn from './UserLoggedIn'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  const { cartTotalQuantity } = useSelector((state) => state.cart)
  const { user } = useSelector((state) => state.auth)

  return (
    <>
      <TopNav>
        <Container>
          <Wrapper>
            <Left>
              <LogoIconContainer>
                <MenuIconContainer>
                  <MenuIcon />
                </MenuIconContainer>
                <LogoImg src={Logo} />
              </LogoIconContainer>
            </Left>
            <Center>
              <SearchIconContainer>
                <Search style={{ color: '#E0E0E0', flex: '2' }} />
                <SearchInput placeholder="Search for products and Categories" />
              </SearchIconContainer>
            </Center>
            <Right>
              <CartContainer>
                <CartText>Cart</CartText>
                <UserContainer>
                  <PersonOutlineIcon style={{ color: 'rgba(20, 20, 20, 0.5)' }} />
                </UserContainer>
                <StyledLink to="/cart">
                  <Badge color="secondary" badgeContent={cartTotalQuantity}>
                    <ShoppingCart style={{ color: 'rgba(20, 20, 20, 0.5)' }} />
                  </Badge>
                </StyledLink>
              </CartContainer>
              {user ? (
                <UserLoggedIn user={user} />
              ) : (
                <ButtonContainer>
                  <NavButton to="/user/login" color="primary">
                    Login
                  </NavButton>
                  <NavButton to="/user/register">Signup</NavButton>
                </ButtonContainer>
              )}
            </Right>
          </Wrapper>
          <FullSearchContainer>
            <Search style={{ color: '#E0E0E0' }} />
            <SearchInput placeholder="Search for products, Brand and Categories" />
          </FullSearchContainer>
        </Container>
      </TopNav>
      <NavContainer>
        <NavItem>
          <NavList>
            <StyledLink to="/" active="home">
              Home
            </StyledLink>
          </NavList>
          <NavList style={{ display: 'flex', justifyContent: 'center' }} onClick={handleOpen}>
            <Span to="/support" active="categories">
              All Categories
            </Span>
            <ArrowDropDown />
          </NavList>
          <NavList>
            <StyledLink to="/sellonseguramart" active="sell">
              Sell on SeguraMart
            </StyledLink>
          </NavList>
          <NavList>
            <StyledLink to="/about" active="about">
              About Us
            </StyledLink>
          </NavList>
          <NavList>
            <StyledLink to="/support">Support</StyledLink>
          </NavList>
          <NavList>
            <StyledLink to="/track_order">Track Order</StyledLink>
          </NavList>
          <NavModal open={open} handleClose={handleClose} />
        </NavItem>
      </NavContainer>
    </>
  )
}

const TopNav = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #fff;
  padding-top: 1rem;
  border-bottom: 1px solid #e0e0e0;
  ${mobile({ height: '5rem' })}
`

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  ${mobile({ width: '100%' })}
`

const FullSearchContainer = styled.div`
  display: none;
  ${mobile({
    display: 'flex',
    padding: '0 20px',
    border: '1px solid rgba(20, 20, 20, 0.5)',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px 20px',
  })}
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 2rem;
  ${mobile({ marginLeft: '0', padding: '0 20px' })}
`

const Left = styled.div`
  flex: 1;
  margin-right: 20px;
`

const LogoIconContainer = styled.div`
  ${mobile({ display: 'flex', justifyContent: 'center', alignItems: 'center' })}
`
const MenuIconContainer = styled.div`
  display: none;
  margin-right: 10px;
  ${mobile({ display: 'block' })}
`

const LogoImg = styled.img`
  width: 12rem;
  height: 2.438rem;
  ${mobile({ width: '10rem' })}
`

const Center = styled.div`
  flex: 1;
  ${mobile({ display: 'none' })}
`

const SearchIconContainer = styled.div`
  border: 1px solid rgba(20, 20, 20, 0.22);
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 365px;
  height: 45px;
  ${mobile({ display: 'none' })}
`

const SearchInput = styled.input`
  width: 13.5rem;
  height: 1.5rem;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  order: 1;
  flex-grow: 0;
  margin: 0px 15px;
  color: #e0e0e0;
  border: 0;
  flex: 8;
  outline: 0;
`

const Right = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;
`

const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 15px;
  cursor: pointer;
`
const CartText = styled.span`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  color: rgba(20, 20, 20, 0.5);
  margin-right: 0.5rem;
  ${mobile({ display: 'none' })}
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${mobile({ display: 'none' })}
`

const NavButton = styled(NavLink)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 34px;
  text-align: center;
  width: 120px;
  height: 45px;
  border-radius: 5px;
  margin: 0 20px;
  color: ${(props) => (props.color === 'primary' ? '#256EE4' : '#fff')};
  background-color: ${(props) => (props.color === 'primary' ? '#fff' : '#256EE4')};
  cursor: pointer;
  border: 1px solid #256ee4;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`

const NavContainer = styled.div`
  padding: 1.5rem 0;
  ${mobile({ display: 'none' })}
`

const NavItem = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`

const NavList = styled.li`
  margin: 0px 32px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  color: rgba(20, 20, 20, 0.5);
  text-decoration: none;
  cursor: pointer;
`

const UserContainer = styled.span`
  display: none;
  margin-right: 10px;
  ${mobile({ display: 'block' })}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => (props.active === 'home' ? '#256EE4' : 'rgba(20, 20, 20, 0.5)')};
  cursor: pointer;
  &:hover {
    color: '#256EE4';
  }
`

const Span = styled.span`
  text-decoration: none;
  color: ${(props) => (props.active === 'home' ? '#256EE4' : 'rgba(20, 20, 20, 0.5)')};
  cursor: pointer;
  &:hover {
    color: '#256EE4';
  }
`

export default Navbar
