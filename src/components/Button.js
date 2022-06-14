import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ isDisabled }) =>
    isDisabled ? 'rgb(242, 243, 245)' : 'rgb(0, 112, 246)'};
  border-radius: 5px;
  border: 0;
  color: white;
  width: 40px;
  height: 40px;
  &:hover {
    cursor: pointer;
  }
  &:active,
  &:focus {
    outline: none;
  }

  ${({ isDisabled }) =>
    isDisabled &&
    `
    cursor: not-allowed;
  `}
`;

export default Button;
