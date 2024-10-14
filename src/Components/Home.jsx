import React from 'react';
import Sidenav from './partials/Sidenav';

const Home = () => {

    document.title = "MovieApp | Home";

    return (
        <div className='w-full h-full flex items-center justify-center'>
            <div className='w-[18%] h-full '>
                <Sidenav />
            </div>
            <div className='w-[82%] h-full '></div>
        </div>
    )
}

export default Home;
