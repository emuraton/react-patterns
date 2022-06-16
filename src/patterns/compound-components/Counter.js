import * as React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import { Container } from './Counter.styles';

const MIN_VALUE = 0;
const MAX_VALUE = 20;

const Counter = ({ children }) => {
  const [quantity, setQuantity] = React.useState(0);
  const onIncrement = () => {
    if (quantity === MAX_VALUE) return;
    setQuantity(quantity + 1);
  };
  const onDecrement = () => {
    if (quantity === MIN_VALUE) return;
    setQuantity(quantity - 1);
  };

  // You can replace React.cloneElement by React Context if you fancy
  return (
    <Container>
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { onIncrement, onDecrement, quantity })
      )}
    </Container>
  );
};

const Decrement = ({ onDecrement, quantity }) => {
  const isDisabled = quantity === MIN_VALUE;
  return (
    <Button onClick={onDecrement} isDisabled={isDisabled}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
        <path d="M2 8h14v2H2z" />
      </svg>
    </Button>
  );
};

const Increment = ({ onIncrement, quantity }) => {
  const isDisabled = quantity === MAX_VALUE;
  return (
    <Button onClick={onIncrement} isDisabled={isDisabled}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
        <path d="M16 8h-6V2H8v6H2v2h6v6h2v-6h6z" />
      </svg>
    </Button>
  );
};

const Quantity = ({ quantity }) => <StyledQuantity>{quantity}</StyledQuantity>;

const StyledQuantity = styled.div`
  padding: 0px 10px;
  font-size: 18px;
  font-weight: 700;
`;

Counter.Decrement = Decrement;
Counter.Increment = Increment;
Counter.Quantity = Quantity;

export default Counter;
