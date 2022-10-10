import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import {
  ProductContainer,
  HeaderContainer,
  LHeader,
  RHeader,
  ImageContainer,
  DescriptionContainer,
  DescH2,
  DescpP,
  InfoDiv,
  LeftDiv,
  FeaturesContainer,
  FeatureImg,
  MyH2,
  CalendarContainer,
  CalendarSection,
  CalendarItem,
  FooterContainer,
  FooterItemContainer,
  FooterItem,
  FooterItem2,
  FondoDiv,
  FooterItem3,
} from "./ProductStyles";
import { BsFillPinMapFill } from "react-icons/bs";
import arrow from "../../assets/arrow.png";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ProductGallery from "./ProductGallery";
import Calendar from "react-calendar";
import "./calendarStyles.css";
import { Rating } from "react-simple-star-rating";
import ProductChoice from "./ProductChoice";
import ImgAsist from "../../assets/Asistencia.png";
import ImgSeguro from "../../assets/KmIlimitado.png";
import ImgKm from "../../assets/SeguroTodoRiesgo.png";
import { Skeleton } from "@mui/material";

const Product = ({ images, product, isLogged, features }) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [rating, setRating] = useState(0);
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [showModal, setShowModal] = useState(false);
  const [showChoice, setShowChoice] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [reserves, setReserves] = useState([]);
  const [disabledDates, setDisabledDates] = useState([]);
  const moment = require("moment");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.removeProperty("overflow");
    }
  }, [showModal]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const AddDisableDates = (start, end) => {
    setDisabledDates((current) => [...current, start]);
    setDisabledDates((current) => [...current, end]);
  };
  useEffect(() => {
    let invalidDates = [{}];
    if (!loading) {
      const request = async () => {
        const response = await fetch(
          `http://18.223.117.95:8080/reserva/producto/${id}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + window.localStorage.getItem("Token"),
            },
          }
        );
        try {
          const result = await response.json();
          setReserves(result);
        } catch (error) {
          console.log(error);
        }
      };
      for (let index = 0; index < reserves.length; index++) {
        const startDate = reserves[index].fechaInicio;
        const endDate = reserves[index].fechaFin;
        let formatedStartDate = startDate.replaceAll("-", "/");
        if (formatedStartDate.charAt() === 10) {
          formatedStartDate =
            formatedStartDate.slice(0, 3) + formatedStartDate.slice(4);
          if (formatedStartDate.charAt(0) === "0") {
            formatedStartDate = formatedStartDate.substring(1);
          }
        }
        const date = moment(startDate, "DD/MM/YYYY").format(
          "YYYY-MM-DD[T]HH:mm:ss"
        );

        let formatedEndDate = endDate.replaceAll("-", "/");
        if (formatedEndDate.length === 10) {
          formatedEndDate =
            formatedEndDate.slice(0, 3) + formatedEndDate.slice(4);
          if (formatedEndDate.charAt(0) === "0") {
            formatedEndDate = formatedEndDate.substring(1);
          }
        }
        const date2 = moment(endDate, "DD/MM/YYYY").format(
          "YYYY-MM-DD[T]HH:mm:ss"
        );
        const myDates = { start: date, end: date2 };
        invalidDates.push(myDates);
        AddDisableDates(formatedStartDate, formatedEndDate);
      }
      window.localStorage.setItem("Dates", JSON.stringify(invalidDates));
      request();
    }
  }, [loading, id, reserves, moment]);

  const handleModal = (index) => {
    setCurrentIndex(index);
    setShowModal(true);
  };
  const hanldeRating = (rate) => {
    setRating(rate);
  };
  const loader = () => {
    return (
      <ProductContainer>
        <br />
        <br />
        <Skeleton
          sx={{ bgcolor: "grey.200" }}
          variant="rounded"
          width={1800}
          height={80}
        >
          <HeaderContainer></HeaderContainer>
        </Skeleton>
        <br />
        <Skeleton
          sx={{ bgcolor: "grey.200" }}
          variant="rounded"
          width={1700}
          height={500}
        >
          <ImageContainer />
        </Skeleton>
        <br />
        <br />
        <br />
        <Skeleton
          sx={{ bgcolor: "grey.200" }}
          variant="rounded"
          width={1700}
          height={300}
        >
          <FeaturesContainer></FeaturesContainer>
        </Skeleton>
        <br />
        <Skeleton
          sx={{ bgcolor: "grey.200" }}
          variant="rounded"
          width={1700}
          height={300}
        >
          <DescriptionContainer></DescriptionContainer>
        </Skeleton>
        <br />
        <Skeleton sx={{ bgcolor: "grey.200" }} width={1700} height={400}>
          <CalendarContainer></CalendarContainer>
        </Skeleton>

        <FooterContainer>
          <Skeleton
            sx={{ bgcolor: "grey.200" }}
            width={1700}
            height={600}
          ></Skeleton>
        </FooterContainer>
      </ProductContainer>
    );
  };
  if (loading) {
    return loader();
  } else {
    return (
      <ProductContainer>
        <HeaderContainer>
          <LHeader>
            <p>{product.categoria && product.categoria.titulo}</p>
            <h1>{product && product.titulo}</h1>
            <div>
              <BsFillPinMapFill />
              <p>{product && product.ciudad && product.ciudad.localidad}</p>
            </div>
          </LHeader>
          <RHeader>
            <Link to="/">
              <img src={arrow} alt="home" className="arrow" />
            </Link>
            <Rating
              onClick={hanldeRating}
              ratingValue={rating}
              size={windowSize.innerWidth > 700 ? 25 : 15}
              fillColor={"#f0572d"}
              allowHalfIcon={true}
              transition={true}
            />
          </RHeader>
        </HeaderContainer>
        {showModal && (
          <ProductGallery
            arrayImg={images.slice(0, 5)}
            current={currentIndex}
            handleClose={() => setShowModal(false)}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        <ImageContainer>
          {images.slice(0, 5).map((pic, index) => (
            <div
              className={index === 0 ? "main-image" : "image"}
              onClick={() => handleModal(index)}
              key={index}
            >
              <img src={pic.urlImg} alt={pic.titulo} />
            </div>
          ))}
        </ImageContainer>
        <DescriptionContainer>
          <LeftDiv>
            <DescH2>Disfruta un automóvil pensado para tus necesidades</DescH2>
            <DescpP>{product && product.descripcion}</DescpP>
          </LeftDiv>
          <InfoDiv>
            <div>
              <img src={ImgAsist} alt="asistencia" />
              <p>Asistencia 24/7</p>
            </div>
            <div>
              <img src={ImgSeguro} alt="seguro" />
              <p>Seguro todo riesgo</p>
            </div>
            <div>
              <img src={ImgKm} alt="km" />
              <p>Kilometraje ilimitado</p>
            </div>
          </InfoDiv>
        </DescriptionContainer>
        <FondoDiv>
          <FeaturesContainer>
            <h2>¿Qué ofrece este auto?</h2>
            <div>
              {features &&
                features.map((feature, index) => (
                  <p key={index}>
                    <FeatureImg src={feature.icono} alt={feature.nombre} />
                    {`${feature.nombre}: ${feature.valor}`}
                  </p>
                ))}
            </div>
          </FeaturesContainer>
          <MyH2>Fechas disponibles</MyH2>
          <CalendarContainer>
            <Calendar
              showDoubleView={windowSize.innerWidth > 650 ? true : false}
              next2Label={null}
              prev2Label={null}
              tileDisabled={({ date }) => {
                const formatedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
                return disabledDates.some((d) => d === formatedDate);
              }}
            />
            <CalendarSection>
              <CalendarItem>
                <h3>Agregá tus fechas de viaje para obtener precios exactos</h3>
                <button
                  onClick={() => {
                    if (window.localStorage.getItem("Token")) {
                      navigate(`/product/${product.id}/reserve`);
                    } else {
                      setShowChoice(true);
                    }
                  }}
                >
                  Iniciar reserva
                </button>
                {showChoice && (
                  <ProductChoice handleClose={() => setShowChoice(false)} />
                )}
              </CalendarItem>
            </CalendarSection>
          </CalendarContainer>
        </FondoDiv>
        <div>
          <p></p>
        </div>
        <FooterContainer>
          <h2>Qué tenés que saber</h2>
          <FooterItemContainer>
            <FooterItem2>
              <h4>Documentacion</h4>
              <ul>
                <dd>Pasaporte o carnet de identidad</dd>
                <dd>Permiso de conducir</dd>
                <dd>Tarjeta de crédito o débito</dd>
              </ul>
            </FooterItem2>
            <FooterItem3>
              <h4>Deposito de seguridad</h4>
              <p>
                Durante la recogida, al conductor principal se le bloqueará un
                depósito de seguridad seguridad de ARS 1.295 en su tarjeta de
                crédito o débito.
              </p>
            </FooterItem3>
            <FooterItem>
              <h4>Política de daños</h4>
              <p>
                Si la carrocería del vehículo resulta dañada, estarás protegido
                por la Cobertura ARS 1.200 parcial por Colisión. La Cobertura
                Parcial por Colisión sólo será válida si se cumplen los términos
                del contrato de alquiler.
              </p>
            </FooterItem>
          </FooterItemContainer>
        </FooterContainer>
      </ProductContainer>
    );
  }
};

export default Product;
