import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <div>
      <h1>Mi sitio de Ecommerce</h1>
      <ul>
        <li>Cat1</li>
        <li>Cat2</li>
        <li>Cat3</li>
      </ul>
      <CartWidget/>
    </div>
  )
}

export default NavBar