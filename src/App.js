import logo from './platzi.webp';
import './App.css';
import { Titulo } from './components/Titulo';
import { TodoItem } from './components/TodoItem';
import { AgregarTodo } from './components/AgregarTodo';
import {ContadorTodos }from './components/ContadorTodos';

function App() {
  return (
    <div className='App'>
  <Titulo/>
  <ContadorTodos/>
  <TodoItem/>
  <TodoItem/>
  <TodoItem/>
  <TodoItem/>
  <AgregarTodo/>
    </div>

  );
}

export default App;
