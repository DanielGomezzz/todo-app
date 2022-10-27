import React,{useState, useEffect} from 'react'
import Message from './Message';

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'canela',
    email: 'dg@google.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      // !traer el valor segun el nombre del input
      [name]: value,
    });
  };

  // !dependencias useEffect
  // ?cuando colocamos[] => significa que se ejecutara una sola vez al principio del dibujado
  // *es mejor tener por separado los useEffect para cada funcionalidad deseada
  // !ejemplos de useEffect

  useEffect(() => {
    // console.log('useEffect called')
  }, []);
  
  useEffect(() => {
    // console.log('formState changed')
  }, [formState]);

  useEffect(() => {
    // console.log('email changed')
  }, [email]);



  return (
    <>
      <h1>Formulario simple</h1>
      <hr />

      <input
        type="text"
        className="form-control my-2"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control my-2"
        placeholder="dg@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />


//! implementacion condicionada del useEffect dentro de message
      {username === 'canela' && <Message />}
    </>
  );
}

export default SimpleForm
