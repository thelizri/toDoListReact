import React from 'react';

function Todo({todo, toggleToDoListCheckbox}) {

    function handleOnChange(){
        toggleToDoListCheckbox(todo.id);
    }

    return (
        <div>
            <input type={"checkbox"} checked={todo.complete} onChange={handleOnChange}/>
            <label>{todo.name}</label>
        </div>
    );
}

export default Todo;