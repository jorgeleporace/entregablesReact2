import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom';
import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import ItemListContainer2 from './components/ItemListContainer2'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <ItemListContainer greeting = "Bienvenidos a www.onlinegls.com"/>
        <ItemListContainer2/>
      </Routes>
    </BrowserRouter>
  );
}

export default App