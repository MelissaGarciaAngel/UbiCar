import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
`;

export const HeaderContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  width: 100vw;
  height: 140px;
  max-height: fit-content;
`;

export const LHeader = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin-left: 65px;
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
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 6px;
    margin: 5px;
    p {
      font-size: 14px;
      font-weight: 500;
      color: #1a1a1a;
      line-height: 16px;
    }
  }
`;

export const RHeader = styled.div`
  grid-column: 2;
  grid-row: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 70px;
  margin-top: 27px;
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

export const ImageContainer = styled.div`
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  width: 90vw;
  height: auto;
  max-height: 500px;
  background: transparent;
  margin-bottom: 60px;
  gap: 5px;
  .main-image {
    grid-column: 1 / span 2;
    grid-row: 1 / span 2;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    max-height: 500px;
    justify-content: center;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      max-height: 500px;
      max-width: max-content;
    }
    @media (max-width: 500px) {
      grid-column: 1 / span 4;
    }
  }
  .image {
    width: auto;
    height: auto;
    display: flex;
    align-items: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    justify-content: center;
    img {
      border-radius: 8px;
      width: 100%;
      height: 100%;
      max-height: 197.5px;
      max-width: max-content;
    }
    @media (max-width: 800px) {
    }
    @media (max-width: 500px) {
      display: none;
    }
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90vw;
  height: 288px;

  @media (max-width: 550px) {
    height: 380px;
  }
`;

export const LeftDiv = styled.div`
  width: 47%;
`;

export const InfoDiv = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  @media (max-width: 750px) {
    flex-direction: column;
  }
  div {
    width: 33%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 750px) {
      flex-direction: row;
      justify-content: flex-start;
      width: 100%;
      height: 33%;
      gap: 10px;
    }
    img {
      @media (max-width: 1100px) {
        height: 100px;
        width: 100px;
      }
      @media (max-width: 750px) {
        height: 70px;
        width: 70px;
      }
    }
    p {
      text-align: center;
    }
  }
`;

export const DescpP = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 20px;
  margin-top: 18px;
  margin-left: 34px;
  @media (max-width: 800px) {
    margin-top: 24px;
    margin-left: 24px;
    font-size:14px;
    line-height: 15px;
  }
  @media (max-width: 500px) {
    margin-top: 24px;
    margin-left: 24px;
    font-size:14px;
    line-height: 15px;
  }
`;

export const DescH2 = styled.h2`
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  color: #1a1a1a;
  margin-top: 56px;
  margin-left: 34px;
  @media (max-width: 800px) {
    margin-top: 30px;
    margin-left: 28px;
    font-size:24px;
  }
  @media (max-width: 500px) {
    margin-top: 24px;
    margin-left: 24px;
  }
`;
export const FondoDiv = styled.div`
  background-color: #F3F1ED ;
  width: 100%;
  @media (max-width:1100px) {
  }
  @media(max-width:500px){
  }
`;

export const FeaturesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 90vw;
  height: 288px;
  margin-left: 100px;
  margin-right: 30px;
  @media (max-width: 1200px) {
    height: 250px;
    margin-left:50px;
    margin-right:50px;
  }
  @media (max-width: 800px) {
    height: 370px;
  }
  @media (max-width: 500px) {
    height: 600px;
    margin-bottom:20px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #1a1a1a;
  }
  div {
    width: 90vw;
    height: 288px;
    margin-left:40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    @media (max-width: 1200px) {
    margin-left:20px;
    margin-right:50px;
    } 
    @media (max-width: 860px) {
      grid-template-columns: 1fr 1fr;

    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
      margin-left: 0px;
    }
  }
`;

export const FeatureImg = styled.img`
  width: 40px;
  height: auto;
  margin-right: 15px;
`;

export const MyH2 = styled.h2`
  text-align: start;
  width: 90vw;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #1a1a1a;
  height: fit-content;
  margin-left: 100px;
  margin-right: 30px;
  @media(max-width:860px){
    margin-top:130px;
    margin-left:40px;
  }
  @media (max-width: 500px) {
    margin-left: 50px;
  }
`;

export const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  width: 90vw;
  column-gap: 3vw;
  margin-left: 100px;
  margin-right: 30px;
  @media (max-width: 1200px) {
    height: 500px;
    grid-template-columns: 1fr 1fr;
    margin-left:50px;
  }
  @media(max-width:860px){
    margin-left:40px;
    margin-top:20px;

  }
  @media (max-width:500px){
    margin-left: 30px;
  }
`;

export const CalendarSection = styled.div`
  margin-top: 4vh;
  grid-column: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 1100px) {
    grid-column: 1 / span 2;
    grid-row: 2;
  }
  
`;

export const CalendarItem = styled.div`
  width: 370px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #dfe4ea;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  margin-bottom:10px;
  @media (max-width: 1280px) {
    width: 270px;
    height: 200px;
  }
  @media (max-width: 1100px) {
    width: 370px;
    height: 150px;
  }

  @media(max-width:500px){
    margin-left:10px;
    margin-right:20px;
    
  }
  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: #1a1a1a;
    width: 90%;
  }
  button {
    background: #f0572d;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
    color: #ffffff;
    width: 50%;
    min-width: 100px;
    height: 40px;
    font-weight: bold;
    border: none;
  }
`;

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 90vw;
  @media (max-width: 800px) {
    align-items: center;
    margin-left:10px;
  }
  h2 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #1a1a1a;
    margin-top: 25px;
    margin-left: 35px;
  }
  @media(max-width:860px){
    margin-left:10px;
  }
  @media(max-width:500px){
    justify-content: flex-start;
    padding: 0;
    margin: 0;
    height: 800px;
  }
`;
export const FooterItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    margin-left:10px;
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    height: 800px;
    margin: 0;
  }
  width: 100%;
`;

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5vw 0 5vw;
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
    @media (max-width: 550px) {
      text-align : center ;
    }
  }
  @media(max-width:500px){
   width:350px;
   height:200px;
  }
`;
export const FooterItem3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5vw 0 5vw;
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
    @media (max-width: 550px) {
      text-align : center ;
    }
  }
  @media(max-width:500px){
   width:350px;
   height:100px;
  }
`;
export const FooterItem2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 5vw 0 5vw;
  h4 {
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #1a1a1a;
    @media (max-width: 550px) {
      text-align : center ;
    }
  }
  ul{
    margin-top:10px;
    font-size: 14px;
  }
  dd {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    line-height: 16px;
    margin-left:-10px;
    padding: 10px;
    font-weight: bold;
    @media (max-width: 550px) {
      text-align : center ;
    }
  }
`;

export const GalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(243, 241, 237, 0.5);
  backdrop-filter: blur(4px);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const GalleryItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 638px;
  height: 476px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
`;

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  max-height: 323px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
`;

export const MainImage = styled.img`
  width: auto;
  height: auto;
  max-height: 350px;
  border-radius: 8px 8px 0 0;
`;

export const GalleryButton = styled.button`
  color: #191b1d;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  position: absolute;
  right: 0;
`;

export const ArrowButton = styled.button`
  align-self: center;
  font-weight: 700;
  font-size: 24px;
  height: 35px;
  width: 35px;
  background: #f3f1ed;
  opacity: 0.5;
  border: 0.5px solid #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 25px;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 40%;
`;

export const MyP = styled.p`
  font-size: 16px;
  margin: 0;
  font-weight: 700;
  text-align: center;
  margin-top: 3px;
`;

export const Carrousel = styled.div`
  height: 130px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
    height: auto;
  }
`;

export const CarrouselImg = styled.img`
  align-self: center;
  justify-self: center;
  max-width: 148px;
  max-height: 91px;
  border-radius: 8px;
  @media (max-width: 500px) {
    height: auto;
    margin-bottom: 15px;
  }
`;

export const ChoiceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 400px;
  height: 200px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 100%;
    height: 100%;
  }
  h2{
    text-align: center;
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  button{
    width: 35%;
    font-weight: 100;
  border: 1px solid #f0572d;
  background-color: #f0572d;
  box-shadow: 0 0 30px rgba(125, 33, 129, 0.4);
  border-radius: 10px;
  cursor: pointer;
  :hover {
    background-color: white;
    border: none;
    color: #f0572d;
    font-weight: bold;
  }
  }
`
