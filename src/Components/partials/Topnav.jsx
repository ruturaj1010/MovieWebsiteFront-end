import React, { useState } from "react";
import { Link } from "react-router-dom";

const Topnav = () => {

    const [query, setQuery] = useState("");

    return (
        <div className="w-full h-[9vh] flex justify-center items-center gap-4 p-4 relative">
            <i className=" text-xl text-zinc-300 ri-search-line"></i>
            <input type="text"
                value={query}
                onChange={(e)=> setQuery(e.target.value)}
                className="w-[50%] px-3 py-1 text-lg text-zinc-300 outline-none border-none bg-transparent"
                placeholder="search anything here"
            />
            <div className="w-5">{ query.length > 0 && <i onClick={()=>setQuery("")} className="text-xl hover:cursor-pointer text-zinc-300 ri-close-large-fill"></i>}</div>

            <div className="w-[55%] max-h-[52.7vh]  absolute top-[95%] bg-zinc-300 text-black overflow-y-auto">

                <Link className="w-full px-4 py-3 font-medium duration-300 text-zinc-900 hover:text-zinc-700 bg-zinc-300 hover:bg-zinc-100 flex justify-start items-center gap-2 border-b border-zinc-500">
                    <img src="" alt="" />
                    <h1 className="text-lg">hello everybody</h1>
                </Link>
                
            </div>
        </div>
    );
};

export default Topnav;
