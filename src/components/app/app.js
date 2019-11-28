import React from 'react';
import AppHeader from "../app-header/app_header";
import SearchPanel from "../search-panel/search_panel";
import TodoList from "../todo-list/todo_list";
import AddNewItem from "../add-new-item/add_new_item";
import './app.css';

 class App extends React.Component {
     state={
          toDoData: [
             {label: 'Drink Coffee', important: false, id: 1},
             {label: 'Learn English', important: true, id: 2},
             {label: 'Go to shop', important: false, id: 3},
             {label: 'Call David', important: true, id: 4},
             {label: 'Buy umbrella', important: true, id: 5},
             {label: 'Listen book', important: false, id: 6}
         ]
     };
     deleteItem = (id) => {
         this.setState(({toDoData})=>{
             const index = toDoData.findIndex((el) => el.id == id);
             const before = toDoData.slice(0, index);
             const after = toDoData.slice(index+1);
             const newData = [...before, ...after];
             return{
                 toDoData: newData,
             }
         })
     }
     render() {

    return (
        <div className="todo-main">
            <AppHeader toDo={1} done={2}/>
            <SearchPanel/>
            <TodoList todos={this.state.toDoData} onDelete={this.deleteItem}/>
            <AddNewItem/>
        </div>
    );
     }

 }
export default App;