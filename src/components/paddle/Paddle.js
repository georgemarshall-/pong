import React from 'react'
import styled from 'styled-components'

const StyledPaddle = styled.div`
	width: 20px;
	height: 80px;
	background-color: ${props => props.theme.paddleBgColor};
	border: 1px solid ${props => props.theme.paddleBorderColor};
	justify-self: ${props => props.theme.paddleJustify};
	grid-row-start: ${props => props.theme.paddleRowStart};
	grid-column-start: ${props => props.theme.paddleColumnStart};
`

const Paddle = () => (
	<StyledPaddle  className="PaddleOne" />
)

export default Paddle
