import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams} from 'react-router-dom'


function Searched() {
  const params = useParams()
  const [country, setCountry] = useState([])
  const getSearch = async (name) => {
    const api = await fetch(`https://restcountries.com/v2/name/${name}`)
    const data = await api.json()
    setCountry(data)
  } 

  useEffect(() => {
    getSearch(params.search)
  }, [params.search])
  
  return (
    <div>
      {country.map(item =>{
        return (
					<>
						<div className="">
							<div>
								<img src={item.flags.png} alt="" />
							</div>
							<div>
								<div className="">
									<h2>{item.name.common}</h2>
									<p>Native Name: {item.population}</p>
									<p>Population: {item.population}</p>
									<p>Sub Region: {item.region}</p>
									<p>Capital: {item.capital}</p>
								</div>
								<div className="">
									<p>Top Level Domain: {item.population}</p>
									<p>Currencies: {item.region}</p>
									<p>Languagues: {item.capital}</p>
								</div>
							</div>
						</div>
						<div>
							<p>Border Countries: {item.capital}</p>
						</div>
					</>
				);
      })}
    </div>
  )
}

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

export default Searched