import React from 'react';
import AuthAppRouter from "../components/routers/AuthAppRouter";

const AuthApp = ({loginFunc}) => {
  return (
    <div className="AuthApp">
      <AuthAppRouter loginFunc={loginFunc}/>
    </div>
  );
};

export default AuthApp;