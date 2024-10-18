import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LocomotiveScroll from 'locomotive-scroll'
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movie";

const App = () => {
  
  const scroll = new LocomotiveScroll();

  return (
    <div className="max-w-screen min-h-screen bg-[#1F1E24] text-white ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={ <Trending /> } />
        <Route path="/popular" element={ <Popular /> } />
        <Route path="/movies" element={ <Movies /> } />
      </Routes>
      
    </div>
  );
};

export default App;
