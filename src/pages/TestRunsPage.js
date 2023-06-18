import {useState, useEffect} from 'react';

import TestRunAccordionList from "../components/accordions/TestRunAccordionList";
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";
import {getTestRuns} from "../api/test_runs";


const TestRunsPage = () => {
  const [testRuns, setTestRuns] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTestRuns();
      const testRuns = data.test_runs;
      setTestRuns(testRuns);
    })()
  }, [])

  return (
    <div className="testRuns">
      <PageHeadingAppBar name="Test Runs"/>
      <TestRunAccordionList testRuns={testRuns}/>
    </div>
  );
};

export default TestRunsPage;