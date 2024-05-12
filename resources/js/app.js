import './bootstrap';

import { checkLoggedIn, register, login, logout, checkAuth } from './auth';

const handleLoggedInStatus = async () => {
  const loggedIn = await checkLoggedIn();
  if (loggedIn) {
    console.log('User is logged in');
    // Update UI accordingly (e.g., hide login form, show user info)
  } else {
    console.log('User is not logged in');
    // Update UI accordingly (e.g., show login form)
  }

  const data = await checkAuth();
  console.log(data);
};

window.onload = handleLoggedInStatus; // Check login status on page load

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const credentials = {
    email: loginForm.elements.email.value,
    password: loginForm.elements.password.value,
  };

  try {
    const response = await login(credentials);
    console.log('Login successful:', response);
    // Update UI to reflect successful login (e.g., redirect to protected area)
  } catch (error) {
    console.error('Login failed:', error.response.data);
    // Handle login errors (e.g., display error message)
  }
});

registerForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent default form submission

  const userData = {
    name: registerForm.elements.name.value,
    email: registerForm.elements.email.value,
    password: registerForm.elements.password.value,
  };

  try {
    const response = await register(userData);
    console.log('Registration successful:', response);
    // Update UI to reflect successful registration (e.g., redirect to login)
  } catch (error) {
    console.error('Registration failed:', error);
    // Handle registration errors (e.g., display error message)
  }
});
