import React from "react";

import {createStage} from "../gameHelpers";

import Stage from "./Stage";
import Display from "./Display";
import StartButton from "./StartButton";

const Tetris = () => {
    return(
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <Display text='Score'  />
                <Display text='Rows'  />
                <Display text='Level'  />
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris;