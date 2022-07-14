import { Avatar } from '@mui/material'
import styled from 'styled-components'
import React, { Fragment, useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import MenuModal from '../UI/MenuModal'
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/auth/authSlice'
import { useNavigate } from 'react-router-dom'

const UserLoggedIn = ({ user }) => {
  const [open, setOpen] = useState(false)

  const Navigate = useNavigate()

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const dispatch = useDispatch()
  // Logout
  const handleLogout = () => {
    dispatch(logout())

    return Navigate('/')
  }

  return (
    <Fragment>
      <Container onClick={handleOpen}>
        <Avatar alt={user?.name} src="/static/images/avatar/1.jpg" sx={{ width: 40, height: 40 }} />
        <Span>{user?.name}</Span>
        <ArrowDropDownIcon />
      </Container>
      {open && <MenuModal handleClose={handleClose} handleLogout={handleLogout} />}
    </Fragment>
  )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
  cursor: pointer;
`

const Span = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 34px;
  color: #000000;
  margin: 0px 3px;
  &:hover {
    color: #256ee4;
  }
`

export default UserLoggedIn
