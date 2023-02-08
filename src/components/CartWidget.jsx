import { Button, ButtonGroup } from '@chakra-ui/react'
import React from 'react'

const CartWidget = () => {
  return (
    <div>
    <Button colorScheme='teal' size='md' justifyContent='flex-end'>
 
    <span className="material-symbols-outlined">
shopping_cart
</span>
<span>5</span>
</Button>
</div>
  )
}

export default CartWidget