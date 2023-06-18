import axios from "axios";

import {BACKEND_URL} from "./common";


export async function getTestCases() {
  const url = BACKEND_URL + '/test_cases/list_my';
  const response = await axios.get(url);
  return response.data;
}