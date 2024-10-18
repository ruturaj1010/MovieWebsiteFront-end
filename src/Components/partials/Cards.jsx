import React from 'react'
import { Link } from 'react-router-dom'
import queryImg from '/queryImg.png'

const Cards = ( { data } ) => {

    console.log(data);
    return (
        <div className='w-full h-full flex flex-wrap justify-start items-center gap-14 p-3'>
            { data.map( ( item, index ) => {
                return <Link key={ index } className='w-48 h-80 '>
                    <img className='w-full h-64 object-cover object-center mb-5' src={ `${item.backdrop_path || item.profile_path
                        ? `https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path}`
                        : queryImg
                        }` } alt="" />
                    { item.name || item.original_name || item.title || item.original_title }
                </Link>
            } ) } 
        </div>
    )
}

export default Cards