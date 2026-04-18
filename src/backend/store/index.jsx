import { configureStore } from '@reduxjs/toolkit'
import Log_inReducer from '../slice/log_in_Slice'
import fetchProductsReducer from '../slice/fetchProducts'
const store = configureStore({
  reducer: {
 Log_in:Log_inReducer, 
fetchProducts:fetchProductsReducer }
})

export default store