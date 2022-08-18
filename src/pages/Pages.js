import React from 'react'
import Country from './Country'
import Home from './Home'
import Searched from './Searched'
import {Routes, Route} from 'react-router-dom'
import Region from './Region'

function Pages() {
  return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/country" element={<Country />} />
			<Route path="/search/:search" element={<Searched />} />
			<Route path="/region/:region_name" element={<Region />}/>
		</Routes>
	);
}

export default Pages