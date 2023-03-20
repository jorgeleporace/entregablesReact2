import { Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { EmailIcon } from '@chakra-ui/icons'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { CourseContext } from '../contexts/CourseContexts';



const CartWidget = () => {
  const [cart, useCart ] = useContext(CourseContext);
  
  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
   }, 0);


  return (
    <div>
		<Button leftIcon={<MdOutlineShoppingCart />} colorScheme='teal' size='md' justifyContent='flex-end'>		

      <span> Cart: {quantity}</span>
			
		</Button>
	</div>
  )
}

export default CartWidget