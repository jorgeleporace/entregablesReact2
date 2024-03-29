import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import NavBar from "./components/NavBar";
import Welcome from "./components/Welcome";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import OurTeam from "./components/OurTeam";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import Translations from "./components/Translations";
import { CourseProvider } from "./contexts/CourseContexts";
import Footer from "./components/Footer";

const App = () => {
  return (
    <CourseProvider>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route
          exact
          path="/"
          element={<Welcome greeting={"Welcome to GLS"} />}
        />
        <Route exact path="/courses" element={<ItemListContainer />} />
        <Route exact path="/ourteam" element={<OurTeam />} />
        <Route exact path="/translations" element={<Translations />} />
        <Route
          exact
          path="/courses/:category"
          element={<ItemListContainer />}
        />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </CourseProvider>
  );
};

export default App;