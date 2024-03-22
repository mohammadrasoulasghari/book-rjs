import React from 'react'
import { IoSearch } from "react-icons/io5";

function SearchBox({search,setSearch , searchHandler}) {
    
    return (
        <div>
            <input value={search} onChange={ (e) =>setSearch(e.target.value.toLocaleLowerCase())} type="text" placeholder='Search title' />
            <button onClick={searchHandler}><IoSearch /></button>
        </div>
    )
}

export default SearchBox