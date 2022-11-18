import React, {useState, useRef, useEffect} from 'react';
import ToDoList from "./ToDoList";
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoskey';

function App() {
  const [todos, setTodos] = useState([{id: 1, name: "Todo 1", complete: false}]);
  const textInput = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storedTodos) setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos]); //Updates our localstorage whenever todos is updated

  function toggleToDoListCheckbox(id){
    const newTodos = [...todos];
    const element = newTodos.find(findCallback);
    element.complete = !element.complete;
    setTodos(newTodos);

    function findCallback(todo){
      return todo.id === id;
    }
  }

  function addToDo(){
    const text = textInput.current.value;
    if(text === "") return;
    setTodos(updateCallback)
    textInput.current.value = null;

    function updateCallback(prevList){
      return [...prevList, {id: uuidv4(), name: text, complete: false }];
    }
  }

  function clearCompletedTodos(){
    const newTodos = [...todos];
    setTodos(newTodos.filter(filterCallback));
  }

  function filterCallback(todo){
    return !todo.complete;
  }

  return (<>
    <ToDoList todos={todos} toggleToDoListCheckbox={toggleToDoListCheckbox}/>
    <div><input ref={textInput} type={"text"}/>
      <button onClick={addToDo}>Add Todo</button></div>
    <div><button onClick={clearCompletedTodos}>Clear Complete</button></div>
    <div>{todos.filter(filterCallback).length} left to do</div>
  </>);
}

export default App;
