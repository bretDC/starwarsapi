import React from 'react';

function Search(props) {
    return (
        <form>
            <label htmlFor="characterName">
                Name:
            </label>
            <input type="text" id="characterName"/>
            <button type="submit">
                Search
            </button>
        </form>
    );
}

export default Search;