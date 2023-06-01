import React, {Fragment} from 'react';
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from "@mui/material/TableCell";
import TestSuiteAccordion from "./TestSuiteAccordion";


const TestSuiteAccordionList = ({testSuites}) => {
  const [open, setOpen] = React.useState(false);

  const accordionChange = (card) => (e, isOpen) => {
    setOpen(isOpen ? card : false);
  };

  return (
    <Fragment>
      <Table>
        <TableBody>
          {testSuites.map((testSuite) => (
            <TableRow>
              <TableCell style={{width: '90%'}}>
                <TestSuiteAccordion testSuite={testSuite} open={open} onChange={accordionChange}/>
              </TableCell>
              <TableCell>
                <Button>Case+</Button>
                <Button><PlayCircleOutlineIcon/></Button>
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

export default TestSuiteAccordionList;