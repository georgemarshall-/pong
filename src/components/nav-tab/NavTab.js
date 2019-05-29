import React from 'react'
import styled from 'styled-components'

const StyledNavTab = styled.a`
	font-family: ${props => props.theme.fontFamily};
	font-size: ${props => props.theme.fontSize};
	border: 1px solid;
	border-color: ${props => props.active ? props.theme.tabBgColorActive : props.theme.borderColor};
	background-color: ${props => props.active ? props.theme.tabBgColorActive : props.theme.tabBgColor };
	color: ${props => props.active ? props.theme.tabColorActive : props.theme.tabColor };
	text-align: center;
	padding-top: .5rem;
	padding-bottom: .5rem;
`

const NavTab = ({onClick, text, className, active}) => (
	<StyledNavTab className={`NavTab ${className || ''}`} onClick={onClick} active={active}>
		{text}
	</StyledNavTab>
)

export default NavTab
