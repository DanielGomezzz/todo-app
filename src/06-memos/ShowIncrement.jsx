import React,{memo} from 'react'

const ShowIncrement =React.memo(({increment1}) => {

  console.log('me volvi a generar :D');
  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          increment1(5);
        }}>
        Incrementar
      </button>
    </>
  );
})

export { ShowIncrement}
