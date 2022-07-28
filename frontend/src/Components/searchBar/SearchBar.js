import React, { useEffect } from 'react';

import './SearchBar.scss';

function SearchBar({searchTerm, setSearchTerm}) {
    useEffect(() => {
        const keyDownHandler = event => {

        }
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        }
    }, []);

    return (
        <input 
            className="searchBar" 
            placeholder="Search by name"
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)}
        />
    );
}

export default SearchBar;