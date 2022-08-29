import React from 'react'
import styled from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import {Link} from 'react-router-dom'



function Header() {
  return (
		<HeaderContainer>
			<HeaderBar className="">
				<$Link to={'/'}>Where in the world?</$Link>
				<DarkModeIcon />
			</HeaderBar>
			
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
  padding: 0;
`


const HeaderBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25px 6%;
	background-color: #000;
	color: white;
	background: hsl(209, 23%, 22%);
`;


const $Link = styled(Link)`
	color: white;
	text-decoration: none;
	font-size: 1.5rem;
`;


export default Header