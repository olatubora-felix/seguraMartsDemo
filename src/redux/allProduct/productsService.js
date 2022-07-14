import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../requestMethods'

// Get All Products
export const getProducts = createAsyncThunk('product/getProducts', async () => {
  const res = await fetch(`${BASE_URL}/products/all`)
  const data = res.json()
  return data
})

// Get Single Product
export const getProduct = createAsyncThunk('product/getProduct', async ({ id }) => {
  const res = await fetch(`${BASE_URL}/products/single/${id}`)
  const data = res.json()
  return data
})
