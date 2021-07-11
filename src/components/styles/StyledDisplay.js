import styled from "styled-components";

export const StyledDisplay = styled.div`
    
    display: flex;
  align-items: center;
  margin: 0 0 20px 0;
  padding: 20px;
  border: 4px;
  min-height: 30px;
  width:18vw;
  border-radius: 20px;
  color: ${props => (props.gameOver ? 'red' : 'black')};
  background: greenyellow;
  box-shadow: white 0vh 0vh 1vh 0.1vh;
  font-family: Pixel,Arial, Helvetica, sans-serif;
  font-size: 1.8vh;
  
    `