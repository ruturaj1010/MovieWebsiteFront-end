import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/Axios";
import Cards from "./partials/Cards";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

const TVShows = () => {

    const [category, setCategory] = useState( "airing_today" );
    const [tvShows, setTvShows] = useState( [] )
    const [page, setPage] = useState( 1 )
    const [loading, setLoading] = useState( false );
    const [hasMore, setHasMore] = useState( true );

    document.title = `Movies+More | TV Shows ${category.toUpperCase()}`;

    const getTvShows = async () => {
        try {
            setLoading( true );
            const { data } = await axios.get( `/tv/${category}?page=${page}` );
            setTvShows( ( prevState ) => [...prevState, ...data.results] )
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

        setTvShows( [] );
        setPage( 1 );
        setHasMore( true );

        setTimeout( () => {
            getTvShows()
        }, 500 )
    }, [category] )

    // console.log(TVShows);

    return (
        <div className="w-full h-full relative">

            <div className="w-full px-10 sticky top-0 left-0 flex justify-between items-center bg-purple-500">
                <h1 className="w-1/6 text-2xl font-semibold tracking-wide select-none">
                    <i onClick={ () => navigate( -1 ) } className="text-purple-300 mr-2 cursor-pointer ri-arrow-left-line"></i>
                    TVShows
                </h1>

                <div className="w-5/6 flex items-center justify-center gap-4">
                    <Topnav />
                    <Dropdown title="TV Shows" options={ ["airing_today", "on_the_air", "popular", "top_rated"] } func={ ( e ) => setCategory( e.target.value ) } />
                </div>
            </div>

            <div className="w-full h-full">
                { tvShows.length > 0 ? (
                    <InfiniteScroll
                        dataLength={ tvShows.length }
                        next={ getTvShows }
                        hasMore={ hasMore }
                        loader={ loading ? <Loader /> : "" }
                    >
                        <Cards data={ tvShows } />
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

export default TVShows;