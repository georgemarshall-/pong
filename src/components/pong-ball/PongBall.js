import React from 'react'
import styled from 'styled-components'

const StyledPongBallContainer = styled.div`
	display: flex;
	align-items: center;
	width: 20px;
	height: 80px;
	align-self: ${props => props.theme.pongBallAlignSelf};
	grid-row-start: ${props => props.theme.pongBallRowStart};
	grid-column-start: ${props => props.theme.pongBallColumnStart};
`

const StyledPongBall = styled.div`
	background-color: ${props => props.theme.pongBallColor};
	border: 1px solid ${props => props.theme.pongBallBorderColor};
	width: 20px;
	height: 20px;
`

const PongBall = () => (
	<StyledPongBallContainer className="PongBallContainer">
		<StyledPongBall className="PongBall" />
	</StyledPongBallContainer>
)

export default PongBall
