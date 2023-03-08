import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import NavBar from './components/NavBar';
import Welcome from './components/Welcome';
import ItemListContainer from './components/ItemListContainer';
import Home from './components/Home';

const App = () => {
  return (
    <BrowserRouter>
        <NavBar/>
		
        <Routes>
			
			
			<Route exact path="/" element={<Home/>}/>
			
			
         
			
        </Routes>
		<footer/>
    </BrowserRouter>
  );
}

export default App 