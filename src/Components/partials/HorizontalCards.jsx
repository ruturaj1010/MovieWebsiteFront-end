import React from 'react'
import queryImg from '/queryImg.png'
import { Link } from 'react-router-dom'

const HorizontalCards = ( { data, title } ) => {
    return (

        <div className='w-full h-[42vh] flex justify-start items-center gap-3 flex-nowrap scrollhide overflow-y-hidden overflow-x-auto pb-2'>
            { data.map( ( item, index ) => {
                return <Link to={`${item.media_type || title }/details/${item.id}`} key={ index } className='w-48 h-[40vh] bg-zinc-800 hover:bg-zinc-700 rounded-md shadow-lg shrink-0 p-1'>
                    <img className='w-full h-36 mb-2 object-cover object-center rounded-md' src={ `${ item.poster_path || item.backdrop_path || item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${ item.poster_path || item.backdrop_path || item.profile_path}`
                        : queryImg
                        }` } alt="" />
                    <div className='w-full h-28 flex flex-col justify-between items-start px-1'>
                        <h1 className='text-sm text-wrap font-semibold text-purple-400' >{ (item.name || item.original_name || item.title || item.original_title).slice(0, 45) }</h1>
                        <p className='text-sm text-wrap' >{ item?.overview?.slice(0, 50) || "No description available" } ...<span className='text-blue-400 hover:underline cursor-pointer'>more</span> </p>
                    </div>
                </Link>
            } ) }
        </div>

    )
}

export default HorizontalCards;