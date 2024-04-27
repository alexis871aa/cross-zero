import { Component } from 'react';
import { connect } from 'react-redux';

class InformationLayoutContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="information">
				{this.props.isDraw
					? 'Ничья'
					: this.props.isGameEnded
						? `Победа: ${this.props.currentPlayer}`
						: `Ходит: ${this.props.currentPlayer}`}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);
