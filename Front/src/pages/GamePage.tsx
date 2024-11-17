import {Game} from "../components/Game";
import React, { useState } from "react";
import {GameHeader} from "../components/GameHeader/";
import {Button} from "../components/UI/Button/";
import { useGameLogic } from "../hooks/";
import  '../styles/index.scss';

const GamePage:React.FC=()=>{
    const { handleFinishGame, playerName, gameId } = useGameLogic();
    useGameLogic();
    const [score, setScore] = useState<number>(0);
    const updateScore = (newScore: number) => {
        setScore(newScore);
    };
    return (
        <div className="game-page-container">
            <GameHeader />
            <div className="game-content">
                <div className="game-component">
                    <Game updateScore={updateScore}/>
                </div>
                <div className="finish-button-container">
                    <Button onClick={() => handleFinishGame(playerName,score, gameId)}>
                        סיום משחק
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default GamePage;
