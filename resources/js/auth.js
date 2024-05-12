import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Replace with your API base URL

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const checkLoggedIn = async () => {
  try {
    const response = await axios.get(`${baseURL}/user-check`); // Assuming an endpoint to check user info
    return true; // User is logged in if request is successful
  } catch (error) {
    return false; // User is not logged in if request fails
  }
};

const register = async (userData) => {
  const response = await axios.post(`${baseURL}/register`, userData);
  if (response.data.access_token) {
    setAuthToken(response.data.access_token);
  }
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseURL}/login`, credentials);
  if (response.data.access_token) {
    setAuthToken(response.data.access_token);
  }
  return response.data;
};

const logout = async () => {
  const response = await axios.post(`${baseURL}/logout`);
  setAuthToken(null);
  return response.data;
};

export { checkLoggedIn, register, login, logout, setAuthToken };
