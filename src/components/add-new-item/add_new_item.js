import React from 'react';
import './add_new_item.css';

class AddNewItem extends React.Component{
    render() {
        return(
            <div className='add-item-field'>
                <input className='add-box' type='text'/>
                <button className='add-btn'>Add</button>
            </div>
        );
    }
}

export default AddNewItem;