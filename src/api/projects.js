import axios from "axios";

import {BACKEND_URL} from "./common";


export async function getProjects() {
  const url = BACKEND_URL + '/projects/list_my';
  const response = await axios.get(url);
  return response.data;
}

export async function setActiveProject(id) {
  const url = `${BACKEND_URL}/projects/set_active`
  const response = await axios.post(url, null, {
    params: {id},
  })
}