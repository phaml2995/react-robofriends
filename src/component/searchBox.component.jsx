import React from 'react';
import '../style/searchBox.styles.scss';

const SearchBox = ({ searchChange }) => {
    console.log("SearchBox");
    return (
        <div className="container">
            <input
                aria-label="Search Robots"
                type="search"
                placeholder="Search Robots"
                className="search-box"
                onChange={searchChange}
            />
        </div>
    )
}

export default SearchBox;