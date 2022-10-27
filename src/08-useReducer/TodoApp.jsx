import React, { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoItem } from './TodoItem.';
import { TodoList } from './TodoList';
import { todoReducer } from './TodoReducer';

const initialState = [
  {
    id: new Date().getTime(),
    description: 'Recolectar la piedra del alma',
    done: false,
  },
  {
    id: new Date().getTime() * 3,
    description: 'Recolectar la piedra del poder',
    done: false,
  },
];

const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: '[TODO] Add Todo',
      payLoad: todo
    }

    dispatch(action);
  }

  return (
    <>
      <h1>TodoApp: 10 <small>Pendientes: 2</small> </h1>
      <hr />

      <div className="row">
        <div className="col-7">
        <TodoList todos={todos}/>

        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewTodo}/>
        </div>
      </div>
    </>
  );
};

export { TodoApp };
