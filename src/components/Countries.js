import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


function Countries() {
  const [countries, setCountries] = useState([])

  const getAllCountries = async () => {
    const api = await fetch("https://restcountries.com/v3.1/all");
    const data = await api.json()
		console.log(data)
    setCountries(data)
  }

  useEffect(() => {
    getAllCountries();
  }, [])
  

  return (
    <Grid>
      {countries.map(country => {
        return (
					<Card key={country.name.common}>
						<$Link to={'/country/' + country.name.common}>
							<img src={country.flags.svg} alt="" />
							<div className="">
								<h1>{country.name.common}</h1>
								<p>Population: {country.population}</p>
								<p>Region: {country.region}</p>
								<p>Capital: {country.capital}</p>
							</div>
						</$Link>
					</Card>
				);
      })}
    </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: 2rem;
    justify-items: center;
		margin-top: 3rem;
`

const Card = styled.div`
	background: hsl(209, 23%, 22%);
	cursor: pointer;

	img {
		width: 100%;
		object-fit: cover;
		height: 12rem;
	}

	div {
		padding: 30px;

		h1,
		p {
			color: white;
		}
		p {
			margin-bottom: 0.8rem;
		}
	}
`;

const $Link = styled(Link)`
	text-decoration: none;
`;

export default Countries