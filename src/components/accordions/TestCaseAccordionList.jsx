import React, {Fragment} from 'react';
import TestCaseAccordion from "./TestCaseAccordion";


const TestCaseAccordionList = ({testCases}) => {
  const [open, setOpen] = React.useState(false);

  const accordionChange = (card) => (e, isOpen) => {
    setOpen(isOpen ? card : false);
  };

  return (
    <Fragment>
      {testCases.map((testCase) => (
        <TestCaseAccordion testCase={testCase} open={open} onChange={accordionChange}/>
      ))}
    </Fragment>
  );
};

export default TestCaseAccordionList;