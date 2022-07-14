import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'
import BtnSm from '../../../UI/BtnSm'

const AddAddress = () => {
  return (
    <FormContent>
      <FormControl>
        <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
      </FormControl>
      <FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="State/Province"
          variant="outlined"
          style={{ marginRight: '10px' }}
        />
        <TextField fullWidth id="outlined-basic" label="Country" variant="outlined" />
      </FormControl>
      <BtnSm>Save Changes</BtnSm>
    </FormContent>
  )
}

const FormContent = styled.form``
const FormControl = styled.div`
  display: flex;
  height: 48px;
  width: 570px;
  margin: 24px 0px;
`

export default AddAddress
