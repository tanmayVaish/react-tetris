import styled from "styled-components";
import bgImage from '../../images/bg.gif';

export const StyledTetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`

export const StyledTetris = styled.div`
  
  display: flex;
  padding: 40px;
  margin: 0 auto;
  max-width: 50vw;
  align-items: center;
  justify-content: space-between;
  
  
  aside{
    width: 100%;
    max-width: 18vw;
    display: block;
    padding: 0 20px;
  }
  `