import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../requestMethods'

// Get  All Categories
export const getcategories = createAsyncThunk('category/getcategories', async () => {
  const res = await axios.get(`${BASE_URL}/categories/all`)
  const { data } = res.data
  return data
})
