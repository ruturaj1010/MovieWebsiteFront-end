import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Trending = () => {

  const [category, setCategory] = useState( "all" );
  const [duration, setDuration] = useState( "day" );
  const [trending, setTrending] = useState( [] )
  const [page, setPage] = useState( 1 )
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  
  document.title = "Movies+More | Trending "+ category.toUpperCase();

  const getTrending = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get( `trending/${category}/${duration}?page=${page}` );
      setTrending( ( prevState ) => [...prevState, ...data.results] )
      if (data.results.length === 0) {
        setHasMore(false);
      } else {
        setPage(page + 1);
      }
      // console.log( data.results );

    } catch ( error ) {
      console.log( error );
    } finally {
      setLoading(false);
    }
  }

  const navigate = useNavigate()

  useEffect( () => {

    setTrending([]);
    setPage(1);
    setHasMore(true); 

    setTimeout( () => {
      getTrending()
    }, 500 )
  }, [category, duration] )

  // console.log(trending);

  return (
    <div className="w-full h-full relative">

      <div className="w-full md:px-10 px-2 py-5 md:py-0 z-10 sticky top-0 left-0 flex justify-between items-center bg-purple-500">
        <h1 className="min-w-[200px] text-2xl font-semibold tracking-wide select-none">
          <i onClick={ () => navigate( -1 ) } className="text-purple-300 mr-2 cursor-pointer ri-arrow-left-line"></i> 
          Trending  <small className="text-sm text-zinc-300">({ category.toUpperCase() })</small>
        </h1>

        <div className="w-5/6 hidden md:flex items-center justify-center gap-4">
          <Topnav />
          <Dropdown title="trending" options={ [ "movie", "tv", "all" ] } func={ ( e ) => setCategory( e.target.value ) } />
          <Dropdown title="duration" options={ ["week", "day"] } func={ ( e ) => setDuration( e.target.value ) } />
        </div>
      </div>

      <div className="w-full h-full">
        { trending.length > 0 ? (
          <InfiniteScroll
            dataLength={ trending.length }
            next={ getTrending }
            hasMore={ hasMore }
            loader={ loading ? <Loader /> : null}
          >
            <Cards data={ trending } title={ category } />
          </InfiniteScroll>
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