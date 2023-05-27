import * as React from "react";
import TestResultApp from "./apps/TestResultApp";


function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const logoutUser = () => {setIsAuthenticated(false)}
  const loginUser = () => {setIsAuthenticated(true)}
  return (
      <div className="App">
        {isAuthenticated ? (
          <TestResultApp logoutFunc={logoutUser}/>
        ) : "Not Authenticated"}
      </div>
  );
}

export default App;