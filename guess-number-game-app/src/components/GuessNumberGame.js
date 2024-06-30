import { useContext, useReducer } from "react";
import { guessNumberGameReducer, initialGameState } from "../reducers/guessNumberGameReducer";
import { ScoreHistoryContext } from "../context/ScoreHistoryContext";

// function getRandomNumber() {
//   console.log("getRandomNumber called");
//   return Math.floor(Math.random() * 20 + 1);
// }

function GuessNumberGame() {
  const scoreHistoryCtx = useContext(ScoreHistoryContext);
  const {scoreHandler} = scoreHistoryCtx;

  const [gameState, dispatch] = useReducer(guessNumberGameReducer, initialGameState);
  const {number, guess, pastGuesses, message, gameOver, score} = gameState;

  const guessChangeHandler = (e) => {
    dispatch({ type: "CHANGE_GUESS", payload: e.target.value });
  }

  const guessHandler = () => {
    dispatch({ type: "CHECK_GUESS" });
  }

  const newGameHandler = () => {
    // scoreHandler();
    dispatch({ type: "NEW_GAME", scoreHandler });
  }


//   // lazy initialization
//   const [number, setNumber] = useState(() => getRandomNumber());
//   const [guess, setGuess] = useState("");
//   const [pastGuesses, setPastGuesses] = useState([]);
//   const [message, setMessage] = useState("Start guessing");
//   const [gameOver, setGameOver] = useState(false);

//   const guessChangeHandler = (e) => {
//     if (isNaN(e.target.value)) {
//       console.log("not a number");
//       return;
//     }

//     setGuess(Number(e.target.value));
//   };

//   const guessHandler = () => {
//     if (guess === number) {
//       setMessage(`You got it! The answer is ${guess}`);
//       setGameOver(true);
//       return;
//     }

//     // User guessed wrongly
//     setPastGuesses((prevState) => {
//       // spread operator
//       return [...prevState, guess];
//     });

//     if (guess > number) setMessage(`${guess} is too big!`);
//     else if (guess < number) setMessage(`${guess} is too small!`);

//     setGuess("");
//   };

//   const newGameHandler = () => {
//     setGuess("");
//     setMessage("");
//     setPastGuesses([]);
//     setNumber(getRandomNumber());
//     setGameOver(false);
//   };

  return (
    <div>
      <h1>Guess Number Game</h1>
      <h2>Score: {score}</h2>
      <p>Guess a number between 1 and 20.</p>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <label htmlFor="guess-input">Enter guess</label>
        <input
          id="guess-input"
          type="text"
          onChange={guessChangeHandler}
          value={guess}
        />
      </div>
      <div style={{ display: "flex", gap: "20px" }}>
        <button type="button" onClick={guessHandler} disabled={gameOver}>
          Guess!
        </button>
        <button type="button" onClick={newGameHandler}>
          New Game
        </button>
      </div>
      <p>{message}</p>
      <p>Answer: {number}</p>
      <div className="guesses-container">
        {pastGuesses.map((pastGuess, i) => (
          <span key={i} className="guesses-number">
            {pastGuess}
          </span>
        ))}
      </div>
    </div>
  );
}

export default GuessNumberGame;