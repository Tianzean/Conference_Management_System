import axios from 'axios'

const API_URL = '/api/papers/'

// Create new paper
const createPaper = async (paperData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, paperData, config)

  return response.data
}

// Get user papers
const getPapers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Get user papers by id
const getPapersbyid = async (paperId) => {
  const config = {
    headers: {
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}




const paperService = {
  createPaper,
  getPapers,
  getPapersbyid,
}

export default paperService