import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {makeGuessSuccess, newGame} from '../actions';


export function Game(props) {
    /*constructor(props) {
        super(props);
    }*/

    newGame() {
        this.props.dispatch(newGame());
    }

    guess(guess) {
        this.props.dispatch(makeGuessSuccess(guess));
    }

        
    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()} />
                <GuessSection feedback={this.state.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.state.guesses.length} />
                <GuessList guesses={this.state.guesses} />
            </div>
        );
    }
};

const mapStateToProps = state => ({
    feedback: state.feedback,
    correctAnswer: state.correctAnswer,
    guesses: state.guesses
});

export default connect(mapStateToProps)(Game);

