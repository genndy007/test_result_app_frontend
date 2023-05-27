import React from 'react';
import ActiveProjectUserAppBar from "../components/appbars/ActiveProjectUserAppBar";
import {projects} from "../utils/TestingItems";
import MainAppBar from "../components/appbars/MainAppBar/MainAppBar";
import TestResultAppRouter from "../components/routers/TestResultAppRouter";

const TestResultApp = () => {
  return (
    <div className="TestResultApp">
      <ActiveProjectUserAppBar projectName={projects[0].name} userName="Hennadii Kochev"/>
      <br/>
      <MainAppBar/>
      <br/>
      <TestResultAppRouter/>
    </div>
  );
};

export default TestResultApp;