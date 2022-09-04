import React from 'react';
import Header from './components/Header';
import Pages from './pages/Pages';
import styled from 'styled-components'
import Form from './components/Form'
import SelectForm from './components/SelectForm';
import CssBaseline from '@mui/material/CssBaseline';




function App() {
  return (
		<>
			<Header />
			<Container>
				<div className="app">
					<div className=""></div>
					<SearchField>
						<div className="">
							<Form />
						</div>
						<div className="">
							<SelectForm />
						</div>
					</SearchField>
					<Pages />
				</div>
			</Container>
		</>
	);
}

const Container = styled.div`
  max-width: 1000px;
	margin: 0 auto;
	
`;

const SearchField = styled.div`
	margin: 2rem 0;
	@media screen and (max-width: 689px) {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 0 1rem;
	}

	@media (min-width: 689px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
`;



export default App;
