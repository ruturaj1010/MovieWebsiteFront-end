import React from "react";

const Loader = () => {
    return (
        <div className="w-full h-full flex justify-center items-center text-3xl text-gray-400 ">
            <img className="w-60" src="/404NF.gif" alt="Loading..." />
        </div>
    );
}

export default Loader;