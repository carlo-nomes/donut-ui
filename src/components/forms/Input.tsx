import styled from 'styled-components';

const Input = styled.input`
  font-family: var(--font-family-sans);
  color: var(--colors-text);

  padding: 0.5rem 1rem;

  border-style: solid;
  border-width: var(--border-width-default);
  border-radius: var(--border-radius-default);
  border-color: transparent;

  background-color: var(--colors-darken-1);

  &:active,
  &:focus {
    outline: none;
    border-color: var(--colors-primary);
  }
`;

export default Input;
