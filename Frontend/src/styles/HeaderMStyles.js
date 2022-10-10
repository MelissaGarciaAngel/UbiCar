import styled from "styled-components";
import logo2 from "../assets/logoletra.png";
import menu from "../assets/menu.png";

export const HeaderC = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
  height: 12vh;
  background-color: transparent;
  @media only screen and (min-width: 680px) {
    display: none;
  }
`;

export const SectionC = styled.section`
  padding: 5px 10px 5px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
  span{
    background-color: #F0572D;
    border-radius: 25px;
    padding: 10px 10px;
  }
  @media (max-width:500px) {
    padding: 0;
    justify-content: flex-end;
    gap: 5px;
  }
`;

export const MenuButton = styled.button`
  width: 25px;
  height: 25px;
  background: url(${menu}) no-repeat center center;
  border: none;
  margin-right: 15px;
`

export const HeaderButton = styled.button`
  font-weight: 100;
  border: 1px solid #F0572D;
  background-color: #F0572D;
  color: white;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 2rem;
  width: 70px;
  border-radius: 10px;
  cursor: pointer;
`;
export const HeaderButtonDeploy = styled.button`
  font-weight: 100;
  border: 1px solid #F0572D;
  background-color: #F0572D;
  color: white;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 2rem;
  width: 35vw;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 2.5vw;
`;

export const Logo = styled.div`
  background: url(${logo2});
  background-repeat: no-repeat;
  width: 105px;
  height: 55px;
  margin-top: 10px;
`

export const DeployMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 25px;
  position: fixed;
  top: 0;
  right: 0;
  width: 40vw;
  background-color: whitesmoke;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  z-index: 1;
  height: 40vh;
  background: rgba(243, 241, 237, 0.5);
  backdrop-filter: blur(4px);
  button{
    margin-top: 15px;
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
}`;

export const LineButton = styled.button`
  height: 7vh;
  width: 2px;
  max-width: 2px;
  border: none;
  border-radius: 1px;
  background-color: #F0572D;
  opacity: 0.8;
  padding: 0;
`