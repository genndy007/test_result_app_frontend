import React from "react";
import ResponsiveMenuAppBar from "./components/appbars/ResponsiveMenuAppBar";
import ActiveProjectUserAppBar from "./components/appbars/ActiveProjectUserAppBar";
import ProjectsTable from "./components/tables/ProjectsTable";


const projects = [
  {id: 1, name: "Central Database", description: "Main application of company", isActive: true},
  {id: 2, name: "Affiliate Management Portal", description: "Secondary for influencers", isActive: false},
  {id: 3, name: "Supplier Order App", description: "Secondary for suppliers", isActive: false},
]
function App() {
    return (
        <div className="App">
            <ActiveProjectUserAppBar projectName={projects[0].name} userName="Hennadii Kochev"/>
            <br/>
            <ResponsiveMenuAppBar/>
            <br/>
            <ProjectsTable projects={projects}/>
        </div>
    );
}

export default App;