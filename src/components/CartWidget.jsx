import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
    <Button colorScheme='teal' size='md'>
    Shopping Cart 
  
    <span className="material-symbols-outlined">
shopping_cart
</span>
</Button>
</div>
  )
}

export default CartWidget