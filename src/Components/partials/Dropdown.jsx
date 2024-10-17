import React from 'react'

const Dropdown = ( {title , options , catfunc } ) => {
    return (
        <div className="select relative w-64">
            <select
                className="outline-none bg-zinc-700 text-white w-full py-1 px-3 rounded-lg shadow-lg appearance-none cursor-pointer focus:ring focus:ring-blue-500 transition-all"
                defaultValue="0"
                onChange={(e)=>catfunc(e)}
                name="format"
                id="format"
            >
                <option className="bg-zinc-600 hover:bg-zinc-700" value="0">
                    {title.toUpperCase()}
                </option>
                {options.map((o , i)=>{
                    return <option key={i} className="bg-zinc-600 hover:bg-zinc-700" value={o}>
                        {o.toUpperCase()}
                    </option>
                })}
            </select>

            
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06 0L10 10.94l3.71-3.73a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        </div>
    )
}

export default Dropdown