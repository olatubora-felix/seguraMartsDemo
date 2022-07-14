import React, { useState } from 'react'
import styled from 'styled-components'

import AddOutlinedIcon from '@mui/icons-material/AddOutlined'
import AddressContainer from './shippingAddress/AddressContainer'
import AddAddress from './shippingAddress/AddAddress'

const ShippingAddress = ({ setAddress, address }) => {
  const [edit, setEdit] = useState(false)
  return (
    <Container>
      {edit ? <AddAddress /> : <AddressContainer />}

      <AddContainer onClick={() => setEdit(!edit)}>
        <AddOutlinedIcon />
        Add New Address
      </AddContainer>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
`

const AddContainer = styled.h5`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #256ee4;
  margin: 10px 0px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-top: 16px;
`
export default ShippingAddress
