import { Component } from 'react';
import { Information, Field } from '../index.js';

export class GameLayout extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="content">
				<Information />
				<Field />
				<button className="button" onClick={this.props.onClickClear}>
					Начать заново
				</button>
			</div>
		);
	}
}
