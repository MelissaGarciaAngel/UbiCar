import styled from "styled-components";

export const ReserveContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f3f1ed;
  @media (max-width: 550px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const HeaderContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 100px;
  max-height: fit-content;
  background: white;
`;

export const LHeader = styled.div`
  margin-left: 40px;
  grid-column: 1;
  grid-row: 1;
  margin-top: 27px;
  @media (max-width: 800px) {
    margin-left: 34px;
    margin-top: 15px;
  }
  @media (max-width: 500px) {
    margin-left: 24px;
  }
  p {
    font-size: 14px;
    font-weight: 700;
    color: #666666;
    line-height: 18px;
    margin: 5px;
  }
  h1 {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    color: #1a1a1a;
    margin: 5px;
  }
`;

export const RHeader = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 27px;
  margin-right: 40px;
  @media (max-width: 800px) {
    margin-right: 34px;
    margin-top: 15px;
  }
  @media (max-width: 500px) {
    margin-right: 24px;
  }
  .arrow {
    width: 20px;
    height: 30px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px 0px 50px 0px;
  gap: 32px;
  padding: 0 70px;

  @media (max-width: 1200px) {
    padding: 0 16px;
    gap: 12px;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
`;

export const FormContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  h2 {
    font-weight: 700;
    font-size: 20px;
    line-height: 25px;
  }
  form {
    background: #ffffff;
    border: 1px solid #dfe4ea;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    min-height: 220px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    padding-top: 30px;
    padding-bottom: -40px;
    @media (max-width: 650px) {
      grid-template-columns: 1fr;
    }
    label {
      height: 100px;
      width: 90%;
      display: flex;
      flex-direction: column;
      font-weight: 500;
      size: 12px;
      justify-content: center;
      justify-self: center;
      margin-top: -20px;
      input {
        height: 40px;
        width: 100%;
        background: #f3f1ed;
        opacity: 0.4;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        border: none;
      }
      select {
        height: 40px;
        width: 100%;
        background: #f3f1ed;
        opacity: 0.4;
        box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        border: none;
      }
    }
  }
`;
export const FormContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 200px;
  background: #ffffff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  form {
    display: flex;
    flex-direction: column;
    margin: 15px;
    gap: 2px;
    label {
      display: flex;
      justify-content: space-between;
      min-width: 90px;
      select {
        width: 35%;
        margin-left: 3px;
        align-self: flex-end;
        min-width: 90px;
      }
    }
  }
  @media (max-width:500px) {
    height: 220px;
  }
`;

export const CalendarContainer = styled.div`
  height: 370px;
  width: 100%;
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 515px) {
    height: 570px;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
    align-self: flex-start;
  }
`;

export const Schedule = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 25px;
  }
`;
export const MainButton = styled.button`
  font-weight: 100px;
  font-size: 15px;
  border: 1px solid #f0572d;
  background-color: #f0572d;
  color: white;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 3rem;
  width: 15rem;
  border-radius: 10px;
  align-self: center;
  margin-bottom: 10px;
  cursor: pointer;
  :hover {
    opacity: 0.7;
    color: white;
    font-weight: bold;
  }
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: #ffffff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  height: 945px;
  margin-top: 55px;
  flex: 1;
  max-width: 420px;
  h2 {
    margin: 5px;
  }
  .htop {
    margin-left: 21px;
    font-size: 24px;
    font-weight: 700;
    line-height: 28px;
  }
  img {
    height: 322px;
    width: max-content;
    padding: 0px;
    align-self: center;
    @media (max-width: 365px) {
    width: 100vw;
  }
  }
  div {
    margin-left: 21px;
    .pcategory {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      color: #1a1a1a;
      opacity: 0.5;
    }
    .hbottom {
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;
      color: #1a1a1a;
    }
    .plocation {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      color: #1a1a1a;
    }
  }
  @media (max-width: 365px) {
    width: 95vw;
  }
`;

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background: rgba(243, 241, 237, 0.5);
  backdrop-filter: blur(4px);
  margin-top: 15px;
  height: 92vh;
`;

export const SuccessDiv = styled.div`
  width: 60%;
  height: 40%;
  background: rgba(255, 255, 255, 0.5);
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(4px);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 78px;
  }
  h4 {
    font-size: 24px;
    color: #f0572d;
  }
  p {
    font-size: 20px;
    color: #191b1d;
  }
  button {
    width: 206px;
    height: 40px;
    background: #f0572d;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    border: none;
  }
`;

export const CustomHeader = styled.div`
  div {
    color: black;
    :focus {
      background-color: #f0572d;
    }
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 95vw;
  margin-left: 2.5vw;
  @media (max-width: 800px) {
    align-items: center;
  }
  @media(max-width:500px){
    height: 650px;
    align-items: center;
    margin: 0;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #1a1a1a;
    margin-top: 25px;
    margin-left: 35px;
    @media(max-width:500px){
      margin: 0;
  }
  }
`;
export const FooterItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    height: 650px;
    margin: 0;
    padding: 0;
  }
  width: 100%;
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1a1a1a;
  }
  p {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    line-height: 16px;
    font-weight: bold;
  }
  @media (max-width: 800px) {
      margin: 5px;
    }
  @media(max-width:500px){
   width:100%;
   height:200px;
  }
`;
