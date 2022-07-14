import axios from 'axios'

export default axios.create({
  baseURL: 'https://seguramart.herokuapp.com/api/v1/',
})
