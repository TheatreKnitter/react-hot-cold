import {MAKE_GUESS_SUCCESS, NEW_GAME} from '../actions';

const initialState = {
	guesses: []
	};


export default (state=initialState, action) => {
	
	if (action.type === MAKE_GUESS_SUCCESS) {
        if (isNaN(parseInt(action.guess, 10))) {
            var guesses = state.guesses;
            guesses.push(action.guess);
            const difference = Math.abs(parseInt(action.guess) - parseInt(state.correctAnswer));
	        let feedback;
        	if (difference >= 50) {
            	feedback = 'You\'re Ice Cold...';
        	}
        	else if (difference >= 30) {
            	feedback = 'You\'re Cold...';
        	}
        	else if (difference >= 10) {
            	feedback = 'You\'re Warm';
        	}
        	else if (difference >= 1) {
            	feedback = 'You\'re Hot!';
        	}
        	else {
            	feedback = 'You got it!';
        	}
		return Object.assign({}, state, {
			guesses: guesses, 
			feedback: feedback
		});
	} else if (action.type === NEW_GAME){
		const correctAnswer = Math.round(Math.random()* 100);
		const feedback = 'Make your guess!';
		return Object.assign({}, state, {
			correctAnswer: correctAnswer, 
			feedback: 'Make your Guess!',
			guesses: []
		});
	}
}
	return state;
};