import React from 'react';
import './todo_list_item.css';
import FA from 'react-fontawesome';

class TodoListItem extends React.Component  {

    onTodoItemClick = () => {
            alert(`Done: ${this.props.label}`);
        }


    render() {
        const {label, important = false} = this.props;

        const Style = {
            color: important ? 'tomato' : 'black'
        };
    return(
        <div className='list-item'>
            <span style={Style}
            onClick={this.onTodoItemClick} >{label}</span>
            <div className='icons-style'>
                <FA name="trash"/>
                <FA name="exclamation"/>
            </div>
        </div>
    );
    }

}

export default TodoListItem;