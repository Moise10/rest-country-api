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
  }

  return (
		<FormStyle onSubmit={handleForm}>
			<div>
				<SearchIcon />
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
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
		background: linear-gradient(35deg, #494949, #313131);
		font-size: 1.5rem;
		color: white;
		padding: 1rem 5rem;
		border: none;
		border-radius: 1rem;
		outline: none;
		width: 100%;
	}

	svg {
		position: absolute;
		top: 50%;
		left: 0;
		transform: translate(100%, -50%);
		color: white;
	}
`;


export default Form