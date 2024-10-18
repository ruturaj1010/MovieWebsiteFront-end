import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";

const Trending = () => {

  const [category, setCategory] = useState( "all" );
  const [duration, setDuration] = useState( "day" );
  const [trending, setTrending] = useState( [] )

  const getTrending = async () => {
    try {
      const { data } = await axios.get( `trending/${category}/${duration}` );
      setTrending( data.results )
    } catch ( error ) {
      console.log( error );
    }
  }

  const navigate = useNavigate()

  useEffect( () => {
    setTimeout( () => {
      getTrending()
    }, 500 )
  }, [category, duration] )

  // console.log(trending);

  return (
      <div className="w-full h-full relative">

        <div className="w-full px-10 sticky top-0 left-0 flex justify-between items-center bg-purple-500">
          <h1 className="w-1/6 text-2xl font-semibold tracking-wide select-none">
            <i onClick={ () => navigate( -1 ) } className="text-purple-300 mr-2 cursor-pointer ri-arrow-left-line"></i> Trending
          </h1>

          <div className="w-5/6 flex items-center justify-center gap-4">
            <Topnav />
            <Dropdown title="trending" options={ ["all", "movie", "tv"] } func={ ( e ) => setCategory( e.target.value ) } />
            <Dropdown title="duration" options={ ["week", "day"] } func={ ( e ) => setDuration( e.target.value ) } />
          </div>
        </div>

        <div className="w-full h-full">
          { trending.length > 0 ? (
            <Cards data={ trending } />
          ) : (
            <div className="w-full h-[90vh] flex items-center justify-center">
              <Loader />
            </div>
          ) }
        </div>
      </div>

  );
};

export default Trending;