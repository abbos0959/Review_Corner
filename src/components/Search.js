import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

export const Search = ({handleSearchNote}) => {
    return (
        <div className='search'>
            <SearchIcon className='search-icons'/>
            <input onChange={(e)=>handleSearchNote(e.target.value)} type="text" placeholder='Search here....'></input>
        </div>
    )
}
