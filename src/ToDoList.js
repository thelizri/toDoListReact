import React from 'react';
import Todo from "./Todo";

function ToDoList({todos, toggleTodo}) {
    return (
        <div>
            {todos.map(todo => {return <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo}/>})}
        </div>
    );
}

export default ToDoList;