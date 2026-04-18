import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import Cookies from 'universal-cookie';
const cookies = new Cookies();
import { postData } from '../ApiServecies';
import { Auth, BaseUrl, LOG_IN } from '../Api';


const initialState = {
  formInfo: {
    token: null,
    username: '',
    password: '',
    email: ''
  },
  isLoading: false,
  error: {
    email: '',
    password: '',
    general: ''
  },
};

export const Log_in = createAsyncThunk(
  'Log_in/Log_in',
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const { username, password ,email} = state.Log_in.formInfo;

      const response = await postData(
        `${BaseUrl}${Auth}${LOG_IN}`,
        { username, password,email }
      );
console.log(response)
 cookies.set('accessToken', response.accessToken, {
        path: '/',
      });

      cookies.set('refreshToken', response.refreshToken, {
        path: '/',
      });
      return response;

    } catch (error) {
      return rejectWithValue(error?.message || 'Login failed');
    }
  }
);

const formSlice = createSlice({
  name: 'Log_in',
  initialState,
  reducers: {
    setformInfo: (state, action) => {
      state.formInfo = { ...state.formInfo, ...action.payload };
    },setError: (state, action) => {
  state.error = { ...state.error, ...action.payload };
},
    resetForm: () => initialState,
   clearError: (state) => {
  state.error = {
    email: '',
    password: '',
    general: ''
  };
}
  },
  extraReducers: (builder) => {
    builder
     
        .addCase(Log_in.pending, (state) => {
  state.isLoading = true;
  state.error = {
    email: '',
    password: '',
    general: ''
  };

      })
      .addCase(Log_in.fulfilled, (state, action) => {
        state.isLoading = false;
  state.user = action.payload;
    state.token = action.payload.accessToken;

      })
      .addCase(Log_in.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
          state.error.general = action.payload;

      })
  },
});

export const { setformInfo, resetForm, clearError, setError } = formSlice.actions;export default formSlice.reducer;
