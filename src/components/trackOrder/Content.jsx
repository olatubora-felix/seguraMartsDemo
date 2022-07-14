import React, { useState } from 'react'
import { TextField } from '@mui/material'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Content = () => {
  const [track, setTrack] = useState('')
  const navigate = useNavigate()

  const handleTracker = () => {
    if (track === '123456') {
      navigate('/track_orderDetails')
    }
  }

  return (
    <Container>
      <Item>
        <Title>Track your Order</Title>
        <FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Order ID"
            variant="outlined"
            onChange={(e) => setTrack(e.target.value)}
            value={track}
          />
        </FormControl>
        <Button onClick={handleTracker}>Track Order</Button>
      </Item>
    </Container>
  )
}

const Container = styled.div`
  height: 100vh;
  background-color: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Item = styled.div`
  width: 503px;
  background: #ffffff;
  border-radius: 5px;
  padding: 40px;
`

const Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #141414;
`

const FormControl = styled.div`
  margin: 20px 0px;
`

export default Content
