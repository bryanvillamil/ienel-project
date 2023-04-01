import styled from 'styled-components'

export const BoxProyects = styled.div`
	width: 50%;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	height: 100%;
	background: transparent;
	display: flex;
`
export const Card = styled.div`
	background: yellow;
	border: 1px solid black;
	border-radius: ${props => props.theme.borderRadius.card};
	width: 100%;
	margin: 0 30px;
`