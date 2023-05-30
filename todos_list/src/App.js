import React, {useState, useEffect } from 'react';
import './App.css';
import { AddTodo } from './Component/AddTodo';
import { Footer } from './Component/Footer';
import Header from './Component/Header';
import { Todos } from './Component/Todos';



function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) 
  {
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

const onDelete = (todo)=>{
  setTodos(todos.filter((e)=>{
    return e!==todo;
  }));
  localStorage.setItem('todos', JSON.stringify(todos));
}

const addTodo = (title, desc)=>{
  console.log("i am adding todo", title, desc)
  let sno;
  if (todos.length ===0) {
    sno = 0;
  }else{
    sno = todos[todos.length-1].sno+1;
  }

const myTodo = {
  sno: sno,
  title: title,
  desc: desc,
}
setTodos([...todos, myTodo]);
console.log(myTodo);


}
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    
  }, [todos])
  
  return (
    <>
    <Header/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete} />
    <Footer/>
    </>
  );
}
export default App;
