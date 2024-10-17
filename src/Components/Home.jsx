import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/Axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loader from './Loader';

const Home = () => {

    document.title = "MovieApp | Home";

    const [wallpaper, setWallpaper] = useState( "" )
    const [trending, setTrending] = useState( "" )
    const [category, setCategory] = useState( "all" )

    const getWallpaper = async () => {
        try {
            const { data } = await axios.get( `/trending/all/day` )
            // console.log( data.results );
            let randomData = await data.results[Math.floor( Math.random() * ( data.results.length ) )]
            // console.log( randomData );
            setWallpaper( randomData );

        } catch ( error ) {
            console.log( error );
        }
    }

    const getTrending = async () => {
        try {
            const { data } = await axios.get( `/trending/${category}/day` );
            // console.log( data );
            setTrending( data.results );
        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect( () => {
        setTimeout( () => {
            !wallpaper && getWallpaper();
            getTrending()
        }, 400 )
    }, [category] )

    // console.log(trending);

    return wallpaper && trending ? (
        <div className='w-full h-full flex'>
            <div className='w-[18%] h-full border-r-2 border-zinc-500'>
                <Sidenav />
            </div>
            <div className='w-[82%] h-screen overflow-y-auto'>
                <Topnav />
                <Header data={ wallpaper } />

                <div className='w-full h-[54vh] p-4 '>
                    <div className='w-full flex justify-between items-center pb-2'>
                        <h1 className='text-2xl font-semibold '>Trending</h1>
                        <Dropdown title={ "Filter" } options={ ["all", "tv", "movie"] } catfunc={ ( e ) => setCategory( e.target.value ) } />
                    </div>
                    <HorizontalCards data={ trending } />
                </div>
            </div>
        </div>
    ) : <div className='w-full h-full'> <Loader /> </div>
}

export default Home;
