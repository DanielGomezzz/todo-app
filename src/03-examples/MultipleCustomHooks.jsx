import React from 'react';
import { useCounter, useFetch } from '../hooks/index';
import {LoadingQuote, Quote }from './';

const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  // !data => significa (true) tomar la data solo cuando tenga valor
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />}


      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={() => increment(1)}>
        next quote
      </button>
    </>
  );
};

export { MultipleCustomHooks };
