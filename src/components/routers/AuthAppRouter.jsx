import React from 'react';
import {Route, Routes} from "react-router";
import SignInPage from "../../pages/SignInPage";
import SignUpPage from "../../pages/SignUpPage";

const AuthAppRouter = ({loginFunc}) => {
  return (
    <Routes>
      <Route path="login" element={<SignInPage loginFunc={loginFunc}/>} />
      <Route path="signup" element={<SignUpPage/>} />
    </Routes>
  );
};

export default AuthAppRouter;