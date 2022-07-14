import axios from 'axios'

import { BASE_URL } from '../../requestMethods'

//Register  user
const register = async (userData) => {
  const res = await axios.post(BASE_URL + '/auth/register', userData)

  const { data } = res.data

  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }

  return data
}

// Login user
const login = async (userData) => {
  const res = await axios.post(BASE_URL + '/auth/login', userData)

  const { data } = res.data

  if (data) {
    localStorage.setItem('user', JSON.stringify(data))
  }

  return data
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  logout,
  login,
  register,
}

export default authService
