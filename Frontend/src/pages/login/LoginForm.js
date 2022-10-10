import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FormDiv, UserForm2, MainButton, SecondButton } from "./LoginStyles";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ handleView, setIsLogged }) => {
  const [email, setEmail] = useState("");
  const [contrasenia, setContrasenia] = useState("");
  const [token, setToken] = useState();
  const [username, setUsername] = useState("");
  const [lastname, setLastname] = useState("");
  const [userType, setUserType] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const loginValues = {
      email: email,
      contrasenia: contrasenia,
    };
    fetch("http://18.223.117.95:8080/auth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(loginValues),
    }).then((response) => {
      if (response.status === 200) {
        const json = response.json().then((resp) => {
          setToken(resp.respuesta.token);
        });
        return json;
      } else {
        alert(
          "Lamentablemente no ha podido iniciar sesión. Por favor intente más tarde"
        );
      }
    });
  };
  useEffect(() => {
    if (token) {
      const request = async () => {
        const response = await fetch(
          `http://18.223.117.95:8080/usuario/email/${email}`
        );
        const result = await response.json();
        setUsername(result.nombre);
        setLastname(result.apellido);
        setUserType(result.rol.nombre)
        window.localStorage.setItem("ID", result.id)
      };
      request();
      window.localStorage.setItem("Token", token);
      window.localStorage.setItem("Username", username);
      window.localStorage.setItem("Lastname", lastname);
      window.localStorage.setItem("Email", email)
      window.localStorage.setItem("UserType", userType);
      if (window.localStorage.getItem("Username")) {
        setIsLogged(true);
        navigate("/")
      }
    }
  }, [token, setIsLogged, email, username, lastname, navigate, userType]);
  return (
    <FormDiv>
      <h2>Iniciar Sesion</h2>
      <UserForm2 onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            required
            type="text"
            placeholder="e-mail"
            name="email"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </label>
        <label>
          Contraeña:
          <input
            required
            type="password"
            minLength={4}
            placeholder="password"
            name="password"
            onChange={(event) => setContrasenia(event.target.value)}
            value={contrasenia}
          />
        </label>
        <MainButton type="submit">Ingresar</MainButton>
      </UserForm2>
      <p>
        ¿Aún no tienes cuenta?
        <SecondButton onClick={() => handleView("register")}>
          Registrate
        </SecondButton>{" "}
      </p>
    </FormDiv>
  );
};

export default LoginForm;
