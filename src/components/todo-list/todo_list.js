import React from 'react';
import TodoListItem from "../todo-list-item/todo_list_item";
import './todo_list.css';

const TodoList = ({todos, onDelete,
                      onToggleImportant,
                      onToggleDone}) => {

    const elements = todos.map(
        (item) => {
            const {id, ...itemProps} = item;
          return(
              <li key={id}>
                <TodoListItem
                    {...itemProps}
                    onDelete={()=>onDelete(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                    onToggleDone={()=>onToggleDone(id)}
                />
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