import { createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../requestMethods'

// Get Post
export const getFeaturedProducts = createAsyncThunk('posts/getPost', async () => {
  const res = await fetch(`${BASE_URL}/products/featured`)
  const data = res.json()
  return data
})
