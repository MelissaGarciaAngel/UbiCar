import styled from "styled-components";

export const AdminContainer = styled.div`
  background-color: #f3f1ed;
  display: flex;
  flex-direction: column;
  padding-bottom: 15px;
`;

export const HeaderContainer = styled.div`
  background-color: #f0572d;
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  opacity: 0.8;
  justify-content: space-between;
  h1 {
    color: antiquewhite;
    font-weight: 700;
    font-size: 28px;
    margin-left: 20px;
  }
  button {
    margin-right: 20px;
    font-size: 16px;
    font-weight: 500;
    border: 1px solid antiquewhite;
    background-color: antiquewhite;
    color: #f0572d;
    box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
    height: 2rem;
    width: 190px%;
    min-width: 170px;
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const StyledH2 = styled.h1`
  font-size: 22px;
  margin-left: 20px;
`;

export const StyledForm = styled.form`
  width: 90vw;
  background: #ffffff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  align-self: center;
  padding: 15px;
`;

export const StyledInput = styled.input`
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  height: 35px;
`;

export const TitleDesc = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 45%;
  }
`;

export const CatCity = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-around;
  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 45%;
    select {
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      border: none;
      height: 35px;
    }
  }
`;

export const CatCity2 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Images = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  label {
    display: flex;
    flex-direction: column;
    font-size: 16px;
    width: 45%;
    margin-bottom: 10px;
  }
`;

export const Feature = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    margin-bottom: 10px;
    select {
      width: 100%;
      background: #ffffff;
      box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.15);
      border-radius: 5px;
      border: none;
      height: 35px;
      margin-top: 5px;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 10px;
  width: 90vw;
`;

export const StyledButton = styled.button`
  font-weight: 100;
  border: 1px solid #f0572d;
  background-color: #f0572d;
  color: white;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 2rem;
  width: 33%;
  min-width: 170px;
  border-radius: 10px;
  cursor: pointer;
`;
