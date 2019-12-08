import React from 'react';
import './todo_list_item.css';
import FA from 'react-fontawesome';

class TodoListItem extends React.Component  {

    state = {
            done: false,
        };

    render() {
        const {label, onDelete,
            onToggleImportant,
            onToggleDone,
        important,done} = this.props;

        let classNames = '';
        if (done){
            classNames += ' done';
        }
        if (important){
            classNames += ' important-style';
        }
    return(
        <div className='list-item'>
            <span className={classNames}
            onClick={onToggleDone} >{label}</span>
            <div className='icons-style'>
                <FA name="trash" onClick={onDelete}/>
                <FA onClick={onToggleImportant} className='important-item'  name="exclamation"/>
            </div>
        </div>
    );
    }
}

export default TodoListItem;