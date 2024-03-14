import { useState } from 'react';
import Content from "./Content";
import { GrSearch } from "react-icons/gr";


function Search(props) {
    return (
        <div className="search">
            <div className="icon">
                <GrSearch />
            </div>
            <input type="text" placeholder="Search Brands.."/>
        </div>
    )
}
export default Search;