import {useState} from "react";

import {randomTetrominos} from "../tetrominos";

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: {x: 0, y: 0},
        tetromino: randomTetrominos().shape,
        collided: false
    });

    return [player];
}