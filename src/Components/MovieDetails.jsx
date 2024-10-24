import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import asyncLoadMovies, { removemovies } from "../store/actions/movieactions";
import HorizontalCards from "../Components/partials/HorizontalCards";
import queryImg from "/queryImg.png";
import Loader from "../Components/Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { movieinfo } = useSelector( ( state ) => state.Movie );
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( asyncLoadMovies( id ) );

    return () => {
      dispatch( removemovies() );
    };
  }, [id] );

  return movieinfo ? (
    <div
      style={ {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${movieinfo.detail.backdrop_path
          ? `https://image.tmdb.org/t/p/original/${movieinfo.detail.backdrop_path}`
          : queryImg
          })`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      } }
      className="screen max-w-screen min-h-screen mx-auto "
    >
      <nav className="max-w-screen-xl h-[8vh] mx-auto sm:px-0 px-4 text-2xl flex items-center gap-14">
        <Link
          onClick={ () => navigate( -1 ) }
          className="hover:text-purple-600 mr-2 text-3xl cursor-pointer ri-arrow-left-line"
        ></Link>
        <a
          href={ movieinfo.detail.homepage }
          target="_blank"
          className=" hover:scale-105"
        >
          <i className=" hover:text-purple-300 ri-external-link-fill"></i>
        </a>
        <a
          href={ `https://www.wikidata.org/wiki/${movieinfo.externalids.wikidata_id}` }
          target="_blank"
          className=" hover:scale-105"
        >
          <i className=" hover:text-purple-300 ri-earth-fill"></i>
        </a>
        <a
          href={ `https://www.imdb.com/title/${movieinfo.externalids.imdb_id}/` }
          target="_blank"
          className="hover:scale-105 hover:text-purple-300 "
        >
          Imdb
        </a>
      </nav>

      <div className=" max-w-screen-xl mx-auto mt-5 flex">
        <img
          className="h-[50vh] mb-2 object-cover object-center rounded-md"
          src={ `${movieinfo.detail.poster_path || movieinfo.detail.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${movieinfo.detail.poster_path || movieinfo.detail.backdrop_path
            }`
            : queryImg
            }` }
          alt="img"
        />

        <div className="content ml-[5%] ">
          <h1 className="text-4xl font-semibold tracking-wide ">
            { movieinfo.detail.name ||
              movieinfo.detail.original_name ||
              movieinfo.detail.title ||
              movieinfo.detail.original_title }

            <small className="px-3 text-xl">
              ({ movieinfo.detail.release_date.split( "-" )[0] })
            </small>
          </h1>

          <div className="mt-2 text-sm text-zinc-50 font-light flex flex-col items-start">
            <p className="flex flex-wrap items-center gap-x-7">
              <span>Released on : { movieinfo.detail.release_date }</span>
              <span>Runtime : { movieinfo.detail.runtime } mins</span>
              <span>{ movieinfo.detail.genres.map( ( item, index ) => item.name ).join( ", " ) }</span>
            </p>

            <span>
              { `Votes out of 10 : ${movieinfo.detail.vote_average} (${movieinfo.detail.vote_count})` }
            </span>

            <p className="text-base font-medium italic my-1">{ movieinfo.detail.tagline } </p>

            <h1 className="text-lg font-semibold mt-1">Overview</h1>
            <p className="w-[90%] text-base text-justify font-light text-wrap mb-2">{ movieinfo.detail.overview } </p>

            <h1 className="text-lg font-semibold mt-1">Languages</h1>
            <p className="w-[90%] text-sm text-justify font-light text-wrap mb-2">{ movieinfo.translations.map( item => item ).join( ", " ) } </p>

            <Link to={ `${pathname}/trailer` } className="px-3 py-2 bg-purple-700 text-zinc-50 font-semibold rounded-md" >
              <i className="mr-2 ri-play-large-fill"></i>
              Watch Trailer
            </Link>
          </div>

        </div>

      </div>

      { movieinfo.watchProviders.results?.AT &&
        <div className="max-w-screen-xl mx-auto mt-10 flex flex-col gap-5 ">
          { movieinfo.watchProviders.results && (
            <div className="w-[60%] flex flex-wrap items-center gap-5">
              <h1 className="text-lg font-medium">Available Platforms : </h1>
              { movieinfo.watchProviders.results?.AT?.flatrate?.map(
                ( item, index ) => {
                  return (
                    <img
                      key={ index }
                      title={ `${item.provider_name}` }
                      className="w-[5vh] h-[5vh] object-cover rounded-md"
                      src={ `https://image.tmdb.org/t/p/original/${item.logo_path}` }
                      alt="img"
                    />
                  );
                }
              ) }
            </div>
          ) }

          { movieinfo.watchProviders.results && (
            <div className="w-[60%] flex flex-wrap items-center gap-5">
              <h1 className="text-lg font-medium">
                Available platforms to Buy :{ " " }
              </h1>
              { movieinfo.watchProviders.results?.AT?.buy?.map( ( item, index ) => {
                return (
                  <img
                    key={ index }
                    title={ `${item.provider_name}` }
                    className="w-[5vh] h-[5vh] object-cover object-center rounded-md"
                    src={ `https://image.tmdb.org/t/p/original/${item.logo_path}` }
                    alt="img"
                  />
                );
              } ) }
            </div>
          ) }

          { movieinfo.watchProviders.results && (
            <div className="w-[60%] flex flex-wrap items-center gap-5">
              <h1 className="text-lg font-medium">
                Available Platforms in Rent :{ " " }
              </h1>
              { movieinfo.watchProviders.results?.AT?.rent?.map( ( item, index ) => {
                return (
                  <img
                    key={ index }
                    title={ `${item.provider_name}` }
                    className="w-[5vh] h-[5vh] object-cover object-center rounded-md"
                    src={ `https://image.tmdb.org/t/p/original/${item.logo_path}` }
                    alt="img"
                  />
                );
              } ) }
            </div>
          ) }
        </div>
      }

      <div className="max-w-screen-xl mx-auto py-5">
        <span className="inline-block w-full h-[2px] bg-zinc-500"></span>
        <h1 className="text-xl font-semibold tracking-wide my-2" >Recommmendations and Similar stuff</h1>
        <HorizontalCards data={ movieinfo.recommendations.length > 0 ? movieinfo.recommendations : movieinfo.similar } title="movie" />
        <Outlet />
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default MovieDetails;
