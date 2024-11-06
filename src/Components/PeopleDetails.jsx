import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import asyncLoadPeople, { removePeople } from "../store/actions/personactions";
import HorizontalCards from "../Components/partials/HorizontalCards";
import Dropdown from "../Components/partials/Dropdown"
import Loader from "../Components/Loader";

const PeopleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { info } = useSelector( ( state ) => state.People );
  const dispatch = useDispatch();
  const [category, setCategory] = useState( "movie" )

  useEffect( () => {
    dispatch( asyncLoadPeople( id ) );

    return () => {
      dispatch( removePeople() );
    };
  }, [id] );

  return info ? (
    <div className=" max-w-screen-xl min-h-screen mx-auto px-[2%] sm:px-0 pb-5" >

      <nav className="w-full h-[8vh] flex items-center">
        <Link
          onClick={ () => navigate( -1 ) }
          className="block hover:text-purple-600 text-3xl cursor-pointer ri-arrow-left-line"
        ></Link>
      </nav>

      <div className="w-full mx-auto mt-5 flex justify-center items-start gap-10">

        <div className="w-1/5 min-h-screen text-zinc-400">

          <img
            className="w-[80%] h-[40vh] mb-2 object-cover object-center rounded-md"
            src={ `https://image.tmdb.org/t/p/original/${info.detail.profile_path}` }
            alt="img"
          />
          <span className="inline-block w-[80%] h-[1px] place-self-center bg-zinc-500"></span>

          <div className="w-[80%] flex justify-between items-center text-xl px-2">

            <a
              href={ `https://www.wikidata.org/wiki/${info.externalids.wikidata_id}` }
              target="_blank"
              className=" hover:scale-105 hover:text-purple-500"
            >
              <i className=" ri-earth-fill"></i>
            </a>

            { info.externalids.facebook_id && <a
              href={ `https://www.facebook.com/${info.externalids.facebook_id}/` }
              target="_blank"
              className="hover:scale-105 hover:text-purple-500 "
            >
              <i className="ri-facebook-circle-fill"></i>
            </a> }


            { info.externalids.instagram_id && <a
              href={ `https://www.instagram.com/${info.externalids.instagram_id}/` }
              target="_blank"
              className="hover:scale-105 hover:text-purple-500 "
            >
              <i className="ri-instagram-fill"></i>
            </a> }

            <a
              href={ `https://www.x.com/${info.externalids.twitter_id}/` }
              target="_blank"
              className="hover:scale-105 hover:text-purple-500 "
            >
              <i className="ri-twitter-x-fill"></i>
            </a>

          </div>

          <h1 className=" font-semibold text-zinc-200 text-xl mt-5 " >Person Information</h1>

          <h1 className=" font-medium text-base mt-3 " >Known for</h1>
          <h1 className=" font-medium text-sm " >{ info.detail.known_for_department } </h1>

          <h1 className=" font-medium text-base mt-3 " >Gender</h1>
          <h1 className=" font-medium text-sm " >{ info.detail.gender === 1 ? "female" : "male" }</h1>

          <h1 className=" font-medium text-base mt-3 " >Birth date</h1>
          <h1 className=" font-medium text-sm " >{ info.detail.birthday } </h1>

          <h1 className=" font-medium text-base mt-3 " >Birth place</h1>
          <h1 className=" font-medium text-sm " >{ info.detail.place_of_birth } </h1>

          <h1 className=" font-medium text-base mt-3 " >Death date</h1>
          <h1 className=" font-medium text-sm " >{ info.detail.deathday ? info.detail.deathday : "Alive" } </h1>

          <h1 className=" font-medium text-base mt-3 " >Also known as</h1>
          <h1 className=" font-medium text-sm " >{ info.detail.also_known_as.join( ', ' ) } </h1>

        </div>

        <div className="w-4/5 min-h-screen text-zinc-400">

          <h1 className="text-5xl mb-5 font-bold text-white tracking-wide" >{ info.detail.name }</h1>

          <h1 className="text-xl my-2 font-semibold text-zinc-300">Biography</h1>
          <h1 className="text-xm ">{ info.detail.biography }</h1>

          <h1 className="text-xl mt-5 font-semibold text-zinc-300">Known For</h1>
          <HorizontalCards data={ info.combinedCredits.cast } />

          <div className=" w-full flex justify-between my-8">
            <h1 className="text-white font-medium text-xl">Acting</h1>
            <Dropdown title="Category" options={ ["tv", "movie"] } func={ ( e ) => setCategory( e.target.value ) } />
          </div>

          <div className="w-full h-[50vh] shadow-md shadow-gray-200 border-2 border-zinc-700 p-5 overflow-y-auto list-disc mb-10">
            { info[category + "Credits"].cast.map( ( item, index ) => {
              return <li key={index} className="hover:text-white text-gray-400 p-5 rounded duration-300 cursor-pointer hover:bg-zinc-800 ">
                <Link to={`/${category}/details/${item.id}`} >
                  <span >Movie: { item.name || item.original_name || item.title || item.original_title }</span>
                  <span className="block ml-5">{ item.character && `Character Name: ${item.character}`}</span>
                </Link>
              </li>
            } ) }

          </div>

        </div>

      </div>

    </div>
  ) : (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader />
    </div>
  );
};

export default PeopleDetails;
