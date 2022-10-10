import React from "react";
import { Icon } from "@iconify/react";
import "./footer2.css";

const Footer = () => {
    return (

        <div className="footerComponent">
        <div className="containerImg">
            <img className="redCar" src="https://ubicarbd.s3.us-east-2.amazonaws.com/util/redCar2.png"></img>
        </div>
        <div className="footerInfo">
            <section className="footerLogo">
                <img src="https://ubicarbd.s3.us-east-2.amazonaws.com/logos/ubicar2.svg" className="imgLogo" alt="logo"></img>
                <p>©2022 UbiCar ALL RIGTHS RESERVED</p>
            </section>
            <section className="footerContent">
                <div>
                    <h3>POLÍTICAS</h3>
                    <ul>
                        <li><a>Asistencia 24/7</a></li>
                        <li><a>Cancelación y devolución</a></li>
                        <li><a>Depósito de seguridad</a></li>
                        <li><a>Documentación</a></li>
                        <li><a>Política combustible/carga</a></li>
                        <li><a>Política de daños</a></li>
                        <li><a>Seguro de vida todo riesgo</a></li>
                    </ul>
                </div>
                <div className="linksIzq">
                    <h3>PRODUCTOS</h3>
                    <ul>
                        <li><a>Deportivos</a></li>
                        <li><a>Ecológicos</a></li>
                        <li><a>Económicos</a></li>
                        <li><a>Lujosos</a></li>
                    </ul>
                    <h3>REDES</h3>
                    <div className="iconsFooter">
                        <Icon className="iconRedes" icon="akar-icons:facebook-fill" />
                        <Icon className="iconRedes" icon="akar-icons:twitter-fill" />
                        <Icon className="iconRedes" icon="akar-icons:instagram-fill" />
                        <Icon className="iconRedes" icon="akar-icons:linkedin-box-fill" />
                    </div>
                </div>
            </section>
        </div>

    </div>
    
);
};

export default Footer;

/*
        <div class="container">
            <div class="banner">
                <img className="redCar" src="https://ubicarbd.s3.us-east-2.amazonaws.com/util/BannerFooterAutoRojo.png"></img>
            </div>

            <div class="footer">
                <div class="logo">
                    <div className="logos">                    
                    <img src="https://ubicarbd.s3.us-east-2.amazonaws.com/logos/ubicar2.svg"></img>
                    <p>©2022 UbiCar ALL RIGTHS RESERVED</p>
                    </div>

                </div>

                <div class="links">
                    <div class="politicas">
                        <h3>POLÍTICAS</h3>
                        <ul>
                            <li><a>Asistencia 24/7</a></li>
                            <li><a>Cancelación y devolución</a></li>
                            <li><a>Depósito de seguridad</a></li>
                            <li><a>Documentación</a></li>
                            <li><a>Política combustible/carga</a></li>
                            <li><a>Política de daños</a></li>
                            <li><a>Seguro de vida todo riesgo</a></li>
                        </ul>
                    </div>

                    <div class="productosRedes">
                        <h3>PRODUCTOS</h3>
                        <ul>
                            <li><a>Deportivos</a></li>
                            <li><a>Ecológicos</a></li>
                            <li><a>Económicos</a></li>
                            <li><a>Lujosos</a></li>
                        </ul>
                        <h3>REDES</h3>
                            <Icon  className="iconsRedes" icon="akar-icons:facebook-fill" />
                            <Icon  className="iconsRedes" icon="akar-icons:twitter-fill" />
                            <Icon  className="iconsRedes" icon="akar-icons:instagram-fill" />
                            <Icon  className="iconsRedes" icon="akar-icons:linkedin-box-fill" />

                    </div>
                </div>
            </div>

        </div>
        );
};

export default Footer;
        */