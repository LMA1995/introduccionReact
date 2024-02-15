import React from 'react'

function ContadorTodos({total, completado}) {
  return (
    <h2>Completaste {completado} de {total} ToDos</h2>
  );
}
export  {ContadorTodos}