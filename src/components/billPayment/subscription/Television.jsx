import React from 'react'
import styled from 'styled-components'
import Tele from '../../../images/dstv.svg'
import startTime from '../../../images/starttime.svg'
import Gotv from '../../../images/gotv.svg'
import { TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import Button from './../../UI/BtnSm'

const Television = () => {
  const [values, setValues] = React.useState({
    cardNumber: '',
    bouquet: '',
    amount: '',
    name: '',
    phone: '',
  })

  const handleChange = (event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(values)
  }
  return (
    <Container>
      <ImageContainer>
        <Img src={Tele} />
        <Img src={startTime} />
        <Img src={Gotv} />
      </ImageContainer>
      <form onSubmit={handleSubmit}>
        <Text>Fill in your DSTV payment Details </Text>
        <Content>
          <FormControl fullWidth>
            <TextField
              id="outlined-basic"
              label="Smartcard Number"
              variant="outlined"
              style={{ marginRight: '20px' }}
              name="cardNumber"
              value={values.cardNumber}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.amount}
              label="Amount"
              onChange={handleChange}
              style={{ marginRight: '20px' }}
              name="amount"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Choose Bouquet</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={values.bouquet}
              label="Choose Bouquet"
              onChange={handleChange}
              name="bouquet"
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Content>
        <Text>Fill in Account holder’s information</Text>
        <Content>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              style={{ marginRight: '20px' }}
              value={values.name}
              onChange={handleChange}
              name="name"
            />
          </FormControl>
          <FormControl>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              style={{ marginRight: '20px' }}
              value={values.phone}
              onChange={handleChange}
              name="phone"
            />
          </FormControl>
        </Content>
        <BtnContainer>
          <Button>Proceed</Button>
        </BtnContainer>
      </form>
    </Container>
  )
}

const Container = styled.div`
  padding: 10px;
`

const ImageContainer = styled.div``
const Img = styled.img`
  margin-right: 30px;
  cursor: pointer;
  border: 1px solid #256ee4;
  filter: drop-shadow(0px 5px 20px rgba(141, 184, 243, 0.2));
`

const Text = styled.h3`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #000000;
  margin-top: 16px;
`

const Content = styled.div`
  display: flex;
  margin: 10px 0px;
`
const BtnContainer = styled.div``

export default Television
