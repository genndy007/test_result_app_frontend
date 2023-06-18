import axios from "axios";

import {BACKEND_URL} from "./common";

export async function getTestRuns() {
  const url = BACKEND_URL + '/test_runs/list_my';
  const response = await axios.get(url);
  return response.data;
}