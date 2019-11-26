import React from 'react';
import './todo_list_item.css';
import FA from 'react-fontawesome';

const TodoListItem = ({label, important = false}) => {

    const Style = {
      color: important ? 'tomato' : 'black'
    };

    return(
        <div className='list-item'>
            <span style={Style}>{label}</span>
            <div className='icons-style'>
                <FA name="trash"/>
                <FA name="check"/>
            </div>
        </div>
    );
}

export default TodoListItem;