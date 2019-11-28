import React from 'react';
import './item_status_filter.css';

 class ItemFilter extends React.Component{
     render() {

     return(
        <div className='search-filter'>
            <button className='active'>All</button>
            <button className='passive'>Active</button>
            <button className='passive'>Done</button>
        </div>
    );
     }

 }
export default ItemFilter;