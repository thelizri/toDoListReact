import React from 'react';
import Todo from "./Todo";

function ToDoList(props) {
    return (
        <div>
            {props.todos.map(todo => {return <Todo key={todo.id} todo={todo}/>})}
        </div>
    );
}

export default ToDoList;