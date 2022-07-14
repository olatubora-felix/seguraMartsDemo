import React from 'react'
import styled from 'styled-components'

const Button = ({ children, oauth, onClick }) => {
  return (
    <ButtonContainer text={oauth} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}

const ButtonContainer = styled.button`
  width: 100%;
  height: 54px;
  background: ${(props) => (props.text === 'oauth' ? '#fff' : '#256ee4')};
  border-radius: 5px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: ${(props) => (props.text === 'oauth' ? '#256ee4' : '#fff')};
  cursor: pointer;
  border: ${(props) => (props.text === 'oauth' ? '#256ee4 1px solid' : 'none')};
  outline: none;
  &:hover {
    background: #0c54c7;
    color: #fff;
    transition: all ease-in-out 2ms;
  }
  display: ${(props) => (props.text === 'oauth' ? 'flex' : '')};
  align-items: center;
  justify-content: center;
`

export default Button
