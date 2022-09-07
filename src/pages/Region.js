import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link , useParams } from 'react-router-dom';


function Region() {
	const [continents, setContinent] = useState([]);
  const params = useParams()

	const getContinent = async (continent) => {
		const api = await fetch(`https://restcountries.com/v3.1/region/${continent}`);
		const data = await api.json();
		console.log(data);
    setContinent(data)
	};

	useEffect(() => {
    getContinent(params.region_name);
  }, [params.region_name]);

	return (
    <Grid>
      {continents.map(country => {
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
  );
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 2rem;
	place-content: center;
	padding: 0 1rem;
	@media (min-width: 768px) {
		padding: 0;
	}
`;

const Card = styled.div`
	background-color: #fff;
	border-radius: 5px;
	overflow: hidden;
	cursor: pointer;
	
	:hover{
		transform: scale(1.07);
	}

	img {
		width: 100%;
		height: 55%;
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

export default Region;
