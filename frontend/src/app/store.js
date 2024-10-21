import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import paperReducer from '../features/papers/paperSlice'
import reviewReducer from '../features/reviews/reviewSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    papers: paperReducer,
    review: reviewReducer,
  },
})