import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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
      <AccordionDetails>
        <Typography>
          Some content
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default TestCaseAccordion;