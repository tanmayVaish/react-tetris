import React from "react";

import {createStage} from "../gameHelpers";
import {StyledTetris, StyledTetrisWrapper} from "./styles/StyledTetris";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <div>
                    <Stage stage={createStage()}/>
                    <aside>
                        <Display text='Score'/>
                        <Display text='Rows'/>
                        <Display text='Level'/>
                        <StartButton/>
                    </aside>
                </div>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}

export default Tetris;