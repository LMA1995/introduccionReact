import logo from './platzi.webp';
import './App.css';
import { Titulo } from './components/Titulo';
import { TodoItem } from './components/TodoItem';
import { AgregarTodo } from './components/AgregarTodo';
import {ContadorTodos } from './components/ContadorTodos';
import { BuscarTodo } from './components/BuscarTodo';
import { Fragment } from 'react';
import ListaTodos from './components/ListaTodos';

const defaultTodos= /*esto es un array de prueba*/
[
  {text:'Estudiar 2 horas por dias', completed:false},
  {text:'Ver los partidos de san martin' ,completed:true},
  {text:'Amar a mi hija', completed:true},
  {text:'Amar a mi hija', completed:true},
  {text:'Amar a mi hija', completed:true},
];
function App() {
  return (
    
      <Fragment> {/* este fragment nos sirve para poder renderizar el conenido de nuestro archivo app sin depender de la clase en html*/}
      <Titulo />
  <ContadorTodos total={20} completado={15}/>
  <BuscarTodo/>
  <ListaTodos>

  </ListaTodos>
 {defaultTodos.map(todo =>
  <TodoItem  key={todo.text} text={todo.text} completed={todo.completed}/>)}
  <AgregarTodo/>
      </Fragment>
  
    

  );
}

export default App;
