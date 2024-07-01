import { createContext, useState } from "react";

export const ScoreHistoryContext = createContext({
    pastScores: [],
    scoreHandler: () => {}
})

export function ScoreHistoryContextProvider({children}) {
    // Won't work because it is declaring its own reducer? i.e. Separated from the game?
    // const [gameState, dispatch] = useReducer(guessNumberGameReducer, initialGameState);
    // const {gameOver, score} = gameState;
    const [pastScores, setPastScores] = useState([]);

    const scoreHandler = (score) => {
        setPastScores(prevPastScores => [...prevPastScores, score]);

        // console.log("setting past scores", pastScores);
        // console.log("gameOver", gameOver);
        // if (gameOver) {
        //     setPastScores(prevPastScores => [...prevPastScores, score]);
        // }
    }

    const contextValue = {pastScores, scoreHandler};

    return (
        <ScoreHistoryContext.Provider value={contextValue}>
            {children}
        </ScoreHistoryContext.Provider>
    );
}