import * as React from "react";
import TestResultApp from "./apps/TestResultApp";
import AuthApp from "./apps/AuthApp";


function App() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(true);
  const logoutUser = () => {setIsAuthenticated(false)}
  const loginUser = () => {setIsAuthenticated(true)}
  return (
      <div className="App">
        {isAuthenticated ? <TestResultApp logoutFunc={logoutUser}/> : <AuthApp loginFunc={loginUser}/>}
      </div>
  );
}

export default App;