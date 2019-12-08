import React from 'react';
import AppHeader from "../app-header/app_header";
import SearchPanel from "../search-panel/search_panel";
import TodoList from "../todo-list/todo_list";
import AddNewItem from "../add-new-item/add_new_item";
import './app.css';

 class App extends React.Component {
     maxId = 100;

     state={
          toDoData: [
              this.createTodoItem('Drink Coffee'),
              this.createTodoItem('Learn English'),
              this.createTodoItem('Go to shop'),
              this.createTodoItem('Call David'),
              this.createTodoItem('Buy umbrella'),
              this.createTodoItem('Listen book'),
         ],
            term:'',
     };

     createTodoItem(label){
         return{
                 label,
                 important: false,
                 done:false,
                 id: this.maxId++
         }
     }
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
     addItem = (text) => {
        const newItem = this.createTodoItem(text);
         this.setState(({toDoData}) =>{
                const newArr1 = [
                    ...toDoData,
                    newItem
                ];
                return{
                    toDoData: newArr1,
                }
             }
         )
     }
     toggleProperty(arr,id,propName){
             const index = arr.findIndex((el) => el.id == id);

             const oldItem = arr[index];
             const newItem1 = {...oldItem, [propName]: !oldItem[propName]};
             const before1 = arr.slice(0, index);
             const after1 = arr.slice(index+1);
             return [
                 ...before1, newItem1, ...after1
             ];
     }
     onToggleImportant = (id) => {
         this.setState(({toDoData})=>{
             return {
                 toDoData: this.toggleProperty(toDoData, id, 'important')
             }
         })
     }
     onToggleDone = (id) => {
        this.setState(({toDoData})=>{
            return {
                toDoData: this.toggleProperty(toDoData, id, 'done')
            }
        })

     }
     search(items, term){
         if (term == 0){
             return items;
         }
        return items.filter((item)=>{
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        })
     }
     onSearchChange = (term) => {
         this.setState({term});
     }
     render() {
    const {toDoData, term} = this.state;
    const visibleItems = this.search(toDoData,term);
    const doneCount = toDoData.filter((el) => el.done).length;
    const toDoCount = toDoData.length - doneCount;
    return (
        <div className="todo-main">
            <AppHeader toDo={toDoCount} done={doneCount}/>
            <SearchPanel onSearchChange={this.onSearchChange}/>
            <TodoList
                todos={visibleItems}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleDone={this.onToggleDone}
            />
            <AddNewItem onItemAdded={this.addItem}/>
        </div>
    );
     }

 }
export default App;