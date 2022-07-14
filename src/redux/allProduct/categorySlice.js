import { createSlice } from '@reduxjs/toolkit'

// API Service
import { getcategories } from './categoryService'

//
const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    // Get All Subcategories
    [getcategories.pending]: (state) => {
      state.loading = true
    },
    [getcategories.fulfilled]: (state, action) => {
      state.categories = action.payload
      state.loading = false
    },
    [getcategories.rejected]: (state, action) => {
      state.loading = true
      state.error = action.payload
    },
  },
})

// export const { setEdit } = featureProductSlice.actions

export default categorySlice.reducer
