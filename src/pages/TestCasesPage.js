import React from 'react';

import {testCases} from "../utils/TestingItems";
import TestCaseAccordionList from "../components/accordions/TestCaseAccordionList";


const TestCasesPage = () => {
  return (
    <div className="testCases">
      <TestCaseAccordionList testCases={testCases}/>
    </div>
  );
};

export default TestCasesPage;