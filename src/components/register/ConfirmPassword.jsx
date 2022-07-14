import * as React from 'react'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { OutlinedInput } from '@mui/material'

export default function ConfirmPassword({ handleChange, setValues, values }) {
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword2: !values.showPassword2,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  return (
    <Box>
      <div>
        <FormControl variant="outlined" style={{ width: '100%' }}>
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword2 ? 'text' : 'password'}
            value={values.password2}
            onChange={handleChange('password2')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword2 ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
      </div>
    </Box>
  )
}
