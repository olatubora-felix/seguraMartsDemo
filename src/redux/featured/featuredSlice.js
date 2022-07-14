import { createSlice } from '@reduxjs/toolkit'

// API Service
import { getFeaturedProducts } from './featuredService'

const featureProductSlice = createSlice({
  name: 'featureProduct',
  initialState: {
    featured: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    [getFeaturedProducts.pending]: (state, action) => {
      state.loading = true
    },
    [getFeaturedProducts.fulfilled]: (state, action) => {
      state.featured = action.payload
      state.loading = false
    },
    [getFeaturedProducts.rejected]: (state, action) => {
      state.loading = true
      state.error = action.payload
    },
  },
})

// export const { setEdit } = featureProductSlice.actions

export default featureProductSlice.reducer
