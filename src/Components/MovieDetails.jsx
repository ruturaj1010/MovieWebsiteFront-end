import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import asyncLoadMovies, { removemovies } from "../store/actions/movieactions";
import queryImg from "/queryImg.png";
import Loader from "../Components/Loader"

const MovieDetails = () => {

  const { id } = useParams();
  const navigate = useNavigate();
  const { movieinfo } = useSelector( state => state.Movie )
  const dispatch = useDispatch();

  useEffect( () => {

    dispatch( asyncLoadMovies( id ) );

    return () => {
      dispatch( removemovies() );
    };
  }, [] );

  return movieinfo ? (
    <div
      style={ {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${movieinfo.detail.backdrop_path
          ? `https://image.tmdb.org/t/p/original/${movieinfo.detail.backdrop_path
          }`
          : queryImg
          })`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      } }
      className="w-screen min-h-screen mx-auto "
    >
      <nav className="max-w-screen-xl h-[8vh] mx-auto px-4 text-2xl flex items-center gap-14">
        <Link
          onClick={ () => navigate( -1 ) }
          className="hover:text-purple-600 mr-2 text-3xl cursor-pointer ri-arrow-left-line"
        ></Link>
        <a href={ movieinfo.detail.homepage } target="_blank"
          className=" hover:scale-105">
          <i className=" hover:text-purple-300 ri-external-link-fill"></i>
        </a>
        <a href={ `https://www.wikidata.org/wiki/${movieinfo.externalids.wikidata_id}` } target="_blank"
          className=" hover:scale-105">
          <i className=" hover:text-purple-300 ri-earth-fill"></i>
        </a>
        <a href={ `https://www.imdb.com/title/${movieinfo.externalids.imdb_id}/` } target="_blank"
          className="hover:scale-105 hover:text-purple-300 " >
          imdb
        </a>
      </nav>
    </div>
  ) : ( <div className="w-screen h-screen flex justify-center items-center"> <Loader /> </div> );
};

export default MovieDetails;
