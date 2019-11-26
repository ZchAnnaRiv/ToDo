import React from 'react';
import TodoListItem from "../todo-list-item/todo_list_item";
import './todo_list.css';

const TodoList = ({todos}) => {

    const elements = todos.map(
        (item) => {
            const {id, ...itemProps} = item;
          return(
              <li key={id}>
                <TodoListItem {...itemProps}/>
            </li>
          );
        }
    );
    return(
        <ul className="list-style">
            {elements}
        </ul>
    );}
    export default TodoList;