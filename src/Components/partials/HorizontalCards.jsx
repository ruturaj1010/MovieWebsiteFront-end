import React from 'react'

const HorizontalCards = () => {
    return (
        <div className='w-full h-[40vh] pl-4 py-2'>
            <h1 className='text-2xl font-semibold mb-2'>Trending</h1>

            <div className='w-full h-[88%] flex justify-start items-center gap-3 flex-wrap overflow-y-auto'>
                <div className='w-48 h-full bg-red-600'></div>
            </div>
        </div>
    )
}

export default HorizontalCards;