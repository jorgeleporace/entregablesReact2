import React from 'react'
import CartWidget from './CartWidget'
import Image from '../assets/Logo_gls_512.png'

const NavBar = () => {
  return (
    <div>
      <img src={Image}alt=''/>
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