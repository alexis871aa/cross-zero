import { Component } from 'react';
import { connect } from 'react-redux';
import { GameLayout } from '../shared/ui/index.js';

class GameContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <GameLayout onClickClear={this.props.onClickClear} />;
	}
}

const mapDispatchToProps = (dispatch) => ({
	onClickClear: () => dispatch({ type: 'clear' }),
});

export const Game = connect(null, mapDispatchToProps)(GameContainer);
