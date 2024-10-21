import axios from 'axios';

//Module that exports three functions related to reviews using Axios to make HTTP requests


const API_URL = '/api/reviews';

//Sends a POST request to the API to create a new review draft with the given id and data 

const createReviewDraft = async (id, data) => {
  const response = await axios.post(`${API_URL}/draft/${id}`, data);
  return response.data;
};

//Sends a POST request to the API to submit a review with the given id and data

const createReviewSubmit = async (id, data) => {
  const response = await axios.post(`${API_URL}/submit/${id}`, data);
  return response.data;
};

//Sends a GET request to the API to get all reviews associated with the given id.

const getReviewsbyId = async(id) => {
  const response = await axios.get(`${API_URL}/view/${id}`);
  return response.data;
}

const reviewService = {
  getReviewsbyId,
  createReviewDraft,
  createReviewSubmit,
}

export default reviewService
