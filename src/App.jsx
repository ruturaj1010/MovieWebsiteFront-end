import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import LocomotiveScroll from 'locomotive-scroll'
import Trending from "./Components/Trending";
import Popular from "./Components/Popular";
import Movies from "./Components/Movie";
import TVShows from "./Components/TVShows";
import People from "./Components/People";
import MovieDetails from "./Components/MovieDetails";
import TvDetails from "./Components/TvDetails";
import PeopleDetails from "./Components/PeopleDetails";

const App = () => {

  const scroll = new LocomotiveScroll();

  return (
    <div className="max-w-screen min-h-screen bg-[#1F1E24] text-white ">

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/trending" element={ <Trending /> } />
        <Route path="/popular" element={ <Popular /> } />
        <Route path="/movie" element={ <Movies /> } />
        <Route path="/movie/details/:id" element={ <MovieDetails /> } />
        <Route path="/tv" element={ <TVShows /> } />
        <Route path="/tv/details/:id" element={ <TvDetails /> } />
        <Route path="/person" element={ <People /> } />
        <Route path="/person/details/:id" element={ <PeopleDetails /> } />
      </Routes>

    </div>
  );
};

export default App;
