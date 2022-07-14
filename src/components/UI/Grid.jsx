import React from 'react'
import styled from 'styled-components'

const Grid = ({ children, login }) => {
  return <Container text={login}>{children}</Container>
}

const Container = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: ${(props) => (props.text === 'login' ? '641px 2fr' : ' 2fr 641px')};
`

export default Grid
