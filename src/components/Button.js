import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ isDisabled }) =>
    isDisabled ? 'rgb(242, 243, 245)' : 'rgb(0, 156, 246)'};
  border-radius: 5px;
  border: 0;
  color: ${({ themeColor }) => (themeColor === `primary` ? `white` : `black`)};
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
