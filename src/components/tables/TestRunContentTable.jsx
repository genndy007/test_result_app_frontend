import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SetActiveProjectButton from "../buttons/SetActiveProjectButton";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {StyledTableCell, StyledTableRow} from "./Common";

const TestRunContentTable = ({testRun}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="test runs table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Test Case Name</StyledTableCell>
            <StyledTableCell align="center">Test Case Description</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {testRun.testCases.map((testCase) => (
            <StyledTableRow key={testCase.id}>
              <StyledTableCell align="center">{testCase.name}</StyledTableCell>
              <StyledTableCell align="center">{testCase.description}</StyledTableCell>
              <StyledTableCell align="center">{testCase.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TestRunContentTable;