import React, { useState, useCallback } from 'react';
import { ShowIncrement } from './ShowIncrement';

const CallBackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
    setCounter((incre) => value + incre);
  }, []);

  // const incrementFather = () => {
  //   setCounter(counter + 1);
  // }

  return (
    <>
      <h1>UseCallbackHook: {counter}</h1>
      <hr />

      <ShowIncrement increment1={incrementFather} />
    </>
  );
};

export { CallBackHook };
