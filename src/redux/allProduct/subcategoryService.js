import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../requestMethods'

// Get  All Categories
export const getSubCategories = createAsyncThunk('subCategory/getSubCategories', async () => {
  const res = await fetch(`${BASE_URL}/subcategories/all`)
  const data = res.json()
  return data
})

// Get  All Products SubCategories
export const getProductSubCat = createAsyncThunk('subCategory/getProductSubCat', async ({ id }) => {
  const res = await fetch(`${BASE_URL}/products/subcategory/${id}`)
  const data = res.json()
  return data
})
