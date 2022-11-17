import React from 'react';
import Todo from "./Todo";

function ToDoList({todos, toggleToDoListCheckbox}) {
    function callBack(todo){
        return <Todo key={todo.id} todo={todo} toggleToDoListCheckbox={toggleToDoListCheckbox}/>;
    }

    return (
        <div>
            {todos.map(callBack)}
        </div>
    );
}

export default ToDoList;