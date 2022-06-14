import React from 'react';

import Counter from './compound-components/Counter';
const MIN_VALUE = 0;
const MAX_VALUE = 20;

function App() {
  const [quantity, setQuantity] = React.useState(0);

  const onIncrement = () => {
    if (quantity === MAX_VALUE) return;
    setQuantity(quantity + 1);
  };

  const onDecrement = () => {
    if (quantity === MIN_VALUE) return;
    setQuantity(quantity - 1);
  };

  return (
    <Counter>
      <Counter.Decrement
        onDecrement={onDecrement}
        isDisabled={quantity === MIN_VALUE}
      />
      <Counter.Quantity quantity={quantity} />
      <Counter.Increment
        onIncrement={onIncrement}
        isDisabled={quantity === MAX_VALUE}
      />
    </Counter>
  );
}

export default App;
