import axios from "axios";

import {BACKEND_URL} from "./common";

export async function getTestSuites() {
  const url = BACKEND_URL + '/test_suites/list_my';
  const response = await axios.get(url);
  return response.data;
}