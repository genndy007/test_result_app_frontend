import axios from "axios";

const BACKEND_URL = 'http://127.0.0.1:5003'

const authHeader = (token) => {
  return {'Authorization': `Bearer ${token}`}
}

const logIn = async (username, password) => {
  const loginUrl = BACKEND_URL + '/auth/login'
  const response = await axios.post(loginUrl, {
    username: username,
    password: password,
  })

  console.log(response.data)
  localStorage.setItem('jwt', response.data['jwt'])
}

const isAuthenticated = async () => {
  const token = localStorage.getItem('jwt');
  if (!token) return false;

  const meUrl = BACKEND_URL + '/auth/me'
  const response = await axios.post(meUrl, null, {
    headers: authHeader(token)
  })

  if (response.status !== 200) return false;
  return true;
}