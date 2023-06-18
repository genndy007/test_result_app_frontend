import React from 'react';
import ActiveProjectUserAppBar from "../components/appbars/ActiveProjectUserAppBar";
import {projects} from "../utils/TestingItems";
import MainAppBar from "../components/appbars/MainAppBar/MainAppBar";
import TestResultAppRouter from "../components/routers/TestResultAppRouter";

const TestResultApp = ({logoutFunc}) => {
  return (
    <div className="TestResultApp">
      <ActiveProjectUserAppBar/>
      <br/>
      <MainAppBar logoutFunc={logoutFunc}/>
      <br/>
      <TestResultAppRouter/>
    </div>
  );
};

export default TestResultApp;