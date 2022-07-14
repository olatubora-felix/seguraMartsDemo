import React from 'react'
import styled from 'styled-components'

const Header = ({ children }) => {
  return <Content>{children}</Content>
}

const Content = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  display: flex;
  align-items: center;
`

export default Header
