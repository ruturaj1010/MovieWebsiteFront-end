import axios from "../../utils/Axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {

    const [query, setQuery] = useState( "" );
    const [searches, setSearches] = useState( "" );

    const getSearches = async () => {
        try {
            const { data } = await axios.get( `/search/multi?query=${query}` )
            console.log( data.results );
            setSearches( data.results );

        } catch ( error ) {
            console.log( "Error : ", error );
        }
    }

    useEffect( () => {
        getSearches();
    }, [query] )

    return (

        <div className="w-full h-[9vh] flex justify-center items-center gap-4 p-4 relative">
            <i className=" text-xl text-zinc-300 ri-search-line"></i>
            <input type="text"
                value={ query }
                onChange={ ( e ) => setQuery( e.target.value ) }
                className="w-[50%] px-3 py-1 text-lg text-zinc-300 outline-none border-none bg-transparent"
                placeholder="search anything here"
            />
            <div className="w-5">{ query.length > 0 && <i onClick={ () => setQuery( "" ) } className="text-xl hover:cursor-pointer text-zinc-300 ri-close-large-fill"></i> }</div>

            <div className="w-[55%] max-h-[52.7vh]  absolute top-[95%] bg-zinc-300 text-black overflow-y-auto">

                { searches && searches.map( ( item, index ) => {
                    return <Link key={item.id} className="w-full px-10 py-3 font-medium duration-300 text-zinc-900 hover:text-zinc-700 bg-zinc-300 hover:bg-zinc-100 flex justify-start items-center gap-4 border-b border-zinc-500">
                        <img className="w-[4vw] h-[4vw] object-center object-cover rounded-md" src={`https://image.tmdb.org/t/p/original/${item.backdrop_path || item.profile_path }`} alt="" />
                        <h1 className="text-lg">{item.name || item.original_name || item.title || item.original_title}</h1>
                    </Link>
                } ) }

            </div>
        </div>
    );
};

export default Topnav;
