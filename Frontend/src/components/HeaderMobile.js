import React from "react";
import {
  HeaderC,
  SectionC,
  HeaderButton,
  HeaderButtonDeploy,
  Logo,
  MenuButton,
  DeployMenu,
  AdminButton,
  LineButton,
} from "../styles/HeaderMStyles";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Icon } from '@iconify/react'

const Header = ({ isLogged, setIsLogged }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("UserType") === "ADMINISTRADOR") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [isLogged]);
  const [deployMenu, setDeployMenu] = useState(false);
  useEffect(() => {
    if (window.localStorage.getItem("Token")) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [isLogged, setIsLogged]);
  const menu = () => {
    return (
      <DeployMenu>
        <MenuButton onClick={() => setDeployMenu(false)} />
        <Link to="/login">
          <HeaderButtonDeploy>Iniciar Sesión</HeaderButtonDeploy>
        </Link>
        <Link to="/register">
          <HeaderButtonDeploy>Registrarse</HeaderButtonDeploy>
        </Link>
      </DeployMenu>
    );
  };
  const handleLoggin = () => {
    if (window.localStorage.getItem("Token")) {
      return (
        <SectionC>
          {isAdmin && (
            <>
            <Link to={"/administracion"}>
              <AdminButton>
                <h4>Admin</h4>
              </AdminButton>
            </Link>
            <LineButton></LineButton>
            </>
          )}
          {!isAdmin && (
            <>
            <Link to={"/usuarioReserva"}>
              <AdminButton>
                <h4>Reservas</h4>
              </AdminButton>
            </Link>
            <LineButton></LineButton>
            </>
          )}
          <span>{`${window.localStorage
            .getItem("Username")
            .charAt(0)
            .toUpperCase()}${window.localStorage
            .getItem("Lastname")
            .charAt(0)
            .toUpperCase()}`}</span>
          <h3>{`Hola ${window.localStorage.getItem("Username")}`}</h3>
          <HeaderButton
            onClick={() => {
              setIsLogged(false);
              window.localStorage.removeItem("Token");
            }}
          >
            <Icon icon="bx:log-out" color="black"/>
          </HeaderButton>
        </SectionC>
      );
    } else {
      return (
        <SectionC>
          <MenuButton onClick={() => setDeployMenu(true)} />
          {deployMenu ? menu() : null}
        </SectionC>
      );
    }
  };
  return (
    <HeaderC>
      <SectionC>
        <Link to="/">
          <Logo />
        </Link>
      </SectionC>
      {handleLoggin()}
    </HeaderC>
  );
};

export default Header;
