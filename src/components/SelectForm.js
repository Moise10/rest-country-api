import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';

function SelectForm() {
	const [region, setRegion] = useState('')
	const handleChange = (event) => {
		setRegion(event.target.value);
	};
  
  return (
		<ContainerStyles>
			<Box sx={{ minWidth: 220 }}>
				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Filter by region
					</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={region}
						label="region"
						onChange={handleChange}
					>
						<MenuItem value="Filter by region">Filter by region</MenuItem>
						<MenuItem value="Europe">
							<$Link to={'/region/europe'}>Europe</$Link>
						</MenuItem>
						<MenuItem value="Africa">
							<$Link to={'/region/africa'}>Africa</$Link>
						</MenuItem>
						<MenuItem value="Asia">
							<$Link to={'/region/asia'}>Asia</$Link>
						</MenuItem>
						<MenuItem value="America">
							<$Link to={'/region/america'}>America</$Link>
						</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</ContainerStyles>
	);
}

const ContainerStyles = styled.div`
  .css-6hp17o-MuiList-root-MuiMenu-list {
		background-color: red;
	}
`;




const $Link = styled(Link)`
  color: #000;
	text-decoration: none;
`




export default SelectForm




