import axios from "axios";

import {BACKEND_URL} from "./common";


export async function getUserData() {
  const url = BACKEND_URL + '/auth/me'
  const response = await axios.get(url);
  return response.data;
}
