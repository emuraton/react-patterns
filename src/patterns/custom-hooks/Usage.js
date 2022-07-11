import * as React from 'react';
import styled from 'styled-components';

import Hover from './Hover';
import useHover from './useHover';

//with render props
export const WithRenderProps = () => (
  <Hover
    render={({ hovered }) => <Button hovered={hovered}>Im a button</Button>}
  />
);

//with custom hooks
export const WithHooks = () => {
  const [btnRef, hovered] = useHover();

  return (
    <Button ref={btnRef} hovered={hovered}>
      Im a button
    </Button>
  );
};

const Button = styled.button`
  background: ${({ hovered }) => (hovered ? `lightblue` : `white`)};
  width: 100%;
`;
