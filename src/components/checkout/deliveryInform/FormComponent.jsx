import { TextField } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const FormComponent = () => {
  return (
    <Container>
      <Content>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            style={{ marginRight: '10px' }}
          />
          <TextField id="outlined-basic" label="Phone Number" variant="outlined" />
        </FormControl>

        <FormControl>
          <TextField fullWidth id="outlined-basic" label="Address" variant="outlined" />
        </FormControl>

        <FormControl>
          <TextField
            id="outlined-basic"
            label="State/Province"
            variant="outlined"
            style={{ marginRight: '10px' }}
          />
          <TextField id="outlined-basic" label="Country" variant="outlined" />
        </FormControl>
      </Content>
    </Container>
  )
}

const Container = styled.div`
  padding: 16px;
`

const Content = styled.div``
const FormControl = styled.div`
  margin: 20px 0px;
  width: 66%;
`

export default FormComponent
