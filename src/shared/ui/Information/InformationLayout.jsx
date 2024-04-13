import styled from 'styled-components';

const InformationLayoutStyled = styled.div`
	margin-top: 10px;
	color: #20b2aa;
	font-size: xx-large;
	font-weight: bold;
	text-shadow: 2px 2px 2px #4f4f4f;
`;

export const InformationLayout = ({ currentPlayer, isDraw, isGameEnded }) => {
	return (
		<InformationLayoutStyled>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</InformationLayoutStyled>
	);
};
