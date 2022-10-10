import styled from "styled-components";
import slider1 from "../assets/slider1.jpg";


export const LayoutC = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-height: max-content;
  min-width: 100vw;
  max-width: max-content;
  background: url(${slider1}) no-repeat center center fixed;
  background-size: cover;
`;
