import React from 'react';

import {testRuns} from "../utils/TestingItems";
import TestRunAccordionList from "../components/accordions/TestRunAccordionList";
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";


const TestRunsPage = () => {
  return (
    <div className="testRuns">
      <PageHeadingAppBar name="Test Runs"/>
      <TestRunAccordionList testRuns={testRuns}/>
    </div>
  );
};

export default TestRunsPage;