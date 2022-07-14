import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from 'styled-components'
import UserIcon from '../../images/user.svg'

export default function BasicMenu({ anchorEl, handleMenuClose, menuOpen }) {
  return (
    <Container>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={menuOpen}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        style={{ width: '100%' }}
      >
        <MenuItem onClick={handleMenuClose}>
          <Img src={UserIcon} />
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
      </Menu>
    </Container>
  )
}

const Container = styled.div``
const Img = styled.img``
