import { useContext } from "react";
import { ScoreHistoryContext } from "../context/ScoreHistoryContext";

function ScoreHistory() {
    const scoreHistoryCtx = useContext(ScoreHistoryContext);
    const {pastScores} = scoreHistoryCtx;

    return (
        <>
            <h2>Score History</h2>
            <div className="guesses-container">
                {pastScores.map((pastScore, i) => (
                <span 
                    key={i} 
                    className="guesses-number"
                    style={{
                        backgroundColor: "#6741d9",
                        color: "white"
                    }}
                >
                    {pastScore}
                </span>
                ))}
            </div>
        </>
    );
}

export default ScoreHistory;