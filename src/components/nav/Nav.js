import React from 'react'
import styled from 'styled-components'

const StyledNav = styled.div`
	display: grid;
	grid-template-columns: repeat(3, auto);
	grid-gap: 25px;
	grid-template-rows: none;
	margin-bottom: 25px;
	padding: 0 50px;
`

const Nav = ({children, className}) => (
	<StyledNav className="Nav">
		{children}
	</StyledNav>
)

export default Nav
