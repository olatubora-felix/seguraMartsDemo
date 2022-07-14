import { createSlice } from '@reduxjs/toolkit'

// API Service
import { getSubCategories, getProductSubCat } from './subcategoryService'

//
const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState: {
    subcategories: null,
    productSubCat: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    // Get All Subcategories
    [getSubCategories.pending]: (state) => {
      state.loading = true
    },
    [getSubCategories.fulfilled]: (state, action) => {
      state.subcategories = action.payload
      state.loading = false
    },
    [getSubCategories.rejected]: (state, action) => {
      state.loading = true
      state.error = action.payload
    },
    // Get All Products Subcategories
    [getProductSubCat.pending]: (state) => {
      state.loading = true
    },
    [getProductSubCat.fulfilled]: (state, action) => {
      state.productSubCat = action.payload
      state.loading = false
    },
    [getProductSubCat.rejected]: (state, action) => {
      state.loading = true
      state.error = action.payload
    },
  },
})

// export const { setEdit } = featureProductSlice.actions

export default subcategorySlice.reducer
