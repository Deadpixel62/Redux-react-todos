import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import {RemoveTodo, ToggleTodo, DeleteCompleted, SetTodo, ToggleAll} from "../actions";
import { useState } from 'react';
import axios from "axios";
import { useEffect } from "react";


function TodoList() {
     const todos = useSelector(state => state.todos);
     const counter = useSelector((state) =>
      state.todos.reduce(
        (counter, obj) => (obj.completed  ? (counter += 1) : counter),
        0
      )
    );
     const dispatch = useDispatch();
     const [count, setCount] = useState(0);


      useEffect(() => {
        let mounted = true; 
        if (mounted) {
          axios
            .get("https://jsonplaceholder.typicode.com/users/1/todos")
            .then((res) => {
         dispatch(SetTodo(res.data.slice(0, 10)));
            });
        }

        return () => {
          mounted = false;
        };
      }, []);

    

  return (
      <ul style={{listStyle:"none"}}>
       {todos.map((todo) => {
           return (
             <li className={todo.completed ? "completed" : ""} key={todo.id} style={{display:"flex", justifyContent:"space-between"}}>
               <span>{todo.title}</span>
               <button onClick={() =>  {todo.completed? setCount(count - 1) : setCount(count + 1);dispatch(ToggleTodo(todo))}}>Toggle</button>
               <button onClick={() =>{todo.completed? setCount(count - 1): ""; dispatch(RemoveTodo(todo.id))}}>Remove</button>
             </li>
           );
       })}

       <li><button onClick={()=>dispatch(ToggleAll())}>Toggle All</button> Completed : {counter} <button onClick={() =>{setCount(0); dispatch(DeleteCompleted())}}>Delete Completed</button></li>
       
      </ul>
      );
}

export default TodoList;
