import { configureStore } from '@reduxjs/toolkit'
import featuredReducer from '../redux/featured/featuredSlice'
import productReducer from '../redux/allProduct/ProductsSlice'
import subCategoryReducer from '../redux/allProduct/subcategorySlice'
import categoryReducer from '../redux/allProduct/categorySlice'
import cartReducer, { getTotals } from '../redux/cartSlice'
import authReducer from '../redux/auth/authSlice'

export const store = configureStore({
  reducer: {
    featured: featuredReducer,
    product: productReducer,
    subcategory: subCategoryReducer,
    cart: cartReducer,
    auth: authReducer,
    category: categoryReducer,
  },
})

store.dispatch(getTotals())
