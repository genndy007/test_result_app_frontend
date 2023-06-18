import {useState, useEffect} from 'react';
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";
import TestSuiteAccordionList from "../components/accordions/TestSuiteAccordionList";
import {getTestSuites} from "../api/test_suites";


const TestSuitesPage = () => {
  const [testSuites, setTestSuites] = useState([]);

  useEffect(() => {
    (async () =>{
      const data = await getTestSuites();
      const testSuites = data.test_suites;
      setTestSuites(testSuites);
    })()
  }, [])

  return (
    <div className="testSuites">
      <PageHeadingAppBar name="Test Suites"/>
      <TestSuiteAccordionList testSuites={testSuites}/>
    </div>
  );
};

export default TestSuitesPage;