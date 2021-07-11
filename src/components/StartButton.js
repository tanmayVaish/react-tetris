import React from "react";

import {StyledStartButton} from "./styles/StyledStartButton";

const StartButton = ({callback}) => (
    <StyledStartButton onClick={callback} className='toggle'>Start Game</StyledStartButton>
)

export default StartButton;