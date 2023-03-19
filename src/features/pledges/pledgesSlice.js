import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../../utils/config'

const initialState = {
  loading: false,
  pledges: [],
  error: ''
}

export const fetchPledges = createAsyncThunk('pledges/fetchPledges', () => {
  return axios
    .get(`${url}/api/pledges`)
    .then(response => response.data)
})

const pledgesSlice = createSlice({
  name: 'pledges',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPledges.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchPledges.fulfilled, (state, action) => {
      state.loading = false
      state.pledges = action.payload
    })
    builder.addCase(fetchPledges.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
  }
})

export default pledgesSlice.reducer