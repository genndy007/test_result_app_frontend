import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Fragment} from "react";
import Box from "@mui/material/Box";
import TestRunContentTable from "../tables/TestRunContentTable";


const TestRunAccordion = ({testRun, open, onChange}) => {
  return (
    <Accordion expanded={open === testRun.id} onChange={onChange(testRun.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '67%', flexShrink: 0 }}>
          Run for '{testRun.test_suite.name}' at {testRun.timestamp}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>Result: {testRun.result}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TestRunContentTable testRun={testRun}/>
      </AccordionDetails>
    </Accordion>
  );
};

export default TestRunAccordion;