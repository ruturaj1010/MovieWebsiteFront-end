import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const Movie = () => {

    const [category, setCategory] = useState( "now_playing" );
    const [movies, setMovies] = useState( [] )
    const [page, setPage] = useState( 1 )
    const [loading, setLoading] = useState( false );
    const [hasMore, setHasMore] = useState( true );

    document.title = `Movies+More | Movies ${category.toUpperCase()}`;

    const getMovies = async () => {
        try {
            setLoading( true );
            const { data } = await axios.get( `/movie/${category}?page=${page}` );
            setMovies( ( prevState ) => [...prevState, ...data.results] )
            if ( data.results.length === 0 ) {
                setHasMore( false );
            } else {
                setPage( page + 1 );
            }
            // console.log( data.results );

        } catch ( error ) {
            console.log( error );
        } finally {
            setLoading( false );
        }
    }

    const navigate = useNavigate()

    useEffect( () => {

        setMovies( [] );
        setPage( 1 );
        setHasMore( true );

        setTimeout( () => {
            getMovies()
        }, 500 )
    }, [category] )

    // console.log(Movie);

    return (
        <div className="w-full h-full relative">

            <div className="w-full md:px-10 px-2 md:py-0 py-5 z-10 sticky top-0 left-0 flex justify-between items-center bg-purple-500">
                <h1 className="md:w-1/6 min-w-[200px] text-2xl font-semibold tracking-wide select-none">
                    <i onClick={ () => navigate( -1 ) } className="text-purple-300 mr-2 cursor-pointer ri-arrow-left-line"></i>
                    Movie <small className="text-sm text-zinc-200">({ category.toUpperCase() })</small>
                </h1>

                <div className="w-5/6 md:flex hidden items-center justify-center gap-4">
                    <Topnav />
                    <Dropdown title="Movie" options={ [ "popular", "top_rated", "upcoming", "now_playing" ] } func={ ( e ) => setCategory( e.target.value ) } />
                </div>
            </div>

            <div className="w-full h-full">
                { movies.length > 0 ? (
                    <InfiniteScroll
                        dataLength={ movies.length }
                        next={ getMovies }
                        hasMore={ hasMore }
                        loader={ loading ? <Loader /> : "" }
                    >
                        <Cards data={ movies } title="movie" />
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

export default Movie;