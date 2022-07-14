import React from 'react'
import styled from 'styled-components'

const BtnSm = ({ onClick, text, children }) => {
  return (
    <Button text={text} onClick={onClick}>
      {children}
    </Button>
  )
}

const Button = styled.button`
  background: ${(props) => (props.text === 'order' ? 'rgba(232, 232, 232, 0.55)' : '#256ee4')};
  border-radius: 5px;
  height: 53px;
  width: 189px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => (props.text === 'order' ? 'rgba(20, 20, 20, 0.5)' : '#ffffff')};
  cursor: pointer;
  border: 0;
  align-self: ${(props) => (props.text === 'order' ? 'center' : '')};
`

export default BtnSm
