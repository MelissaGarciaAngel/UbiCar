import React from "react";
import { FooterC, FooterUl, FooterP } from "../styles/FooterStyles";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <FooterC>
      <FooterUl>
        <li>@2022</li>
        <li>UbiCar</li>
      </FooterUl>
      <FooterUl>
        <FooterP><Icon icon="akar-icons:facebook-fill" />
        <Icon icon="akar-icons:twitter-fill" />
        <Icon icon="akar-icons:instagram-fill" /></FooterP>
      </FooterUl>
    </FooterC>
  );
};

export default Footer;