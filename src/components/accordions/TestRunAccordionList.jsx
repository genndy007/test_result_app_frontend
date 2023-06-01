import React, {Fragment} from 'react';
import TestRunAccordion from "./TestRunAccordion";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const TestRunAccordionList = ({testRuns}) => {
  const [open, setOpen] = React.useState(false);

  const accordionChange = (card) => (e, isOpen) => {
    setOpen(isOpen ? card : false);
  };

  return (
    <Fragment>
      <Table>
        <TableBody>
          {testRuns.map((testRun) => (
            <TableRow>
              <TableCell style={{width: '90%'}}>
                <TestRunAccordion testRun={testRun} open={open} onChange={accordionChange}/>
              </TableCell>
              <TableCell>
                <Button><PictureAsPdfIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TestRunAccordionList;