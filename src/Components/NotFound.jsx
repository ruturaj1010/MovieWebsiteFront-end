import React from "react";

const Loader = ( { bgBlack = false } ) => {

    return (
        <div className={`w-screen h-screen  ${ bgBlack ? 'bg-black' : ''} flex justify-center items-center text-3xl text-gray-400 `}>
            <img className="w-60" src="/404NF.gif" alt="Loading..." />
        </div>
    );
}

export default Loader;