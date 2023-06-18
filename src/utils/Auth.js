import axios from "axios";

const BACKEND_URL = 'http://127.0.0.1:5003'

const authHeader = (token) => {
  return {'Authorization': `Bearer ${token}`}
}

export const logIn = (username, password) => {
  const loginUrl = BACKEND_URL + '/auth/login'
  const response = axios.post(loginUrl, {
    username: username,
    password: password,
  }).then(response => {
    console.log(response.data)
    if (response.status === 200) {
      localStorage.setItem('jwt', response.data['jwt'])
      return true;
    }
    return false;
  })
}

export const logOut = () => {
  localStorage.clear()
}

export const isAuthenticated = () => {
  const token = localStorage.getItem('jwt');
  if (!token) return false;

  const meUrl = BACKEND_URL + '/auth/me'
  const response = axios.post(meUrl, null, {
    headers: authHeader(token)
  }).then(response => {
    return response.status === 200;
  })

}