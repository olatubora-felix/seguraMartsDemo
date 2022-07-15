import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { BASE_URL } from '../../requestMethods'

// Get  All Categories
export const getSubCategories = createAsyncThunk('subCategory/getSubCategories', async () => {
  const res = await axios(`${BASE_URL}/subcategories/all`)
  const { data } = res.data
  return data
})

// Get  All Products SubCategories
export const getProductSubCat = createAsyncThunk('subCategory/getProductSubCat', async ({ id }) => {
  const res = await axios.get(`${BASE_URL}/products/subcategory/${id}`)
  const { data } = res.data
  return data
})
