export const initialGameState = {
    number: getRandomNumber(),
    guess: "",
    pastGuesses: [],
    message: "Start guessing",
    gameOver: false,
    score: 10
}

function getRandomNumber() {
    // console.log("getRandomNumber called");
    return Math.floor(Math.random() * 20 + 1);
}

export const guessNumberGameReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_GUESS": {
            const newState = {...state};
            if (Number.isNaN(Number(action.payload))) {
                newState.message = "Please only input numbers!"
                return newState;
            }
            newState.guess = Number(action.payload)
            return newState;
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
            
            if (newState.guess < 1 || newState.guess > 20) {
                newState.message = "Please input numbers between 1 and 20 only!"
                newState.guess = "";
                return newState;
            } else if (newState.guess > newState.number) newState.message = `${newState.guess} is too big!`;
            else if (newState.guess < newState.number) newState.message = `${newState.guess} is too small!`;

            newState.pastGuesses = [...state.pastGuesses, newState.guess];
            newState.score -= 1;

            if (newState.score <= 0) {
                newState.score = 0;
                newState.gameOver = true;
                newState.message = "Game over... Please try again!"
                return newState;
            }

            newState.guess = "";

            return newState;
        }

        case "NEW_GAME": {
            // action.scoreHandler(state.gameOver, state.score);
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