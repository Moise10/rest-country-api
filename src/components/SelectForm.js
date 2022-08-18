import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function SelectForm() {
  
  return (
		<div>
			<Link to={'/region/africa'}>africa</Link>
			<Link to={'/region/europe'}>Europe</Link>
			<Link to={'/region/america'}>America</Link>
			<Link to={'/region/asia'}>Asia</Link>
		</div>
	);
}

const Select = styled.select`
  overflow: hidden;
`

export default SelectForm




