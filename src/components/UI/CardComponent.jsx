import React from 'react'
import styled from 'styled-components'

const CardComponent = ({ children }) => {
  return <Content>{children}</Content>
}

const Content = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 10px;
  margin: 10px 0px;
`

export default CardComponent
