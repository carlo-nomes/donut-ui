import styled, { css } from 'styled-components';
import inputTypeRange from './css/inputTypeRange';

const Input = styled.input`
  ${inputTypeRange}

  font-family: var(--font-family-sans);
  color: var(--colors-text);

  padding: 0.5rem;

  outline: none;

  border-style: solid;
  border-width: var(--border-width-default);
  border-radius: var(--border-radius-default);
  border-color: var(--colors-grey-2);

  background-color: var(--colors-grey-1);

  &:active,
  &:focus {
    border-color: var(--colors-primary);
  }
`;

export default Input;
