import React from 'react';
import ProjectsTable from "../components/tables/ProjectsTable";
import {projects} from "../utils/TestingItems";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <ProjectsTable projects={projects}></ProjectsTable>
    </div>
  );
};

export default ProjectsPage;