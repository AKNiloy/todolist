import react, {useState} from 'react';

import './App.css';
import reactDom from 'react-dom';

//importing components

import Form from "./components/Form";
import ToDolist from './components/ToDolist';


//importing video

import v2 from "./components/video/v2.mp4";



function App() {

  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState ("all");
  const [filtertodos, setFilterTodos] = useState ([]);
  return (
    <div className="App">

<video autoPlay loop 
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
          Just do these damn things!! 
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
