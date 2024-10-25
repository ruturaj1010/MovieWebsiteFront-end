import React from 'react'
import { useSelector } from 'react-redux'
import ReactPlayer from 'react-player';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound'

const Trailer = () => {

    const Navigate = useNavigate();
    const { pathname } = useLocation();

    const category = pathname.includes( "movie" ) ? "Movie" : "Tv";
    const ytvideo = useSelector( state => state[category].info?.videos?.key );

    console.log( ytvideo, pathname );

    return (
        <div className='absolute top-0 left-0 bg-[rgba(0,0,0,0.9)] w-screen mx-auto h-screen flex justify-center items-center'>
            <Link
                onClick={ () => Navigate( -1 ) }
                className="absolute top-4 left-8 hover:text-purple-600 mr-2 text-3xl cursor-pointer ri-close-fill"
            ></Link>
            { ytvideo !== undefined ? 
                <ReactPlayer url={ `https://www.youtube.com/watch?v=${ytvideo}` } controls={ true } playing={ true } height="85%" width="90%" /> 
                : <NotFound bgBlack={false} />
            }

        </div>
    )
}

export default Trailer;