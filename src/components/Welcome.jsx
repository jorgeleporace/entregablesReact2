import React from 'react'
import { Center,  Image, Box } from '@chakra-ui/react'


const Welcome = ({greeting}) => {
  return (
	<div className = "Welcome-Container">
		<h2>{greeting}</h2>
		<Center>
			<Box boxSize="XXl">
				<Image src="/src/images/AdobeStock_452897504.jpg" alt="Global Language Soluctions" />
			</Box>
		</Center>

	</div>
  )
};

export default Welcome