import { createSlice } from '@reduxjs/toolkit'

// API Service
import { getProducts, getProduct } from './productsService'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: null,
    product: null,
    loading: false,
    error: null,
  },
  extraReducers: {
    // Get All Products
    [getProducts.pending]: (state, action) => {
      state.loading = true
    },
    [getProducts.fulfilled]: (state, action) => {
      state.products = action.payload
      state.loading = false
    },
    [getProducts.rejected]: (state, action) => {
      state.loading = true
      state.error = action.payload
    },
    // Get Single Products
    [getProduct.pending]: (state, action) => {
      state.loading = true
    },
    [getProduct.fulfilled]: (state, action) => {
      state.product = action.payload
      state.loading = false
    },
    [getProduct.rejected]: (state, action) => {
      state.loading = true
      state.error = action.payload
    },
  },
})

// export const { setEdit } = featureProductSlice.actions

export default productSlice.reducer
