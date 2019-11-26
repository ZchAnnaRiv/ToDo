import React from 'react';
import ReactDOM from 'react-dom';
import AppHeader from "./components/app-header/app_header";
import SearchPanel from "./components/search-panel/search_panel";
import TodoList from "./components/todo-list/todo_list";
import style from './main.css';



const App = () => {

    const toDoData = [
        {label: 'Drink Coffee', important: false, id: 1},
        {label: 'Learn English', important: true, id: 2},
        {label: 'Go to shop', important: false, id: 3},
        {label: 'Call David', important: true, id: 4},
        {label: 'Buy umbrella', important: true, id: 5},
        {label: 'Listen book', important: false, id: 6}
    ]

    return (
        <div className="todo-main">
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos={toDoData}/>
    </div>
    );
}

ReactDOM.render(<App  />, document.getElementById('root'));