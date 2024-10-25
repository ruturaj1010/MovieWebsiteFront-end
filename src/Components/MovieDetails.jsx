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
  const { info } = useSelector( ( state ) => state.Movie );
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( asyncLoadMovies( id ) );

    return () => {
      dispatch( removemovies() );
    };
  }, [id] );

  return info ? (
    <div
      style={ {
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7), rgba(0,0,0,0.9)), url(${info.detail.backdrop_path
          ? `https://image.tmdb.org/t/p/original/${info.detail.backdrop_path}`
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
          href={ info.detail.homepage }
          target="_blank"
          className=" hover:scale-105"
        >
          <i className=" hover:text-purple-300 ri-external-link-fill"></i>
        </a>
        <a
          href={ `https://www.wikidata.org/wiki/${info.externalids.wikidata_id}` }
          target="_blank"
          className=" hover:scale-105"
        >
          <i className=" hover:text-purple-300 ri-earth-fill"></i>
        </a>
        <a
          href={ `https://www.imdb.com/title/${info.externalids.imdb_id}/` }
          target="_blank"
          className="hover:scale-105 hover:text-purple-300 "
        >
          Imdb
        </a>
      </nav>

      <div className=" max-w-screen-xl mx-auto mt-5 flex">
        <img
          className="h-[50vh] mb-2 object-cover object-center rounded-md"
          src={ `${info.detail.poster_path || info.detail.backdrop_path
            ? `https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path
            }`
            : queryImg
            }` }
          alt="img"
        />

        <div className="content ml-[5%] ">
          <h1 className="text-4xl font-semibold tracking-wide ">
            { info.detail.name ||
              info.detail.original_name ||
              info.detail.title ||
              info.detail.original_title }

            <small className="px-3 text-xl">
              ({ info.detail.release_date.split( "-" )[0] })
            </small>
          </h1>

          <div className="mt-2 text-sm text-zinc-50 font-light flex flex-col items-start">
            <p className="flex flex-wrap items-center gap-x-7">
              <span>Released on : { info.detail.release_date }</span>
              <span>Runtime : { info.detail.runtime } mins</span>
              <span>{ info.detail.genres.map( ( item, index ) => item.name ).join( ", " ) }</span>
            </p>

            <span>
              { `Votes out of 10 : ${info.detail.vote_average} (${info.detail.vote_count})` }
            </span>

            <p className="text-base font-medium italic my-1">{ info.detail.tagline } </p>

            <h1 className="text-lg font-semibold mt-1">Overview</h1>
            <p className="w-[90%] text-base text-justify font-light text-wrap mb-2">{ info.detail.overview } </p>

            <h1 className="text-lg font-semibold mt-1">Languages</h1>
            <p className="w-[90%] text-sm text-justify font-light text-wrap mb-2">{ info.translations.map( item => item ).join( ", " ) } </p>

            <Link to={ `${pathname}/trailer` } className="px-3 py-2 mt-2 bg-purple-700 text-zinc-50 font-semibold rounded-md" >
              <i className="mr-2 ri-play-large-fill"></i>
              Watch Trailer
            </Link>
          </div>

        </div>

      </div>

      { info.watchProviders.results?.AT &&
        <div className="max-w-screen-xl mx-auto mt-10 flex flex-col gap-5 ">
          { info.watchProviders.results && (
            <div className="w-[60%] flex flex-wrap items-center gap-5">
              <h1 className="text-lg font-medium">Available Platforms : </h1>
              { info.watchProviders.results?.AT?.flatrate?.map(
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

          { info.watchProviders.results && (
            <div className="w-[60%] flex flex-wrap items-center gap-5">
              <h1 className="text-lg font-medium">
                Available platforms to Buy :{ " " }
              </h1>
              { info.watchProviders.results?.AT?.buy?.map( ( item, index ) => {
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

          { info.watchProviders.results && (
            <div className="w-[60%] flex flex-wrap items-center gap-5">
              <h1 className="text-lg font-medium">
                Available Platforms in Rent :{ " " }
              </h1>
              { info.watchProviders.results?.AT?.rent?.map( ( item, index ) => {
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
        <HorizontalCards data={ info.recommendations.length > 0 ? info.recommendations : info.similar } title="movie" />
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
