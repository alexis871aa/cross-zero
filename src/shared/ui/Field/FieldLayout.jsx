import styled from 'styled-components';
import { randomId } from '../../lib/utils.js';
import { onClickField } from '../../lib/actions.js';

const FieldLayoutStyled = styled.div`
	margin: 50px auto;
	width: 300px;
	height: 300px;
	border: 1px solid #a9a9a9;
	box-shadow: 4px 4px 4px #4f4f4f;
`;

const FieldLayoutButtonStyled = styled.button`
	width: 100px;
	height: 100px;
	vertical-align: top;
	font-size: 75px;
	color: #87cefa;
	background-color: #f0ffff;
	border: 1px solid #a9a9a9;
	cursor: pointer;
`;

export const FieldLayout = ({ field, ...other }) => {
	return (
		<FieldLayoutStyled>
			{field.map((el, index) => (
				<FieldLayoutButtonStyled
					key={randomId()}
					id={index}
					onClick={(ev) => onClickField(ev.target.id, field, { ...other })}
				>
					{el}
				</FieldLayoutButtonStyled>
			))}
		</FieldLayoutStyled>
	);
};
