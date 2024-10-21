import { createSlice } from '@reduxjs/toolkit';
import reviewService from './reviewService';

//Redux slice that defines the initial state and action creators for managing reviews in the application

const initialState = {
  review: null,
  error: null,
  loading: false,
  reviews: []
};

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    createReviewDraftStart(state) {
      state.loading = true;
      state.error = null;
    },
    createReviewDraftSuccess(state, action) {
      state.loading = false;
      state.review = action.payload;
    },
    createReviewDraftFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    createReviewSubmitStart(state) {
      state.loading = true;
      state.error = null;
    },
    createReviewSubmitSuccess(state, action) {
      state.loading = false;
      state.review = action.payload;
    },
    createReviewSubmitFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    getReviewsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getReviewsSuccess(state, action) {
      state.loading = false;
      state.reviews = action.payload;
    },
    getReviewsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  createReviewDraftStart,
  createReviewDraftSuccess,
  createReviewDraftFailure,
  createReviewSubmitStart,
  createReviewSubmitSuccess,
  createReviewSubmitFailure,
  getReviewsStart,
  getReviewsSuccess,
  getReviewsFailure,
} = reviewSlice.actions;

//Action creator function for creating a review draft

export const createReviewDraft = (id, data) => async (dispatch) => {
  dispatch(createReviewDraftStart());
  try {
    const review = await reviewService.createReviewDraft(id, data);
    dispatch(createReviewDraftSuccess(review));
  } catch (error) {
    dispatch(createReviewDraftFailure(error.message));
  }
};

//Asynchronous action creator using Redux-Thunk middleware. 
//It dispatches actions to update the store's state for creating and submitting reviews.

export const createReviewSubmit = (id, data) => async (dispatch) => {
  dispatch(createReviewSubmitStart());
  try {
    const review = await reviewService.createReviewSubmit(id, data);
    dispatch(createReviewSubmitSuccess(review));
  } catch (error) {
    dispatch(createReviewSubmitFailure(error.message));
  }
};

//This function is an asynchronous action creator that retrieves reviews for a given ID from the server

export const getReviewsbyId = (id) => async (dispatch) => {
  dispatch(getReviewsStart());
  try {
    const reviews = await reviewService.getReviewsbyId(id);
    dispatch(getReviewsSuccess(reviews));
  } catch (error) {
    dispatch(getReviewsFailure(error.message));
  }
};

export default reviewSlice.reducer;
