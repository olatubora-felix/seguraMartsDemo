import { Avatar, TextField } from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import BtnSm from '../../UI/BtnSm'

const MyProfile = () => {
  function stringToColor(string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    }
  }

  const user = useSelector((state) => state.auth.user)

  const { name, country } = user

  const [values, setValues] = React.useState({
    state: 'Jos',
    address: '24 Jack Bauer street, Festac Town',
    phone: '08086514426',
    name,
    country,
  })

  // Handle Onchange
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    console.log(values)
  }

  return (
    <Container>
      <Profile>
        <Avatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          {...stringAvatar(name)}
          sx={{ width: 150, height: 150, bgcolor: deepOrange[700], fontSize: 30 }}
        />
        <Text>{name}</Text>
        <Text text="subtext">{country}</Text>
      </Profile>
      <FormContent onSubmit={handleUpdate}>
        <FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            onChange={handleChange('name')}
            value={values.name}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            onChange={handleChange('phone')}
            value={values.phone}
          />
        </FormControl>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Address"
          variant="outlined"
          onChange={handleChange('address')}
          value={values.address}
        />
        <FormControl>
          <TextField
            fullWidth
            id="outlined-basic"
            label="State/Province"
            variant="outlined"
            onChange={handleChange('state')}
            value={values.state}
          />
          <TextField
            fullWidth
            id="outlined-basic"
            label="Country"
            variant="outlined"
            onChange={handleChange('country')}
            value={values.country}
          />
        </FormControl>
        <BtnContainer>
          <BtnSm>Save Changes</BtnSm>
        </BtnContainer>
      </FormContent>
    </Container>
  )
}

const Container = styled.div`
  padding: 20px;
  display: flex;
`

const Profile = styled.div`
  width: 337px;
  background: #f6f8fa;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
  margin-right: 10px;
`
const Text = styled.h4`
  font-style: normal;
  font-weight: ${(props) => (props.text ? '400' : '600')};
  font-size: ${(props) => (props.text ? '16px' : '20px')};
  line-height: 25px;
  color: #141414;
  opacity: ${(props) => (props.text ? '0.8' : '')};
  margin: 5px 0px;
`
const FormContent = styled.form`
  width: 100%;
  padding: 0px 20px 20px 20px;
`
const FormControl = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 16px 0px;
`
const BtnContainer = styled.div``

export default MyProfile
