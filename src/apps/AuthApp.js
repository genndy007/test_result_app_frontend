import React from 'react';
import SignInPage from "../pages/SignInPage";

const AuthApp = ({loginFunc}) => {
  return (
    <div className="AuthApp">
      <SignInPage loginFunc={loginFunc}/>
    </div>
  );
};

export default AuthApp;