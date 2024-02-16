import styled from 'styled-components';
import { InformationContainer, FieldContainer } from '../index';
import { onClickClear } from '../../utils/actions';
import PropTypes from 'prop-types';

const GameLayoutStyled = styled.div`
	height: 100vh;
	text-align: center;
`;

const GameLayoutButtonStyled = styled.button`
	background-color: #f0ffff;
	font-size: x-large;
	color: #87cefa;
	cursor: pointer;
	border-radius: 10px;
	border: none;
	box-shadow: 4px 4px 4px #4f4f4f;
`;

export const GameLayout = (props) => {
	return (
		<GameLayoutStyled>
			<InformationContainer {...props}></InformationContainer>
			<FieldContainer {...props}></FieldContainer>
			<GameLayoutButtonStyled onClick={() => onClickClear(props)}>
				Начать заново
			</GameLayoutButtonStyled>
		</GameLayoutStyled>
	);
};

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
	field: PropTypes.array,
	setCurrentPlayer: PropTypes.func,
	setIsGameEnded: PropTypes.func,
	setIsDraw: PropTypes.func,
	setField: PropTypes.func,
};
