import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 0.8);
  border: ${props => (props.type === 0 ? '0px solid' : '4px solid')};
  border-top-color: rgba(255,255,255,0.8);
  border-right-color: rgba(255,255,255,0.8);
  border-bottom-color: rgba(0,0,0,0.6);
  border-left-color: rgba(0,0,0,0.6);
  
    `
