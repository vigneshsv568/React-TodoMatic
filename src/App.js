import './App.css';
import React,{useState, useEffect} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFiteredTodos] = useState([]);
  
  
  useEffect(()=>{
   
    getLocalTodos();
    

  },[])
  

  const getLocalTodos = () => {
    if(localStorage.getItem("todos")===null){
      setTodos([]);
    } else {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }

  
  

 

  useEffect (()=>{
    localStorage.setItem("todos", JSON.stringify(todos));

    switch(status){
      case 'completed':
        setFiteredTodos(todos.filter(todo => todo.completed === true ))
        break;
      
      case 'uncompleted':
        setFiteredTodos(todos.filter(todo => todo.completed === false ))
        break;

      default:
        setFiteredTodos(todos);
        break;
    }

  },[status, todos]);
 
  return (
    <div className="App">
      <header>
     <h1>Vignesh Todo Application</h1>
     </header>
     <Form
      todos={todos}
      inputText={inputText}
       setTodos={setTodos} 
       setInputText={setInputText}
       setStatus={setStatus}
       />
     <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos}/>
    </div>
  );
}

export default App;
