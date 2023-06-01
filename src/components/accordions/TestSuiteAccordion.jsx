import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {Fragment} from "react";
import Box from "@mui/material/Box";

import Button from "@mui/material/Button";


const TestSuiteAccordion = ({testSuite, open, onChange}) => {
  return (
    <Accordion expanded={open === testSuite.id} onChange={onChange(testSuite.id)}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: '33%', flexShrink: 0 }}>
          {testSuite.name}
        </Typography>
        <Typography>
          <Button>Add Case</Button>
          <Button><PlayCircleOutlineIcon/></Button>
        </Typography>
      </AccordionSummary>
    </Accordion>
  );
};

export default TestSuiteAccordion;