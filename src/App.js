import React from "react";
import ResponsiveMenuAppBar from "./components/ResponsiveMenuAppBar";
import ActiveProjectUserAppBar from "./components/ActiveProjectUserAppBar";

function App() {
    return (
        <div className="App">
            <ActiveProjectUserAppBar projectName="Equipment Cloud" userName="Hennadii Kochev"/>
            <br/>
            <ResponsiveMenuAppBar/>
            App works!
        </div>
    );
}

export default App;