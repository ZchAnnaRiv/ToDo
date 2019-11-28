import React from 'react';
import './app_header.css';

const AppHeader = ({toDo, done}) =>
{
    return(
        <div className='app-head'>
            <h1>My <i>ToDo</i> list</h1>
            <h3>{toDo} more to do, {done} done</h3>
        </div>
    );
}
export default AppHeader;