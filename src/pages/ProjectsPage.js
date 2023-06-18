import {useState, useEffect} from 'react';

import ProjectsTable from "../components/tables/ProjectsTable";
import PageHeadingAppBar from "../components/appbars/PageHeadingAppBar";
import {getProjects} from "../api/projects";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getProjects();
      const projects = data.projects;
      setProjects(projects);
    })();
  }, [])

  return (
    <div className="projects">
      <PageHeadingAppBar name={"Projects"}/>
      <ProjectsTable projects={projects}></ProjectsTable>
    </div>
  );
};

export default ProjectsPage;