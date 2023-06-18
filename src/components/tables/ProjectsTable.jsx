import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SetActiveProjectButton from "../buttons/SetActiveProjectButton";
import Button from "@mui/material/Button";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {StyledTableCell, StyledTableRow} from "./Common";


const ProjectsTable = ({projects}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="projects table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Project Name</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
            <StyledTableCell align="center">Is Active</StyledTableCell>
            <StyledTableCell align="center">Change state</StyledTableCell>
            <StyledTableCell align="center">Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {projects.map((project) => (
            <StyledTableRow key={project.id}>
              <StyledTableCell component="th" scope="row">
                {project.name}
              </StyledTableCell>
              <StyledTableCell align="center">{project.description}</StyledTableCell>
              <StyledTableCell align="center">{project.is_active ? "Yes" : "No"}</StyledTableCell>
              <StyledTableCell align="center">{!project.is_active ? <SetActiveProjectButton projectId={project.id}/> : null}</StyledTableCell>
              <StyledTableCell align="center">
                <Button><EditIcon/></Button>
                <Button><DeleteForeverIcon/></Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProjectsTable;