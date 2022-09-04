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
			{country.map((item) => {
				return (
					<>
						<Grid className="" key={item.name}>
							<div>
								<img src={item.flags.svg} alt="" />
							</div>
							<div>
								<h1>{item.name}</h1>
								<Flex className="">
									<div className="">
										<p>
											<strong>Native Name:</strong> {item.nativeName}
										</p>
										<p>
											<strong>Population:</strong> {item.population}
										</p>
										<p>
											<strong>Sub Region:</strong> {item.subregion}
										</p>
										<p>
											<strong>Capital:</strong> {item.capital}
										</p>
									</div>
									<div className="">
										<p>
											<strong>Top Level Domain:</strong>{' '}
											{item.topLevelDomain[0]}
										</p>
									</div>
								</Flex>

								<div></div>
							</div>
						</Grid>
					</>
				);
			})}
		</div>
	);
}



const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
	gap: 2rem;
	justify-items: center;
	align-items: center;
	margin-top: 9rem;
	margin-bottom: 5rem;
	h1 {
		margin-bottom: 2rem;
		color: black;
		font-weight: 400;
	}

	p {
		margin-bottom: 1rem;
		color: black;
	}

	div {
		img {
			width: 100%;
		}
	}
`;

const Flex = styled.div`
	display: flex;
	gap: 4rem;
`;


export default Searched