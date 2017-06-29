export const MAKE_GUESS_SUCCESS = 'MAKE_GUESS_SUCCESS';
export const makeGuessSuccess = guess => ({
	type: MAKE_GUESS_SUCCESS,
	guess
});

export const NEW_GAME = 'NEW_GAME';
export const newGame = () => ({
	type: NEW_GAME,
	correctAnswer: Math.round(Math.random()*100),
});

export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';
export const toggleInfoModal = () => ({
    type: TOGGLE_INFO_MODAL
});

