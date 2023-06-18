import {useState, useEffect} from 'react';

import TestCaseAccordionList from "../components/accordions/TestCaseAccordionList";
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";
import {getTestCases} from "../api/test_cases";


const TestCasesPage = () => {
  const [testCases, setTestCases] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getTestCases();
      const testCases = data.test_cases;
      setTestCases(testCases);
    })();
  }, [])

  return (
    <div className="testCases">
      <PageHeadingAppBar name="Test Cases"/>
      <TestCaseAccordionList testCases={testCases}/>
    </div>
  );
};

export default TestCasesPage;