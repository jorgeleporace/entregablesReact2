import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
		
        <Routes>
			
			<Route exact path="/Welcome" element={<Welcome greeting = "Bienvenidos a www.onlinegls.com"/>}/>
			<Route exact path="/" element={<Welcome greeting = "Bienvenidos a www.onlinegls.com"/>}/>
			<Route exact path="/Home" element={<ItemListContainer/>}/>
			
         
			
        </Routes>
		<footer/>
    </BrowserRouter>
  );
}

export default App 