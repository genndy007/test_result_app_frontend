import React from 'react';

import {testCases} from "../utils/TestingItems";
import TestCaseAccordionList from "../components/accordions/TestCaseAccordionList";
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";


const TestCasesPage = () => {
  return (
    <div className="testCases">
      <PageHeadingAppBar name="Test Cases"/>
      <TestCaseAccordionList testCases={testCases}/>
    </div>
  );
};

export default TestCasesPage;