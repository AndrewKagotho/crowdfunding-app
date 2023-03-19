import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { url } from '../../utils/config'

const initialState = {
  loading: false,
  project: [],
  error: ''
}

export const fetchProject = createAsyncThunk('project/fetchProject', () => {
  return axios
    .get(`${url}/api`)
    .then(response => response.data)
})

const projectSlice = createSlice({
  name: 'project',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchProject.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProject.fulfilled, (state, action) => {
      state.loading = false
      state.project = action.payload

    })
    builder.addCase(fetchProject.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.message
    })
  }
})

export default projectSlice.reducer