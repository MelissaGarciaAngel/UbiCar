import styled from "styled-components";

export const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: #f5f4f1;
`;

export const ListC = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
`;

export const ListH3 = styled.h3`
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin: 30px 0px 0px 50px;
  color: #191b1d;
  padding: 10px 10px -15px 0px;
`;

export const CardC = styled.div`
  display: flex;
  width: 635px;
  height: 283px;
  margin: 10px;
  background-color: white;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  @media only screen and (max-width: 640px) {
    width: 80vw;
    flex-direction: column;
    height: fit-content;
    align-items: center;
  }
  :hover {
    transform: scale(1.05);
  }
`;

export const StyledImg = styled.img`
  width: 315px;
  height: 283px;
  @media only screen and (max-width: 500px) {
    width: 100%;
    height: 200px;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 300px;
  height: 283px;
  margin-left: 20px;
  h3 {
    font-size: 24px;
    margin: 2px;
    margin: 0;
  }
  @media (max-width: 500px) {
    align-items: center;
    margin: 0;
    width: 95%;
  }
`;

export const StyledP1 = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin: 2px;
  margin: 3px;
  color: #191b1d;
  opacity: 0.5;
`;

export const StyledP2 = styled.p`
  font-size: 14px;
  line-height: 16px;
  font-weight: 500;
  margin: 1px;
  color: #191b1d;
  width: 95%;
`;

export const StyledButton = styled.button`
  color: white;
  font-size: 16px;
  font-weight: 700;
  background-color: #f0572d;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 10px;
  width: 296px;
  height: 40px;
  border: none;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  @media (max-width: 380px) {
    width: 220px;
  }
`;
