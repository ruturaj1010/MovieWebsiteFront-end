import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LocomotiveScroll from 'locomotive-scroll'
import Trending from "./Components/Trending";

const App = () => {
  
  const scroll = new LocomotiveScroll();

  return (
    <div className="max-w-screen min-h-screen bg-[#1F1E24] text-white ">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={ <Trending /> } />
      </Routes>
      
    </div>
  );
};

export default App;
