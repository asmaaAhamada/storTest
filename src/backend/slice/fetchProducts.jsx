import { createSlice ,createAsyncThunk  } from '@reduxjs/toolkit'
import { BaseUrl, Products } from '../Api';
import { getData } from '../ApiServecies';



export const fetchProducts = createAsyncThunk(
  'program/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getData(`${BaseUrl}${Products}`) 
      console.log(response)
      return response;
    } catch (error) {
      return rejectWithValue(error?.message);
    }
  }
);

export const counterSlice = createSlice({
    name: 'fetchProducts',
    initialState: {
       isLoading:false,
       data:[],
       error:null
    },
    reducers: {
    
    }, extraReducers: builder => {
        builder
          .addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true
          })
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false
state.data = action.payload.products            
          })
       .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload; 
          })
        }
  })
  
 
  
  export default counterSlice.reducer