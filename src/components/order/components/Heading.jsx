import { Breadcrumbs } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const Heading = ({ title }) => {
  return (
    <Stack spacing={2}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Stylink underline="hover" key="1" color="inherit" to="/">
          Home
        </Stylink>
        ,
        <Stylink underline="hover" key="2" color="inherit" to="#">
          Account
        </Stylink>
        ,
        <Text key="3" color="text.primary">
          {title}
        </Text>
        ,
      </Breadcrumbs>
    </Stack>
  )
}

const Stack = styled.div``
const Stylink = styled(Link)`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #b8b8b8;
`

const Text = styled.h4`
  text-decoration: none;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #256ee4;
`

export default Heading
