import React,{useState,useEffect} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all')
  const [filterTodo, setFilterTodo] = useState([])


    useEffect( () => {
      filterHandler();
    },[todos,status])
 const  filterHandler= () =>{
   switch(status){
     case 'completed':
     setFilterTodo(todos.filter( todo => todo.completed === true))
     break;
     case 'uncompleted':
     setFilterTodo(todos.filter( todo => todo.completed === false))
     break;
     default:
     setFilterTodo(todos)
     break;
   }
 }
  return (
    <div className="App">
      <header>
           <h1>hello Akib </h1>
          
      </header>
      <Form setStatus={setStatus} todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}></Form>
      <TodoList filterTodo={filterTodo} setTodos={setTodos} todos={todos} ></TodoList>
    </div>
  );
}

export default App;
