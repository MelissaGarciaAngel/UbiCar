import React, { useEffect, useState } from "react";
import { MainDiv, SecondDiv, CardDiv, LowerDiv } from "./UsuarioReserveStyle";
import { Link } from "react-router-dom";

const UsuarioReserva = () => {
  const id = window.localStorage.getItem("ID");
  const [reserves, setReserves] = useState();
  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `http://18.223.117.95:8080/reserva/usuario/${id}`
      );
      const result = await response.json();
      setReserves(result);
    };
    request();
  }, [id]);
  return (
    <MainDiv>
      <h1>Reservas</h1>
      {reserves?.length > 0 && (
        <SecondDiv>
          {reserves.map((r, index) => (
            <CardDiv key={index}>
              <h1>{reserves[index].producto.titulo}</h1>
              <img
                src={reserves[index].producto.imagen[0].urlImg}
                alt={reserves[index].producto.imagen[0].titulo}
              />
              <LowerDiv>
                <div>
                  <p>{`Inicio: ${reserves[index].fechaInicio} `}</p>
                  <p>{`Fin: ${reserves[index].fechaFin} `}</p>
                </div>
                <Link to={`/product/${reserves[index].producto.id}`}>
                  <button>Ver producto</button>
                </Link>
              </LowerDiv>
            </CardDiv>
          ))}
        </SecondDiv>
      )}
    </MainDiv>
  );
};

export default UsuarioReserva;
