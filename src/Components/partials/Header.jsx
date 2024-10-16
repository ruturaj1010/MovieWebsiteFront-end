import React from 'react'
import queryImg from "/queryImg.png";
import { Link } from 'react-router-dom';

const Header = ( { data } ) => {


    return (
        <div style={ {
            backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${data.backdrop_path || data.profile_path
                ? `https://image.tmdb.org/t/p/original/${data.backdrop_path || data.profile_path}`
                : queryImg
                })`,
            backgroundSize: 'cover',
            backgroundPosition: 'top 10%',
            backgroundRepeat: 'no-repeat',
        } }

            className='w-full h-[50vh] flex flex-col justify-end items-start px-[7%] pb-6
        '>
            <h1 className='w-[50%] text-4xl font-bold tracking-wide whitespace-nowrap text-purple-400' >{ data.name || data.original_name || data.title || data.original_title } : </h1>
            <p className='w-[50%] my-2' >{ data.overview.slice( 0, 190 ) } ...<Link className='text-blue-400 hover:underline'>more</Link> </p>
            <p ><i className="ri-megaphone-fill my-1 pr-1 capitalize "></i> Release Date : <span className='text-rose-500 uppercase text-base'>{ data.first_air_date }</span> on <span className='text-rose-500 uppercase text-base'>{ data.media_type }</span></p>
            <p ><i className="ri-film-line pr-1"></i> Rating : <span className='text-rose-500 uppercase text-base'>{ data.vote_average }</span> out of 10 </p>
            <Link className='px-3 py-1 rounded-md hover:bg-purple-700 bg-purple-500 font-semibold mt-1'>Watch Trailer</Link>
        </div>
    )
}

export default Header