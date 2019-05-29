import React from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
	max-width: 100%;
	flex: 0 0 500px;
`

const Container = ({children}) => (
	<StyledContainer className="Container">
		{children}
	</StyledContainer>
)

export default Container
