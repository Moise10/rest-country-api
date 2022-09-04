import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {useParams, Link} from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';



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
						<Link
							to="/"
							style={{
								textDecoration: 'none',
								color: 'black',
								padding: '0 2rem',
								display: 'flex',
								alignItems: 'center',
							}}
						>
							<KeyboardBackspaceIcon /> Back
						</Link>
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
	margin-top: 4rem;
	margin-bottom: 5rem;
	@media screen and (max-width: 689px) {
		padding: 0 1rem;
	}
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