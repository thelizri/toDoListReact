import React, {useState, useRef, useEffect} from 'react';
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoskey';

function App() {
  const [todos, setTodos] = useState([{id: 1, name: "Todo 1", complete: false}]);
  const textInput = useRef();

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  }, []);

  function toggleTodos(theid){
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === theid);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function addToDo(e){
    const text = textInput.current.value;
    if(text === "") return;
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuidv4(), name: text, complete: false }]
    })
    textInput.current.value = null;
  }

  function clearCompletedTodos(){
    const newTodos = [...todos];
    setTodos(newTodos.filter(todo => !todo.complete));
  }

  return (<>
    <ToDoList todos={todos} toggleTodo={toggleTodos}/>
    <div><input ref={textInput} type={"text"}/>
      <button onClick={addToDo}>Add Todo</button></div>
    <div><button onClick={clearCompletedTodos}>Clear Complete</button></div>
    <div>{todos.filter(todo => !todo.complete).length} left to do</div>
  </>);
}

export default App;
