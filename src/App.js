import React, {useState, useRef} from 'react';
import ToDoList from "./ToDoList";

function App() {
  const [todos, setTodos] = useState([{id: 1, name: "Todo 1", complete: false}]);
  const textInput = useRef();

  function addToDo(e){
    const text = textInput.current.value;
    if(text === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: 1, name: text, complete: false }]
    })
    textInput.current.value = null;
  }

  return (<>
    <ToDoList todos={todos}/>
    <input ref={textInput} type={"text"}/>
    <button onClick={addToDo}>Add Todo</button>
    <button>Clear</button>
    <div>{todos.length} left to do</div>
  </>);
}

export default App;
