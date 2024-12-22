import React,{useEffect, useState} from 'react'
import TodoList from './TodoList'
import Form from './Form'
import { v4 as uuid } from 'uuid';
import './TodoApp.css';
import { FaCheckCircle, FaTasks } from 'react-icons/fa'; // Import React Icons





const TodoApp = () => {
    let arrayDummy= JSON.parse(window.localStorage.getItem('todos')|| "[]" )
       
       
    let [todos,setTodos]=useState(arrayDummy);
    
       
    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }

    console.log("inside this app component sam");
    useEffect(()=>{//jb jb todos m change hoga useEffect rerender krega saare change krega
        //console.log("inside useEffect hook")
        localStorage.setItem('todos',JSON.stringify(todos));
    },[todos])

    //const deleteTodo=(id)=>{
    //    const newTodo=todos.filter((todo)=>todo.id!==id);
    //    setTodos(newTodo);
    //}
    const deleteTodo=(id)=>{
    //    const newTodo=todos.filter((todo)=>todo.id!==id);
        setTodos((prevState)=>{
            return prevState.filter((todo)=>todo.id!==id);

        });
    }


    const checkTodo=(id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=>item.id===id?{...item,checked :!item.checked}:item)
        })
    }

    return (
        <div>
            <h1 className="app-header">
                <FaTasks className="icon" />
                Todo List
                <FaCheckCircle className="icon" />
            </h1>
            <Form addTodo={addTodo} todos={todos} />
            <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo} />
        </div>
    );
};

export default TodoApp;