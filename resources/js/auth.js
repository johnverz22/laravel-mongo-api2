import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Replace with your API base URL

const storageKey = 'auth_token'; // Key to store the token in Local Storage

const getStoredToken = () => {
  return localStorage.getItem(storageKey);
};

const setAuthToken = () => {
  const token = getStoredToken();
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

const checkLoggedIn = async () => {
  try {
    const token = getStoredToken();
    if (!token) {
      return false; // No token stored, user not logged in
    }
    setAuthToken(token); // Set token from storage
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
    storeToken(response.data.access_token); // Store token in Local Storage
  }
  return response.data;
};

const login = async (credentials) => {
  const response = await axios.post(`${baseURL}/login`, credentials);
  if (response.data.access_token) {
    setAuthToken(response.data.access_token);
    storeToken(response.data.access_token); // Store token in Local Storage
  }
  return response.data;
};

const logout = async () => {
  const response = await axios.post(`${baseURL}/logout`);
  setAuthToken(null);
  localStorage.removeItem(storageKey); // Remove token from storage
  return response.data;
};

const checkAuth = async () => {
  const response = await axios.get(`${baseURL}/check-auth`);
  return response.data;
}

const storeToken = (token) => {
  if (token) {
    localStorage.setItem(storageKey, token);
  } else {
    localStorage.removeItem(storageKey);
  }
};

// Call setAuthToken on initialization to attempt using stored token
setAuthToken();

export { checkLoggedIn, register, login, logout, setAuthToken, checkAuth};
