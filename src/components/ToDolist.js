import React from "react";

//import component

import ToDo from "./ToDo";


function ToDolist({todos, setTodos, filtertodos}){

    
    //console.log(filtertodos);
    //console.log(todos);

    return (
        <div className="todo-container">
            <ul className="todo-list">
                 {filtertodos.map((todo) => (
                     <ToDo 
                     setTodos = {setTodos}
                     todos= {todos}
                     todo = {todo}
                     keys= {todo.id}
                     text={todo.text}/>
                 ))}
            </ul>
        </div>



    );

};


export default ToDolist;