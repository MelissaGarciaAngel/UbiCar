import styled from "styled-components";

export const MainDiv = styled.div`
  background: #f5f4f1;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  margin: 20px;
  h1 {
    font-size: 28px;
  }
`;

export const SecondDiv = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const CardDiv = styled.div`
  background-color: white;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: max-content;
  margin: 15px 5px 15px 5px;
  padding: 0;
  @media (max-width: 800px) {
    height: 320px;
    justify-content: space-between;
  }
  @media (max-width: 600px) {
    width: 40%;
    justify-content: space-between;
  }
  @media (max-width: 500px) {
    width: 80%;
    height: auto;
    justify-content: space-between;
  }
  h1 {
    font-size: 16px;
    margin: 3px;
    @media (max-width: 500px) {
      text-align: center;
    }
  }
  img{
    width: 70%;
    align-self: center;
  }
`;

export const LowerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 5px;
  div {
    p {
      font-size: 12px;
      margin: 5px;
      @media (max-width: 800px) {
      font-size: 10px;
    }
    }
  }
  button {
    font-size: 12px;
    width: 130px;
    height: 80%;
    font-weight: 100;
    border: 1px solid #f0572d;
    background-color: #f0572d;
    color: white;
    box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
    border-radius: 10px;
    @media (max-width: 800px) {
      width: 70px;
      height: 30px;
      font-size: 10px;
    }
    @media (max-width: 500px) {
      width: 120px;
      height: 30px;
      font-size: 10px;
    }
  cursor: pointer;
  :hover {
    background-color: white;
    border: none;
    color: #F0572D;
    font-weight: bold;
  }
}
`;
