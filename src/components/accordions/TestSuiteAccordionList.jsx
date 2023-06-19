import React, {Fragment} from 'react';
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
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
  const [modalOpen, setModalOpen] = React.useState(false);
  const [testSuiteInModal, setTestSuiteInModal] = React.useState({
    name: 'default',
    test_cases: [],
  })

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
                <Button onClick={() => {setTestSuiteInModal(testSuite); setModalOpen(true);}}><PlayCircleOutlineIcon/></Button>
              </TableCell>
              <TableCell>
                <Button><EditIcon/></Button>
                <Button><DeleteForeverIcon/></Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TestRunDialog open={modalOpen} setOpen={setModalOpen} testSuite={testSuiteInModal}/>
    </Fragment>
  );
};


const TestRunDialog = ({open, setOpen, testSuite}) => {
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle>Run for {testSuite.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Total Run result:
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="result"
          label="Result"
          fullWidth
          variant="standard"
        />
        <br/>
        <br/>
        {testSuite.test_cases.map((testCase) => (
          <div style={{ marginTop: "3em"}}>
            <DialogContentText sx={{fontWeight: 700}}>
              {testCase.name}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id={testCase.id}
              label="Status"
              fullWidth
              variant="standard"
            />
          </div>
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button onClick={() => setOpen(false)}>Confirm</Button>
      </DialogActions>
    </Dialog>
  )
}


export default TestSuiteAccordionList;