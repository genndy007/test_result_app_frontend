import React from "react";
import {Route, Routes} from "react-router";

import ResponsiveMenuAppBar from "./components/appbars/ResponsiveMenuAppBar";
import ActiveProjectUserAppBar from "./components/appbars/ActiveProjectUserAppBar";

import ProjectsPage from "./pages/ProjectsPage";
import TestCasesPage from "./pages/TestCasesPage";
import TestSuitesPage from "./pages/TestSuitesPage";
import TestRunsPage from "./pages/TestRunsPage";

import {projects} from "./utils/TestingItems"

function App() {
    return (
        <div className="App">
          <ActiveProjectUserAppBar projectName={projects[0].name} userName="Hennadii Kochev"/>
          <br/>
          <ResponsiveMenuAppBar/>
          <br/>
          <Routes>
            <Route path="/" element={<div>Home</div>} />
            <Route path="projects" element={<ProjectsPage/>} />
            <Route path="test_cases" element={<TestCasesPage/>} />
            <Route path="test_suites" element={<TestSuitesPage/>}/>
            <Route path="test_runs" element={<TestRunsPage/>}/>
          </Routes>
        </div>
    );
}

export default App;