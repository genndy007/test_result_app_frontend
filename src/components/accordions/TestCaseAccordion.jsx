import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {Fragment} from "react";
import Box from "@mui/material/Box";


const TestCaseAccordionContent = ({testCase}) => {
  return (
    <Fragment sx={{display: "flex"}}>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ fontWeight: 700 , mb: 2}}>Pre-Conditions</Typography>
        <Typography sx={{fontWeight: 400}}>{testCase.precondition}</Typography>
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ fontWeight: 700 , mb: 2}}>Test Steps</Typography>
        {testCase.test_steps.map((testStep) => (
          <Typography>{testStep.order}: {testStep.content}</Typography>
        ))}
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <Typography sx={{ fontWeight: 700 , mb: 2}}>Post-Conditions</Typography>
        <Typography sx={{fontWeight: 400}}>{testCase.postcondition}</Typography>
      </Box>
    </Fragment>
  );
}

const TestCaseAccordion = ({testCase, open, onChange}) => {
  return (
    <Accordion expanded={open === testCase.id} onChange={onChange(testCase.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {testCase.name}
        </Typography>
        <Typography sx={{ color: 'text.secondary' }}>{testCase.description}</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{display: 'flex', justifyContent: 'space-between'}}>
        <TestCaseAccordionContent testCase={testCase}/>
      </AccordionDetails>
    </Accordion>
  );
};

export default TestCaseAccordion;