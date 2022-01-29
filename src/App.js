import react, {useState} from 'react';

import './App.css';
import reactDom from 'react-dom';

//importing components

import Form from "./components/Form";
import ToDolist from './components/ToDolist';


//importing video

import v1 from "./components/video/v1.mp4";
import v2 from "./components/video/v2.mp4";



function App() {

  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState ("all");
  const [filtertodos, setFilterTodos] = useState ([]);
  return (
    <div className="App">

<video autoPlay loop muted
      style={{
        position:"absolute",
        width: "100%",
        left : "50%",
        top : "50%",
        height: "100%",
        objectFit: "cover",
        transform : "translate(-50%, -50%)",
        zIndex : "-1"
      }}>
        <source src={v2} type="video/mp4" />
      </video>
      
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
