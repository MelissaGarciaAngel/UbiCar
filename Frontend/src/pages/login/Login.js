import React, { useState, useEffect } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import { useNavigate } from "react-router-dom";
import { LoginC, LoginXButton } from "./LoginStyles";


const Login = ({argument, setIsLogged}) => {
  const navigate = useNavigate();
  const [view, setView] = useState();
  useEffect(() => {
    setView(argument)
    }, [argument])
  const handleView = (view) => {
    setView(view);
  }
  return (
    <LoginC>
      <LoginXButton onClick={()=> navigate('/')} >X</LoginXButton>
      {view === "login" ? (
        <LoginForm handleView={handleView} setIsLogged={setIsLogged}  />
      ) : view === "register" ? (
        <RegisterForm handleView={handleView} setIsLogged={setIsLogged} />
      ) : null}
    </LoginC>
  );

}

export default Login;