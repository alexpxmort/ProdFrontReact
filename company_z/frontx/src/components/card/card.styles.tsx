import styled from 'styled-components';

export const CardContainer = styled.div`
    height: 280px;
    width: 400px;
    display: flex;
		padding:15px;
		margin:15px;
		flex-direction:column;
		align-items:center;
    background-color:${({theme}) => theme.colors.primary};

		&:hover{
			cursor:pointer;
		}
`;


export const CompanyImage = styled.img`
    width:50vh;
`;
