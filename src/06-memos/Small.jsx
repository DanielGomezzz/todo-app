import React from 'react';
import { memo } from 'react';

const Small = memo(({ value }) => {
  // console.log('Me volvi a dibujar :D');

  return (<small>{value}</small>);
});

export { Small };
