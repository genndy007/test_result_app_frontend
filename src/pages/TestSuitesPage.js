import React from 'react';
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";
import TestSuiteAccordionList from "../components/accordions/TestSuiteAccordionList";
import {testSuites} from "../utils/TestingItems";

const TestSuitesPage = () => {
  return (
    <div className="testSuites">
      <PageHeadingAppBar name="Test Suites"/>
      <TestSuiteAccordionList testSuites={testSuites}/>
    </div>
  );
};

export default TestSuitesPage;