import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  HeaderContainer,
  LHeader,
  RHeader,
  BodyContainer,
  LeftContainer,
  FormContainer,
  ReserveContainer,
  CalendarContainer,
  Schedule,
  Detail,
  MainButton,
  FormContainer2,
  FooterContainer,
  FooterItemContainer,
  FooterItem,
} from "./ReserveStyles";
import { useParams } from "react-router-dom";
import arrow from "../../assets/arrow.png";
/* import Calendar from "react-calendar"; */
import "./calendarStyles.css";
import TimePicker from "react-bootstrap-time-picker";
import Calendar from "../../components/Calendar";
import { useNavigate } from "react-router-dom";

const Reserve = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([{}]);
  const [hour, setHour] = useState();
  const [hour1, setHour1] = useState();
  const [cities, setCities] = useState([{}]);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCity2, setSelectedCity2] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [user, setUser] = useState({});
  const [formatedStartDate, setFormatedStartDate] = useState("");
  const [formatedEndDate, setFormatedEndDate] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.223.117.95:8080/producto/${id}`);
      const result = await response.json();
      setProduct(result);
      setImages(result.imagen);
    };
    request();
  }, [id]);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(`http://18.223.117.95:8080/ciudad`);
      const result = await response.json();
      setCities(result);
    };
    request();
  }, [id]);
  const updatedCities = [...cities].sort((a, b) => a.id - b.id);
  useEffect(() => {
    const request = async () => {
      const response = await fetch(
        `http://18.223.117.95:8080/usuario/email/${window.localStorage.getItem(
          "Email"
        )}`
      );
      const result = await response.json();
      setUser(result);
    };
    request();
  }, [id]);
  const handleHourChange = (newHour) => {
    let hour = Math.floor(newHour / 3600);
    let minutes = (newHour % 3600) / 60;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    setHour(`${hour}:${minutes}`);
  };
  const handleHourChange1 = (newHour) => {
    let hour = Math.floor(newHour / 3600);
    let minutes = (newHour % 3600) / 60;
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    setHour1(`${hour}:${minutes}`);
  };
  useEffect(() => {
    if (startDate && endDate) {
      let fStartDay = startDate.getDate();
      if (fStartDay < 10) {
        fStartDay = `0${fStartDay}`;
      }
      let fStartMonth = startDate.getMonth();
      if (fStartMonth < 10) {
        fStartMonth = `0${fStartMonth}`;
      }
      let fEndDay = endDate.getDate();
      if (fEndDay < 10) {
        fEndDay = `0${fEndDay}`;
      }
      let fEndMonth = endDate.getMonth();
      if (fEndMonth < 10) {
        fEndMonth = `0${fEndMonth}`;
      }
      setFormatedStartDate(
        `${fStartDay}-${fStartMonth}-${startDate.getFullYear()}`
      );
      setFormatedEndDate(`${fEndDay}-${fEndMonth}-${startDate.getFullYear()}`);
    }
  }, [startDate, endDate]);
  const handleReserve = () => {
    fetch("http://18.223.117.95:8080/reserva/guardar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("Token"),
      },
      body: JSON.stringify({
        horaInicio: hour,
        fechaFin: formatedEndDate,
        fechaInicio: formatedStartDate,
        producto: product,
        usuario: {
          id: user.id,
          nombre: user.nombre,
          apellido: user.apellido,
          email: user.email,
          contrasenia: user.contrasenia,
          rol:{
            id: 2,
            nombre: 'USUARIO'
          }
        }
      }),
    }).then((response) => {
      if (response.status < 300) {
        navigate("/product/:id/reserve/success");
      } else {
        alert(`Error con respuesta: ${response.status}`);
      }
    });
  };
  return (
    <ReserveContainer>
      <HeaderContainer>
        <LHeader>
          <p>{product.categoria && product.categoria.titulo}</p>
          <h1>{product && product.titulo}</h1>
        </LHeader>
        <RHeader>
          <Link to="/">
            <img src={arrow} alt="home" className="arrow" />
          </Link>
        </RHeader>
      </HeaderContainer>
      <BodyContainer>
        <LeftContainer>
          <FormContainer>
            <h2>Completa tus datos</h2>
            <form>
              <label>
                Nombre
                <input
                  required
                  type="name"
                  value={window.localStorage.getItem("Username")}
                  name="name"
                  readOnly
                />
              </label>
              <label>
                Apellido
                <input
                  required
                  type="lastname"
                  name="lastname"
                  value={window.localStorage.getItem("Lastname")}
                  readOnly
                />
              </label>
              <label>
                Correo electronico
                <input
                  required
                  type="e-mail"
                  value={window.localStorage.getItem("Email")}
                  readOnly
                  name="email"
                />
              </label>
              <label id="label1">
                Ciudad
                <input
                  required
                  type="city"
                  value={`${product?.ciudad?.direccion}`}
                  name="ciudad"
                  readOnly
                />
              </label>
            </form>
          </FormContainer>
          <CalendarContainer>
            <h2>Selecciona tu fecha de reserva</h2>
            <Calendar
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          </CalendarContainer>
          <Schedule>
            <h2>Tus horarios</h2>
            <FormContainer2>
              <form>
                <div class="form-title">
                  <h4>
                    Tu auto va a estar listo para ti entra las {hour} y {hour1}
                  </h4>
                </div>
                <label>
                  Indica tu horario estimado de recogida
                  <TimePicker
                    start="00:00"
                    end="23:59"
                    step={60}
                    value={hour}
                    onChange={handleHourChange}
                  />
                </label>
                <label>
                  Indica tu lugar de recogida
                  <select
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedCity(value);
                    }}
                    required
                  >
                    <option value="S">Recogida</option>
                    {updatedCities.map((city, index) => (
                      <option key={index} value={city.direccion}>
                        {city.localidad + " , " + city.provincia}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  Inidica tu horario estimado de entrega
                  <TimePicker
                    start="00:00"
                    end="23:59"
                    step={60}
                    value={hour1}
                    onChange={handleHourChange1}
                  />
                </label>
                <label>
                  Indica tu lugar de entrega
                  <select
                    onChange={(e) => {
                      const value = e.target.value;
                      setSelectedCity2(value);
                    }}
                    required
                  >
                    <option value="S">Devolucion</option>
                    {updatedCities.map((city, index) => (
                      <option key={index} value={city.direccion}>
                        {city.localidad + " , " + city.provincia}
                      </option>
                    ))}
                  </select>
                </label>
              </form>
            </FormContainer2>
          </Schedule>
        </LeftContainer>
        <Detail>
          <h2 className="htop">Detalle de la reserva</h2>
          <img src={images && images[0].urlImg} alt="auto" />
          <div>
            <p className="pcategory">
              {product.categoria && product.categoria.titulo}
            </p>
            <h2 className="hbottom">{product && product.titulo}</h2>
            <p className="plocation">
              {product.ciudad && product.ciudad.provincia}
            </p>
            <p className="pstars">
              Fecha de recogida:{" "}
              {`${startDate.getDate()}/${startDate.getMonth()}/${startDate.getFullYear()}`}
            </p>
          </div>
          <div>
            <p className="paccion">Horario Recogida: {hour}</p>
            <p className="plugar">Lugar: {selectedCity}</p>
          </div>
          <div>
            <p className="paccion">Horario Entrega: {hour1} </p>
            <p className="plugar">Lugar: {selectedCity2}</p>
          </div>
          <MainButton onClick={handleReserve}>Confirmar reserva</MainButton>
        </Detail>
      </BodyContainer>
      <FooterContainer>
        <h2>Qué tenés que saber</h2>
        <FooterItemContainer>
          <FooterItem>
            <h4>Seguros</h4>
            <p>
              Todos nuestros autos cuentan con Seguro de Vida todo Riesgo,
              Seguro de Daños Parciales, Asistencia 24/7 con la aseguradora y
              kilometraje ilimitado.
            </p>
          </FooterItem>
          <FooterItem>
            <h4>Tanque o Carga</h4>
            <p>
              El auto debe entregarse con el tanque o la batería en un 80% de
              capacidad, tal cual le fue entregado. En caso de no ser así se
              descontará un porcentaje equivalente al faltante del depósito.
            </p>
          </FooterItem>
          <FooterItem>
            <h4>Cancelacion</h4>
            <p>
              La cancelación no tendrá costo si se hace con 3 días de
              anticipación, de lo contradio pagarás el 20% del alquiler. La
              devolución se hará efectiva una vez aplicadas las políticas de
              cancelación al medio original de pago dentro de 30 días hábiles.
            </p>
          </FooterItem>
        </FooterItemContainer>
      </FooterContainer>
    </ReserveContainer>
  );
};

export default Reserve;
