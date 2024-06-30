export const initialGameState = {
    number: getRandomNumber(),
    guess: "",
    pastGuesses: [],
    message: "Start guessing",
    gameOver: false,
    score: 5
}

function getRandomNumber() {
    console.log("getRandomNumber called");
    return Math.floor(Math.random() * 20 + 1);
}

export const guessNumberGameReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_GUESS": {
            return {
                ...state,
                guess: Number(action.payload)
            };
        }

        case "CHECK_GUESS": {
            const newState = {...state}
            // Number casting
            // 1. Number(newState.guess)
            // 2. Using +
            if (+newState.guess === newState.number) {
                newState.message = `You got it! The answer is ${newState.guess}`;
                newState.gameOver = true;
                return newState;
            }
            
            newState.pastGuesses = [...state.pastGuesses, newState.guess];
            newState.score -= 1;

            if (newState.score <= 0) {
                newState.score = 0;
                newState.gameOver = true;
                newState.message = "Game over... Please try again!"
                return newState;
            }

            if (newState.guess > newState.number) newState.message = `${newState.guess} is too big!`;
            else if (newState.guess < newState.number) newState.message = `${newState.guess} is too small!`;

            newState.guess = "";

            return newState;
        }

        case "NEW_GAME": {
            console.log("gameOver", state.gameOver)
            action.scoreHandler(state.gameOver, state.score);
            return {
                ...initialGameState,
                number: getRandomNumber()
            };
        }

        default: {
            return state;
        }
    }
}