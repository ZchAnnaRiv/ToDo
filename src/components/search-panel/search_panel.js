import React from 'react';
import './search_panel.css';

const SearchPanel = () =>
{
    return(
        <div className='search-field'>
            <input className='search-box' placeholder='search'/>
            <ul>
                <li>All</li>
                <li>Active</li>
                <li>Done</li>
            </ul>
        </div>
        );
}

export default SearchPanel;