import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import asyncLoadMovies, { removemovies } from '../store/actions/movieactions';

const MovieDetails = () => {

  const { id } = useParams();

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(asyncLoadMovies(id))

    return ()=> {
      dispatch( removemovies() )
    }
  } , [] )

  return (
    <div className='max-w-screen-xl min-h-screen mx-auto bg-red-300'>
      <nav className=''>
        <i onClick={ () => navigate( -1 ) } className="text-purple-300 mr-2 cursor-pointer ri-arrow-left-line"></i>
      </nav>
    </div>
  )
}

export default MovieDetails;