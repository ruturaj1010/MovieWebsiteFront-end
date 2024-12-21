import React from 'react'
import { Link } from 'react-router-dom'
import queryImg from '/queryImg.png'

const Cards = ( { data, title } ) => {

    // console.log( title );
    // console.log(data);

    return (
        <div className='w-full h-full flex flex-wrap justify-start items-center gap-7 md:gap-14 p-5 transition-all duration-700 ease-in-out'>
            { data.map( ( item, index ) => {
                return <Link to={`/${ item.media_type || title }/details/${item.id}`} key={ index } className='md:w-48 w-40 h-80 relative text-lg '>
                    <img className='w-full h-64 object-cover object-center mb-4 border-2 border-zinc-800 shadow-[5px_7px_12px_3px_rgba(10 ,10 , 10 , 0.5 )]'
                        src={ `${item.poster_path || item.backdrop_path || item.profile_path
                            ? `https://image.tmdb.org/t/p/original/${item.poster_path || item.backdrop_path || item.profile_path}`
                            : queryImg
                            }` } alt="" />
                    { item.vote_average ? <span className='absolute top-1 left-1 text-xs text-white bg-black opacity-70 shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>Rating: { item.vote_average }</span> : null }
                    { item.name || item.original_name || item.title || item.original_title }
                </Link>
            } ) }
        </div>
    )
}

export default Cards;