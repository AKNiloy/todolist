import react, {useState} from 'react';

import './App.css';
import reactDom from 'react-dom';

//importing components

import Form from "./components/Form";
import ToDolist from './components/ToDolist';




function App() {

  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState ("all");
  const [filtertodos, setFilterTodos] = useState ([]);
  return (
    <div className="App">
      
      <header>
        <h1>
          Things to Do next Week
        </h1>
      </header>

      <Form 
        status={status} 
        setStatus = {setStatus} 
        todos = {todos} 
        setTodos = {setTodos} 
        inputText= {inputText} 
        setInputText= {setInputText}
      />
      
      <ToDolist 
        setTodos={setTodos}  
        todos={todos} 
      />
    </div>
  );
}

export default App;
