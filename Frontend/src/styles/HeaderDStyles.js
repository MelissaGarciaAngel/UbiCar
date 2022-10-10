import styled from "styled-components";
import logo1 from "../assets/logo.png";

export const HeaderC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 8vh;
  background-color: transparent;
  @media (max-width: 800px) {
    height: 10vh;
    justify-content: space-around;
    padding-top: 10px;
  }
  @media only screen and (max-width: 680px) {
    display: none;
  }
`;

export const SectionC = styled.section`
  margin: 15px 30px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  span{
    background-color: #F0572D;
    border-radius: 25px;
    padding: 10px 10px;
  }
`;

export const HeaderButton = styled.button`
  font-weight: 100;
  border: 1px solid #F0572D;
  background-color: #F0572D;
  color: white;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 2rem;
  width: 10rem;
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: white;
    border: none;
    color: #F0572D;
    font-weight: bold;
  }
`;

export const AdminButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  h4{
    font-size: 16px;
    align-self: center;
    :hover{
      color: white;
    }
  }
`

export const Logo = styled.div`
  background: url(${logo1});
  background-repeat: no-repeat;
  width: 210px;
  height: 55px;
  margin-top: 20px;
`

export const LineButton = styled.button`
  height: 40px;
  width: 2px;
  max-width: 2px;
  border: none;
  border-radius: 1px;
  background-color: #F0572D;
  opacity: 0.8;
  padding: 0;
`