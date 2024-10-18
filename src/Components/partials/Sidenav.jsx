import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
    return (
        <div className="w-full h-screen p-5">
            <h1 className="text-[#6556CD] text-2xl select-none">
                <i className="ri-movie-2-fill"></i>
                <span className="ml-1 font-bold italic">Movies + More</span>
            </h1>

            <nav className="flex flex-col items-start gap-2 text-lg text-zinc-300">
                <h1 className="font-semibold text-white text-xl mt-7 mb-3 select-none">
                    New Feeds
                </h1>

                <Link to={"/trending"} className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 ri-fire-fill"></i> Trending
                </Link>

                <Link to={"/popular"} className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 ri-bard-fill"></i> Popular
                </Link>

                <Link to={"/movies"} className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 ri-movie-fill"></i> Movies
                </Link>

                <Link className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 ri-tv-fill"></i> TV Shows
                </Link>

                <Link className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 text-xl ri-user-heart-fill"></i> People
                </Link>
            </nav>

            <nav className="flex flex-col items-start gap-2 text-base text-zinc-300 border-t mt-5">
                <h1 className="font-medium text-white text-base mt-6 select-none">
                    Website information
                </h1>

                <Link className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 ri-information-2-fill"></i> About <i>Movies + More</i>
                </Link>

                <Link className="w-full p-2 rounded-md transition duration-300 hover:font-semibold hover:text-white hover:bg-[#6556CD]">
                    <i className=" mr-1 ri-phone-fill"></i> Contact us
                </Link>

            </nav>
        </div>
    );
};

export default Sidenav;
