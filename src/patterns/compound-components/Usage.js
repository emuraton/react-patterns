import * as React from 'react';

import Counter from './Counter';

const Usage = () => {
  return (
    <>
      <Counter>
        <Counter.Decrement />
        <Counter.Quantity />
        <Counter.Increment />
      </Counter>

      <Counter>
        <Counter.Decrement />
        <Counter.Increment />
        <Counter.Quantity />
      </Counter>
    </>
  );
};

export default Usage;
