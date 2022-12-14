import React from 'react'
import Country from './Country'
import Home from './Home'
import Searched from './Searched'
import {Routes, Route, useLocation} from 'react-router-dom'
import Region from './Region'


function Pages() {
	const location = useLocation()
  return (
		<Routes location={location} key={location.pathname}>
			<Route path="/" element={<Home />}/>
			<Route path="/searched/:search" element={<Searched />} />
			<Route path="/region/:region_name" element={<Region />} />
			<Route path="/country/:country" element={<Country />} />
		</Routes>
	);
}

export default Pages