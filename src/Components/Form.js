
import React,{useState}from 'react'
import { v4 as uuid } from 'uuid';
const Form = (props) => {

    let [input ,setInput ]=useState('');
    let[isValid,setIsValid]=useState(true);//// eslint-disable-next-line no-unused-vars

    function inputChangeHandler(e){
      setInput(e.target.value);
      if(input.trim().length>0){
        setIsValid(true);
      }
    }
    function formSubmitHandler(e){
      e.preventDefault();//preventing from getting submitted by default 
      if(input.trim().length===0){
        setIsValid(false);
        return;
      }
      const newTodo={
        id:uuid(),
        todo:input,
        checked:false
      } 
      props.addTodo(newTodo);
      //console.log(input); 
      setInput('');
    }


  return (
    <form onSubmit={formSubmitHandler}>
        <input onChange={inputChangeHandler} type='text' placeholder='Enter your task' value={input}/>
    </form>
  )
}

export default Form;