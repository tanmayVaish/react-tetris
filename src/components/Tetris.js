import React, {useState} from "react";

import {createStage} from "../gameHelpers";
import {StyledTetris, StyledTetrisWrapper} from "./styles/StyledTetris";

import {useStage} from "../hooks/useStage";
import {usePlayer} from "../hooks/usePlayer";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {

    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    const [player] = usePlayer();
    const [stage, useStage] = useStage(player);

    console.log(stage);
    console.log('re-render');

    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>

                    // use of ternary operator to show displays iff game is not over

                    {gameOver ? (
                            <Display gameOver={gameOver} text="Game Over"/>
                        ) :
                        (
                            <div>
                                <Display text='Score'/>
                                <Display text='Rows'/>
                                <Display text='Level'/>
                                <StartButton/>
                            </div>
                        )}
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
}

export default Tetris;