export const MAKE_GUESS_SUCCESS = 'MAKE_GUESS_SUCCESS';
export const makeGuessSuccess = guess => ({
	type: MAKE_GUESS_SUCCESS,
	guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME
});

