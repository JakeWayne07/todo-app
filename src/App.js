import { useEffect, useState } from 'react';
import './App.css';
import MyForm from './components/MyForm';
import Todolist from './components/TodoList';

function App() {

  const [inputText,setInputText] = useState("")
  const [todo, setTodo] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredStatus, setFilteredStatus] = useState([])

  const filterHandler = () =>{
    switch (status){
      case "completed":
        console.log('showing completed')
        setFilteredStatus(todo.filter(item => item.complete == true))
        break;
      
      case "uncomplete":
        console.log('showing uncompleted')
        setFilteredStatus(todo.filter(item => item.complete == false))
        break;

      default:
        setFilteredStatus(todo)
    }
  }

  useEffect(() => {
    filterHandler()
  },[status,todo])

  return (
    <div className="App">
      <header>
        <h1>Todo App</h1>
      </header>
      <MyForm 
        todo={todo} 
        setTodo={setTodo} 
        setInputText={setInputText} 
        inputText={inputText}
        setStatus={setStatus}
      />
      <Todolist
        setTodos={setTodo}
        todos={todo}
        filteredStatus={filteredStatus}
      />
    </div>
  );
}

export default App;
