import React, {useState, useRef, useEffect} from "react";
import Todolist from './TodoList'
import uuid from 'uuid'


//so the objective is to build a state where vales would be stored inside, and the state can render those values and rerender them with a function
//so usestate() is a function that returns all our todos(values). the function is an empty array at the beginnig of the app
// usestate() which an array is passed in, undergoes deconstruction by setting a variable to it,where the first element would be all the todos(values), and the second element would be a function that allow us to update our todos(values)
// objext destructing
// useeffect function is used perform an action on a dependency in this case the arry 'todos' by saving the values even after refreshing

const LOCAL= 'app.todos'

function App() {
 const [todos, setTodos] =useState([])
const namref = useRef()
//i  am trying to make use of the useEffect function to stored the todo list to the local storage and make it to remain even after reloading the page
// why is ttodo.complete as boolean trying to fustrate me whyyyyyy!!!
//come back to it
useEffect(() =>{
  const storedTodos =JSON.parse(localStorage.getItem(LOCAL));
  if(storedTodos) setTodos(storedTodos)
}, [])

useEffect(()=>{
  localStorage.setItem(LOCAL,JSON.stringify(todos))
},[todos])

function togtodo (name){
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.name === name);
    todo.complete = !todo.complete
    setTodos(newTodos)
}

 function handleAdding(e){
    const name= namref.current.value;
    if(name == '') return;
    // console.log(goodnews)
    setTodos(prevTodos =>{
      return[...prevTodos, { name:name, complete:false}]
    })
    namref.current.value = null;
 }

 function handleclearing () {
  const newTodos = todos.filter(todo => !todo.complete)
  setTodos(newTodos)
 }

  return(
    <>
   
     <input ref={namref} type="text" />
     <button onClick={handleAdding}> Add Todo </button>
     <button onClick={handleclearing}> Clear Todo</button>
     <Todolist todos={todos} togtodo ={togtodo}/>
     <div>
      <p>
         I am so happy to be learning react. react makes me smile
      </p>
     </div>
    </>
   
    
  )
}

export default App;
