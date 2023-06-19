import axios from "axios";

import {BACKEND_URL} from "./common";

export async function getTestRuns() {
  const url = BACKEND_URL + '/test_runs/list_my';
  const response = await axios.get(url);
  return response.data;
}

export async function getTestRunReport(testRunId) {
  const url = `${BACKEND_URL}/test_runs/${testRunId}/report`
  const response = await axios.get(url);

  window.open(response.data.report_url, '_blank')
}

export async function createNewTestRun(test_suite_id, result, test_case_statuses){
  const url = `${BACKEND_URL}/test_runs/new`;
  const response = await axios.post(url, {
    test_suite_id, result, test_case_statuses
  })
}