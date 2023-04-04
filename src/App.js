import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import ScrollButton from "./components/ScrollButton";


export default function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/products" Component={Products} />
          <Route path="/services" Component={Services} />
          <Route path="/sign-up" Component={SignUp} />
        </Routes>
        <ScrollButton />
      </BrowserRouter>
    </>
  );
}