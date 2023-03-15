import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'
import { Icon } from "@chakra-ui/react";
import { FaShoppingCart } from "@chakra-ui/icons";


const CartWidget = () => {
  return (
    <div>
    <Button colorScheme='teal' size='md' justifyContent='flex-end'>
 
    <span className="material-symbols-outlined">
	<Icon as={FaShoppingCart} boxSize={6} color="green.500" />

</span>
<ButtonGroup size="sm" isAttached variant="outline"/>
</Button>
</div>
  )
}

export default CartWidget