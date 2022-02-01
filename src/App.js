import react, {useState, useEffect} from 'react';

import './App.css';
import reactDom from 'react-dom';

//importing components

import Form from "./components/Form";
import ToDolist from './components/ToDolist';


//importing video

import v1 from "./components/video/v1.mp4";
import v2 from "./components/video/v2.mp4";



function App() {

  //state
  const [inputText, setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState ("all");
  const [filtertodos, setFilterTodos] = useState ([]);
//function



//useEffect



  const filterHandler = () => {
      switch(status){
        case 'completed':
          setFilterTodos(todos.filter(todo => todo.completed === true ));
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false ));
          break;
        default:
          setFilterTodos(todos);
          break;
      }

  };


  const saveLocalTodos = () => {
    
      localStorage.setItem('todos',JSON.stringify(todos))
  };


  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem("todos"))
      setTodos(todoLocal);
    }
  };


  //useeffects 

  useEffect( () => {
    getLocalTodos();
  }, []);
    

  useEffect ( () => {
    filterHandler();
    saveLocalTodos ();
    //getLocalTodos();
  }, [todos, status]) ;

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
          List out your daily activities!!!
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
        filtertodos={filtertodos}
        setFilterTodos = {setFilterTodos}
      />


    </div>
    
  );
}

export default App;
