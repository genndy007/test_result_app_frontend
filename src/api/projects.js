import axios from "axios";

import {BACKEND_URL} from "./common";


export async function getProjects() {
  const url = BACKEND_URL + '/projects/list_my';
  const response = await axios.get(url);
  return response.data;
}