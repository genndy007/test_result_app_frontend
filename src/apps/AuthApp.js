import React from 'react';
import SignInPage from "../pages/SignInPage";

const AuthApp = ({loginFunc}) => {
  return (
    <div className="AuthApp">
      <SignInPage/>
    </div>
  );
};

export default AuthApp;