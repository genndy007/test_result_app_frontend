import React from 'react';
import Button from "@mui/material/Button";
import {setActiveProject} from "../../api/projects";

const SetActiveProjectButton = (projectId) => {
  // make some query to db on click
  return (
    <Button variant="contained" onClick={async () => {await setActiveProject(projectId.projectId)}}>Make active</Button>
  );
};

export default SetActiveProjectButton;