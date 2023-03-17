import { Button } from '@chakra-ui/react'
import React from 'react'
import { EmailIcon } from '@chakra-ui/icons'
import { MdOutlineShoppingCart } from 'react-icons/md'




const CartWidget = () => {
  return (
    <div>
		<Button leftIcon={<MdOutlineShoppingCart />} colorScheme='teal' size='md' justifyContent='flex-end'>		
			<span>Cart</span>
			
		</Button>
	</div>
  )
}

export default CartWidget