import { Component } from 'react';
import { connect } from 'react-redux';
import { isWin } from '../../lib/utils.js';
import { FieldLayout } from './field-layout.jsx';

class FieldContainer extends Component {
	constructor(props) {
		super(props);
	}

	onClickField = (id) => {
		if (this.props.field.at(id) === '' && !this.props.isGameEnded) {
			const updatedField = this.props.field.toSpliced(
				id,
				1,
				this.props.currentPlayer,
			);

			if (isWin(updatedField, this.props.currentPlayer)) {
				this.props.dispatch({ type: 'isGameEnded/checked', payload: true });
			} else if (
				!isWin(updatedField, this.props.currentPlayer) &&
				!updatedField.some((el) => el === '')
			) {
				this.props.dispatch({ type: 'isDraw/checked', payload: true });
			} else if (
				!isWin(updatedField, this.props.currentPlayer) &&
				updatedField.some((el) => el === '')
			) {
				this.props.dispatch({
					type: 'currentPlayer/checked',
					payload: this.props.currentPlayer === 'X' ? '0' : 'X',
				});
			}

			this.props.dispatch({
				type: 'field/add',
				payload: updatedField,
			});
		}
	};

	render() {
		return <FieldLayout onClickField={this.onClickField}></FieldLayout>;
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
	currentPlayer: state.currentPlayer,
	isGameEnded: state.isGameEnded,
});

export const Field = connect(mapStateToProps)(FieldContainer);
