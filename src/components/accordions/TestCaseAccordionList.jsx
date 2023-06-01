import React, {Fragment} from 'react';
import TestCaseAccordion from "./TestCaseAccordion";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';


const TestCaseAccordionList = ({testCases}) => {
  const [open, setOpen] = React.useState(false);

  const accordionChange = (card) => (e, isOpen) => {
    setOpen(isOpen ? card : false);
  };

  return (
    <Fragment>
      <Table>
        <TableBody>
          {testCases.map((testCase) => (
            <TableRow>
              <TableCell style={{width: '90%'}}>
                <TestCaseAccordion testCase={testCase} open={open} onChange={accordionChange}/>
              </TableCell>
              <TableCell>
                <Button><EditIcon/></Button>
                <Button><DeleteForeverIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default TestCaseAccordionList;