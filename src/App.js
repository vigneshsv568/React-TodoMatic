import './App.css';
import React,{useState} from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
     <h1>Vignesh Todo Application</h1>
     </header>
     <Form
      todos={todos}
      inputText={inputText}
       setTodos={setTodos} setInputText={setInputText}/>
     <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
