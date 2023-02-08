import { useState } from 'react'
import './App.css'

import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemListContainer2 from './components/ItemListContainer2'

const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting = "Bienvenidos a www.onlinegls.com"/>
      <ItemListContainer2/>
    </>
    
  )
}

export default App