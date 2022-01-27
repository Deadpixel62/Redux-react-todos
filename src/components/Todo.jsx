import React from 'react';
import {useState} from 'react'

import {useDispatch } from "react-redux";
import {AddTodo} from '../actions';


function Todo() {
const [userInput, setUserInput] = useState({title:""});

const dispatch = useDispatch();

const handleChange = (e) => {
    setUserInput({title : e.target.value, id : Date.now(), completed: false}) 
    
}

  return (
  <div>
  <form onSubmit={(e)=>{e.preventDefault();userInput.title.trim().length!=0 ? dispatch(AddTodo(userInput)) : alert("please enter toDo"); setUserInput({title:""})}}>
  <input type="text" value={userInput.title} placeholder='Enter a Todo' onChange={handleChange}/>
  <input type="submit"/>
  </form>

  </div>
  ); 
}

export default Todo;

// (e)=>{e.preventDefault(); userInput.title.trim().length!=0 ? handleSubmit() : alert("Please enter Todo")}