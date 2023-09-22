import axios from 'axios';

export const getRequests = async (username) => {
  try {
    const url = `http://localhost:5000/admin/request/${username}`;
    const response = await axios.get(url);
    // console.log(response.data.requests);
    return response.data.requests;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
