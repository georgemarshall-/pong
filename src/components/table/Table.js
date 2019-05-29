import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.div`
	padding: 16px;
	border: 1px solid ${props => props.theme.borderColor};
`

const StyledTableGrid = styled.div`
	height: 300px;
	display: grid;
	justify-content: ${props => props.theme.tableJustifyContent};
	grid-template-columns: ${props => props.theme.tableGridTemplateColumns};
	grid-template-rows: repeat(3, 1fr);
`

const Table = ({children}) => (
	<StyledTable className="Table">
		<StyledTableGrid className="TableGrid">
			{children}
		</StyledTableGrid>
	</StyledTable>
)

export default Table
