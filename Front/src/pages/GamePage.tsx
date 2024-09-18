import Game from "../components/Game";
import React, { useState } from "react";
import GameHeader from "../components/GameHeader/GameHeader";
import Button from "../components/UI/Button/Button";
import { useGameLogic } from "../hooks/useGameLogic";
import styles from '../styles/components/GamePage.module.scss';

const GamePage:React.FC=()=>{
    const { handleFinishGame, playerName, gameId } = useGameLogic();
    useGameLogic();
    const [score, setScore] = useState<number>(0);
    const updateScore = (newScore: number) => {
        setScore(newScore);
    };
    return (
        <div className={styles.gamePageContainer}>
            <GameHeader />
            <div className={styles.gameContent}>
                <div className={styles.gameComponent}>
                    <Game updateScore={updateScore}/>
                </div>
                <div className={styles.finishButtonContainer}>
                    <Button onClick={() => handleFinishGame(playerName,score, gameId)}>
                        סיום משחק
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default GamePage;
