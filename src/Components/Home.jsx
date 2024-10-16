import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/Axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';

const Home = () => {

    document.title = "MovieApp | Home";

    const [wallpaper, setWallpaper] = useState( "" )

    const getWallpaper = async () => {
        try {
            const { data } = await axios.get( `/trending/all/day` )
            // console.log( data.results );
            let randomData = await data.results[Math.floor( Math.random() * ( data.results.length ) )]
            // console.log( randomData);
            setWallpaper( randomData);

        } catch ( error ) {
            console.log( error );
        }
    }

    useEffect( () => {
        !wallpaper && getWallpaper();
    }, [] )

    return wallpaper ? (
        <div className='w-full h-full flex'>
            <div className='w-[18%] h-full border-r-2 border-zinc-500'>
                <Sidenav />
            </div>
            <div className='w-[82%] h-full '>
                <Topnav />
                <Header data={ wallpaper } />
                <HorizontalCards />
            </div>
        </div>
    ) : <h1>Loading</h1>
}

export default Home;
