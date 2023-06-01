import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';

import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const TestCasesGrid = ({testCases}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {testCases.map((testCase) => (
          <Grid item xs={6}>
            <Item>
              Case: {testCase.name}
              <br/>
              <br/>
              About: {testCase.description}
            </Item>

          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


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
        <Typography sx={{ width: '40%', flexShrink: 0 }}>
          {testSuite.description}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <TestCasesGrid testCases={testSuite.testCases}/>
      </AccordionDetails>
    </Accordion>
  );
};

export default TestSuiteAccordion;