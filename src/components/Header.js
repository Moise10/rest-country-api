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
	max-width: 100%;
	background-color: #fff;
`;


const HeaderBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 25px 0;
	background-color: white;
	color: hsl(209, 23%, 22%);
	max-width: 1000px;
	margin: 0 auto;
`;


const $Link = styled(Link)`
	color: black;
	text-decoration: none;
	font-size: 1.5rem;
`;


export default Header