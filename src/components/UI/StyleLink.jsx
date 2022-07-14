import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const StyleLink = ({ to, children }) => {
  return <LinkStyle to={to}>{children}</LinkStyle>
}

const LinkStyle = styled(Link)`
  text-decoration: none;
`

export default StyleLink
