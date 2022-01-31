import styled from 'styled-components';

export const Box = styled.div`
padding: 80px 60px;
background: grey;
position: relative;
bottom: 0;
height:20%;
width: 100%;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1700px;
	margin: 0 auto;
	padding:0;
	
`

export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-columns: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const FooterLink = styled.a`
color: black;
margin-bottom: 20px;
font-size: 18px;
text-decoration: none;
display: flex;
flex-direction: column;
justify-content: center;


&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: black;
margin-bottom: 40px;
font-weight: bold;
`;
