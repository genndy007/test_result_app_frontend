import React from 'react';
import ProjectsTable from "../components/tables/ProjectsTable";
import {projects} from "../utils/TestingItems";
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";

const ProjectsPage = () => {
  return (
    <div className="projects">
      <PageHeadingAppBar name={"Projects"}/>
      <ProjectsTable projects={projects}></ProjectsTable>
    </div>
  );
};

export default ProjectsPage;