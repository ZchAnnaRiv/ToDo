import React from 'react';
import './search_panel.css';
import ItemFilter from "../item-status-filter/item_status_filter";

const SearchPanel = () =>
{

    return(
        <div className='search-field'>
            <input className='search-box' placeholder='search'/>
            <ItemFilter/>
        </div>
        );
}

export default SearchPanel;