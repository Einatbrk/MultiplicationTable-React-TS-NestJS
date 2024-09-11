import Game from "../components/Game";
import React, { useState } from "react";
import GameHeader from "../components/GameHeader/GameHeader";
import Button from "../components/UI/Button/Button";
import { useGameLogic } from "../hooks/useGameLogic";
import './GamePage.css';

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
            <Game updateScore={updateScore}/>
            <Button onClick={() => handleFinishGame(playerName,score, gameId)}>
                סיום משחק
            </Button>
        </div>
    )
}

export default GamePage;
