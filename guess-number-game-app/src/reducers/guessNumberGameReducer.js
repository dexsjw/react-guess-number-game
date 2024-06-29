export const initialGameState = {
    number: getRandomNumber(),
    guess: "",
    pastGuesses: [],
    message: "Start guessing",
    gameOver: false
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
            if (newState.guess === newState.number) {
                newState.message = `You got it! The answer is ${newState.guess}`;
                newState.gameOver = true;
                return newState;
            }
            
            newState.pastGuesses.push(newState.guess);

            if (newState.guess > newState.number) newState.message = `${newState.guess} is too big!`;
            else if (newState.guess > newState.number) newState.message = `${newState.guess} is too small!`;

            newState.guess = "";

            return newState;
        }

        case "NEW_GAME": {
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