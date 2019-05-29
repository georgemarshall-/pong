import React from 'react'
import styled from 'styled-components'

const StyledPaddleTwo = styled.div`
	width: 20px;
	height: 80px;
	background-color: ${props => props.theme.paddleTwoBgColor};
	border: 1px solid ${props => props.theme.paddleTwoBorderColor};
	justify-self: ${props => props.theme.paddleTwoJustifySelf};
	align-self: ${props => props.theme.paddleTwoAlignSelf};
	grid-row-start: ${props => props.theme.paddleTwoRowStart};
	grid-column-start: ${props => props.theme.paddleTwoColumnStart};
`

const PaddleTwo = () => (
	<StyledPaddleTwo className="PaddleTwo" />
)

export default PaddleTwo
