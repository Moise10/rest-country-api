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
					<Card>
						<img src={country.flags.png} alt="" />
						<div className="">
							<h1>{country.name.common}</h1>
							<p>Population: {country.population}</p>
							<p>Region: {country.region}</p>
							<p>Capital: {country.capital}</p>
						</div>
					</Card>
				);
      })}
    </Grid>
  );
}

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
	gap: 2rem;
	justify-items: center;
`;

const Card = styled.div`
	background-color: hsl(207, 26%, 17%);

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
		h1 {
			margin-bottom: 1.2rem;
			font-size: 24px;
		}
		p {
			margin-bottom: 0.8rem;
		}
	}
`;

export default Region;