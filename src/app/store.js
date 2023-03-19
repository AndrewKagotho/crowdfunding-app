import { configureStore } from '@reduxjs/toolkit'
import projectReducer from '../features/project/projectSlice'
import pledgeReducer from '../features/pledges/pledgesSlice'

export const store = configureStore({
  reducer: {
    project: projectReducer,
    pledges: pledgeReducer
  }
})