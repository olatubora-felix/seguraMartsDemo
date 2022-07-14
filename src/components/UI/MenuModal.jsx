import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PersonIcon from '@mui/icons-material/Person'
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined'
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'

const Backdrop = ({ handleClose }) => {
  return <BackdropContainer onClick={handleClose}></BackdropContainer>
}

const style = {
  marginRight: '10px',
}

const ModalOverlay = ({ handleClose, handleLogout }) => {
  return (
    <Modal>
      <Content>
        <StyledLink to="/account/profile" onClick={handleClose}>
          <PersonIcon style={style} />
          <Span> Profile</Span>
        </StyledLink>
        <StyledLink to="/account/order">
          <Inventory2OutlinedIcon style={style} />
          <Span> My Orders</Span>
        </StyledLink>
        <StyledLink to="/account/myWishlist">
          <FavoriteBorderRoundedIcon style={style} />
          <Span> My Wishlist</Span>
        </StyledLink>
      </Content>
      <LogoutContainer onClick={handleLogout}>
        <Logout>Logout</Logout>
      </LogoutContainer>
    </Modal>
  )
}

const MenuModal = ({ handleClose, handleLogout }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop handleClose={handleClose} />,
        document.getElementById('backdrop-root'),
      )}
      {ReactDOM.createPortal(
        <ModalOverlay handleClose={handleClose} handleLogout={handleLogout} />,
        document.getElementById('overlay-root'),
      )}
    </React.Fragment>
  )
}

const BackdropContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  cursor: pointer;
`
const Modal = styled.div`
  position: absolute;
  top: 10vh;
  left: 78%;
  width: 228px;
  z-index: 100;
  overflow: hidden;
  background: #fff;
  border-radius: 5px;
  cursor: pointer;
`

const Content = styled.div`
  border-bottom: 0.5px solid #b8b8b8;
  padding: 1rem;
`
const StyledLink = styled(Link)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: #141414;
  &:hover {
    color: #256ee4;
  }
  &:active {
    color: #256ee4;
  }

  &:focus {
    color: #256ee4;
  }
`

const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #141414;
  margin: 1rem 0;
  &:hover {
    color: #256ee4;
  }
  &:active {
    color: #256ee4;
  }

  &:focus {
    color: #256ee4;
  }
`

const LogoutContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 1rem 0px;
`

const Logout = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  text-transform: uppercase;
  color: #256ee4;
`

export default MenuModal
