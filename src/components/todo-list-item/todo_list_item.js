import React from 'react';
import './todo_list_item.css';
import FA from 'react-fontawesome';

class TodoListItem extends React.Component  {

    state = {
            done: false,
        };

    onTodoItemClick = () => {
            this.setState(({done}) => {
                return{
                  done: !done,
                  important: false,
                };
            })
        }
    onTodoItemImportantClick = () =>{
        this.setState(({important}) => {
            return {
                done: false,
                important: !important,
        };
        })
    }

    render() {
        const {label, onDelete} = this.props;
        const {done, important} = this.state;

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
            onClick={this.onTodoItemClick} >{label}</span>
            <div className='icons-style'>
                <FA name="trash" onClick={onDelete}/>
                <FA onClick={this.onTodoItemImportantClick} className='important-item'  name="exclamation"/>
            </div>
        </div>
    );
    }
}

export default TodoListItem;