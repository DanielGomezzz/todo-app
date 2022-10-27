import React,{useState}from 'react';
import ReactDOM from 'react-dom/client';
// import { CounterApp } from './01-useState/CounterApp';
// import CounterWithCustomHook from './01-useState/CounterWithCustomHook';
// import {FormWithCustomHook} from './02-useffect/FormWithCustomHook';
// import SimpleForm from './02-useffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import {MultipleCustomHooks} from './03-examples/MultipleCustomHooks';
// import {FocusScreen} from './04-useRef/FocusScreen';
// import { Layout } from './05-use.layoutEffect/Layout';
// import { Memorise } from './06-memos/Memorise';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallBackHook } from './06-memos/CallBackHook';
// import { Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
import './index.css';
import { TodoApp } from './08-useReducer/TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <TodoApp/>
  // </React.StrictMode>
);


