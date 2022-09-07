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
							<div>
								<h1>{country.name.common}</h1>
								<p>
									Population:
									<span> {country.population}</span>
								</p>
								<p>
									Region:
									<span> {country.region}</span>
								</p>
								<p>
									Capital:
									<span> {country.capital}</span>
								</p>
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
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 2rem;
	justify-items: center;
	margin-top: 3rem;
	padding: 0 1rem;
	@media (min-width: 768px) {
		padding: 0;
	}
`;

const Card = styled.div`
	cursor: pointer;
	border-radius: 5px;
	overflow: hidden;
	background-color: #fff;
	:hover {
		transform: scale(1.07);
	}

	img {
		width: 100%;
		height: 50%;
		object-fit: cover;
	}

	div {
		padding: 15px;

		h1,
		p {
			color: black;
			font-weight: 600;
			text-align: left;
		}
		p {
			margin-bottom: 0.8rem;
			font-size: 1rem;

			span {
				font-size: 0.8rem;
				font-weight: 400;
			}
		}
	}
`;

const $Link = styled(Link)`
	text-decoration: none;
`;

export default Countries