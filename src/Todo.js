import React from 'react';

function Todo({todo, toggleTodo}) {

    function handleOnChange(){
        toggleTodo(todo.id);
    }

    return (
        <div>
            <input type={"checkbox"} checked={todo.complete} onChange={handleOnChange}/>
            <label>{todo.name}</label>
        </div>
    );
}

export default Todo;