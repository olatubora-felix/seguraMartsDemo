import React from 'react'
import styled from 'styled-components'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined'

const AddressContainer = () => {
  return (
    <Grid>
      <Items>
        <Header>
          <Title>Address 1</Title>
          <Title text="edit">EDIT</Title>
        </Header>
        <Content>
          <Address>
            <Text>Tosin Oyegoke</Text>
            <Text text="text">24 Jack Bauer street, Festac Town, Lagos, Nigeria.</Text>
            <Text text="text">08033322211</Text>
          </Address>
          <Icons>
            <DeleteOutlineOutlinedIcon style={{ justifySelf: 'flex-end', cursor: 'pointer' }} />
          </Icons>
        </Content>
      </Items>
      <Items>
        <Header>
          <Title>Address 1</Title>
          <Title text="edit">EDIT</Title>
        </Header>
        <Content>
          <Address>
            <Text>Tosin Oyegoke</Text>
            <Text text="text">24 Jack Bauer street, Festac Town, Lagos, Nigeria.</Text>
            <Text text="text">08033322211</Text>
          </Address>
          <Icons>
            <DeleteOutlineOutlinedIcon style={{ justifySelf: 'flex-end', cursor: 'pointer' }} />
          </Icons>
        </Content>
      </Items>
    </Grid>
  )
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`
const Items = styled.div`
  width: 257px;
  border: 1px solid #b8b8b8;
  border-radius: 5px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 0.5px solid #b8b8b8;
`
const Title = styled.h4`
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => (props.text === 'edit' ? '14px' : '16px')};
  line-height: 19px;
  color: ${(props) => (props.text === 'edit' ? '#256EE4' : '#141414')};
  cursor: ${(props) => (props.text === 'edit' ? 'pointer' : '')};
`
const Content = styled.div`
  display: flex;
  padding: 10px;
`
const Address = styled.div``
const Text = styled.h5`
  font-style: normal;
  font-weight: ${(props) => (props.text === 'text' ? '500' : '400')};
  font-size: ${(props) => (props.text === 'text' ? '14px' : '16px')};
  line-height: 19px;
  color: #141414;
`
const Icons = styled.div`
  align-self: flex-end;
`

export default AddressContainer
