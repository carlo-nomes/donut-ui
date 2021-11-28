import styled from 'styled-components';

import inputTypeRange from './css/inputTypeRange';
import inputTypeCheckbox from './css/inputTypeCheckbox';

const Input = styled.input`
  ${inputTypeRange}
  ${inputTypeCheckbox}

  font-family: var(--font-family-sans);
  color: var(--colors-text);

  padding: 0.5rem;

  outline: none;

  border-style: solid;
  border-width: var(--border-width-default);
  border-radius: var(--border-radius-default);
  border-color: var(--colors-gray);

  background-color: var(--colors-gray-100);

  &:active,
  &:focus {
    border-color: var(--colors-primary);
  }
`;

export default Input;
