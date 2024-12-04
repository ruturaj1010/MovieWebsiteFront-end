import React, { useEffect, useState } from 'react';
import Sidenav from './partials/Sidenav';
import Topnav from './partials/Topnav';
import axios from '../utils/Axios';
import Header from './partials/Header';
import HorizontalCards from './partials/HorizontalCards';
import Dropdown from './partials/Dropdown';
import Loader from './Loader';

const Home = () => {
    document.title = "Movies+More | Home";

    const [wallpaper, setWallpaper] = useState("");
    const [trending, setTrending] = useState("");
    const [category, setCategory] = useState("all");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const getWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/movie/day`);
            let randomData = await data.results[Math.floor(Math.random() * data.results.length)];
            setWallpaper(randomData);
        } catch (error) {
            console.log(error);
        }
    };

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            setTrending(data.results);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setTimeout(() => {
            if (!wallpaper) getWallpaper();
            getTrending();
        }, 400);
    }, [category]);

    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return wallpaper && trending ? (
        
        <div className="w-full h-full flex">

            <div
                className={`${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } xl:translate-x-0 fixed xl:static xl:w-[18%] md:w-[32%] w-64 h-full border-r-2 border-zinc-500 bg-zinc-800 transition-transform duration-300 z-10`}
            >
                <Sidenav onClickHam={toggleSidebar} close={!isSidebarOpen} />
            </div>

            <div className="w-full xl:w-[82%] h-screen overflow-y-auto">
                <Topnav onClickHam={toggleSidebar} hamburger={!isSidebarOpen} />
                <Header data={wallpaper} />
                <div className="w-full h-[58vh] p-4 mb-5">
                    <div className="w-full flex justify-between items-center">
                        <h1 className="text-2xl font-semibold">Trending</h1>
                        <Dropdown
                            title={"Filter"}
                            options={["tv", "movie", "all"]}
                            func={(e) => setCategory(e.target.value)}
                        />
                    </div>
                    <HorizontalCards data={trending} title={category} />
                </div>
            </div>
        </div>
    ) : (
        <div className="w-screen h-screen">
            <Loader />
        </div>
    );
};

export default Home;
