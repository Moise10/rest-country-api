import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'


function Form() {
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const handleForm = (e) => {
    e.preventDefault()
    navigate("/searched/" + input)
    console.log(e)
		setInput('')
  }

  return (
		<FormStyle onSubmit={handleForm}>
			<div>
				<SearchIcon />
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Search for a country"
				/>
			</div>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	div {
		position: relative;
		width: 100%;
	}

	input {
		border: none;
		font-size: 1rem;
		color: black;
		padding: 1rem 4rem;
		border: none;
		outline: none;
		width: 100%;
		cursor: pointer;
		&::placeholder {
			font-size: 1rem;
		}
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: black;
		font-size: 1.5rem;
	}
`;


export default Form