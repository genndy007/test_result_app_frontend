import React from 'react';
import ProjectsPage from "../../pages/ProjectsPage";
import TestCasesPage from "../../pages/TestCasesPage";
import TestSuitesPage from "../../pages/TestSuitesPage";
import TestRunsPage from "../../pages/TestRunsPage";
import {Route, Routes} from "react-router";

const TestResultAppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="projects" element={<ProjectsPage/>} />
      <Route path="test_cases" element={<TestCasesPage/>} />
      <Route path="test_suites" element={<TestSuitesPage/>}/>
      <Route path="test_runs" element={<TestRunsPage/>}/>

      <Route path="/settings" element={<div>Settings</div>} />
      <Route path="/logout" element={<div>Logout</div>} />
    </Routes>
  );
};

export default TestResultAppRouter;