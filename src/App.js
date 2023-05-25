import React from "react";

import ResponsiveMenuAppBar from "./components/appbars/ResponsiveMenuAppBar";
import ActiveProjectUserAppBar from "./components/appbars/ActiveProjectUserAppBar";
import MainRouter from "./components/MainRouter";

import {projects} from "./utils/TestingItems"

function App() {
    return (
        <div className="App">
          <ActiveProjectUserAppBar projectName={projects[0].name} userName="Hennadii Kochev"/>
          <br/>
          <ResponsiveMenuAppBar/>
          <br/>
          <MainRouter/>
        </div>
    );
}

export default App;