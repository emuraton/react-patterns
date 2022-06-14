import * as React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { Container } from './Counter.styles';

const Counter = ({ children }) => {
  return <Container>{children}</Container>;
};

const Decrement = ({ onDecrement, ...props }) => (
  <Button onClick={onDecrement} {...props}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
      <path d="M2 8h14v2H2z" />
    </svg>
  </Button>
);

const Increment = ({ onIncrement, ...props }) => (
  <Button onClick={onIncrement} {...props}>
    <svg width="18" height="18" viewBox="0 0 18 18" fill="white">
      <path d="M16 8h-6V2H8v6H2v2h6v6h2v-6h6z" />
    </svg>
  </Button>
);

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
