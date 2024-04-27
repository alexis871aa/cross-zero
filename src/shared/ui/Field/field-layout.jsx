import { Component } from 'react';
import { connect } from 'react-redux';
import { randomId } from '../../lib/utils.js';

class FieldLayoutContainer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="fields">
				{this.props.field.map((el, index) => (
					<button
						className="field_button"
						key={randomId()}
						id={index}
						onClick={({ target }) => this.props.onClickField(target.id)}
					>
						{el}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
});

export const FieldLayout = connect(mapStateToProps)(FieldLayoutContainer);
