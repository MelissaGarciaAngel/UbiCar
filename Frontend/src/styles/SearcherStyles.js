import styled from "styled-components";

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  height: 82vh;
  position: relative;
  h1 {
    font-weight: 700;
    font-size: 40px;
    line-height: 50px;
    grid-column: 2 / 4;
    grid-row: 2 / 4;
    width: 336px;
    padding: 10px;
    text-align: center;
    @media only screen and (max-width: 800px) {
      grid-row: 1 / 4;
  }
  }
`;

export const SearchForm = styled.form`
  grid-column: 2 / 4;
  grid-row: 4 / 5;
  width: 80vw;
  background-color: #FFFFFF;
  height: 151px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 15px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid #dfe4ea;
  position: relative;
  top: auto;
  bottom: -60px;
  @media only screen and (max-width: 800px) {
    display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
    height: 260px;
    width: 120%;
    gap: 10px;
    flex-direction:column;
    padding: 10px 0px 10px 0px;
    margin-right: 40px;
    margin-left:-25px;
  }
  @media only screen and (max-width: 500px) {
    justify-content: flex-start;
    padding-top: 0;
    height: 210px;
    width: 350px;
    flex-direction: column;
    gap: 4px;
    margin: 5px;
  }
`;

export const SearchSelect = styled.select`
  width: 264px;
  height: 40px;
  margin: 10px 0px 10px 0px;
  background-color: #FFFFFF;
  border: 1.5px solid #F3F1ED;
  border-radius: 10px;
  top: auto;
  bottom: 100%;
  text-align: center;
  min-width: 100px;
  option{
    box-sizing: border-box;
    margin-left: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
  }
  @media (max-width: 1000px) {
    width: 180px;
  }
  @media only screen and (max-width: 800px) {
    width: 350px;
    margin: 0px;
  }
  @media only screen and (max-width: 500px) {
    width: 100%;
  }
`;

export const SearchButton = styled.button`
  font-weight: 400;
  border: none;
  background-color: #F0572D;
  color: white;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  height: 1.5rem;
  width: 200px;
  height: 40px;
  min-width: 100px;
  margin: 10px 0px 10px;
  margin-right: 32px;
  cursor: pointer;
  @media (max-width: 1000px) {
    grid-column: 2;
    align-self: center;
    width: 100%;
  }
  @media only screen and (max-width: 800px) {
    width: 50%;
    margin: 0px;
    position: absolute;
    bottom: 10px;
  }
  @media only screen and (max-width: 500px) {
    width: 90%;
    margin: 10px;
  }
  :hover {
    opacity: 0.7;
    color: white;
    font-weight: bold;
  }

`;

export const CalendarButton = styled.button`
  width: 264px;
  height: 40px;
  margin: 10px 0px 10px;
  background-color: #FFFFFF;
  border: 1.5px solid #F3F1ED;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media (max-width: 1000px) {
    width: 180px;
  }
  @media (max-width: 500px) {
    width: 90%;
    justify-content: center;
  }
  .icon {
    @media (max-width: 500px) {
      position: absolute;
      left: 80px;
    }
  }
`

export const CalendarDiv = styled.div`
  position: relative;
  top: -130px;
  padding: 0 10px;
  background-color: white;
  border-radius: 10px;
  @media only screen and (max-width: 800px) {
    margin-left: 0;
    align-self: center;
    align-items: center;
  }
  @media only screen and (max-width: 500px) {
    padding: 5px 15px 5px 15px;
    width: 80vw;
    align-items: center;
    top: -300px;
  }
  `

  export const IconSelect = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  .icon{
    right: -25px;
    position: relative;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  `
