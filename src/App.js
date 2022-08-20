import React from 'react';
import Header from './components/Header';
import Pages from './pages/Pages';
import styled from 'styled-components'
import Form from './components/Form'
import SelectForm from './components/SelectForm';



function App() {
  return (
		<Container>
			<Header />

			<div className="app">
				<SearchField>
					<Form />
					<SelectForm />
				</SearchField>
				<Pages />
			</div>
		</Container>
	);
}

const Container = styled.div`

	.app {
		padding: 0 6%;
	}
`;

const SearchField = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 2rem 0;
`;



export default App;
