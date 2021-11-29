import React, { Fragment } from "react";

import styled from "styled-components";

const Input = styled.input`
	border: 1px solid #000;
	min-height: 35px;
	height: 35px;
	font-size: 17px;
	width: 100%;
	display: initial;
	margin-top: 10px;
`;

const Label = styled.span`
	color: #000;
	width: auto;
`;

export const TextField = ({ label, ...props }) => {
	return (
		<span>
			<Label>{label}</Label>
			<br />
			<Input {...props} />
		</span>
	);
};
