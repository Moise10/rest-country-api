import React from 'react'
import styled from 'styled-components';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Form from '../components/Form';
import SelectForm from '../components/SelectForm';



function Header() {
  return (
		<>
			<HeaderBar className="">
				<h1>Where in the world?</h1>
				<DarkModeIcon />
			</HeaderBar>
			<SearchField>
				<Form />
				<SelectForm />
			</SearchField>
		</>
	);
}

const HeaderBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 0;
	background-color: black;
	color: white;
`;

const SearchField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;


export default Header