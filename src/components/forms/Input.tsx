import styled, { css } from 'styled-components';

const rangeCss = css`
  -webkit-appearance: none;

  height: 1rem;
  padding: 0.5rem 0;

  border-color: transparent;
  background-color: transparent;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    cursor: pointer;

    height: 1rem;
    width: 1rem;
    margin-top: -0.5rem;

    background-color: var(--colors-gray-2);

    border-radius: 100%;
  }

  &::-webkit-slider-runnable-track {
    cursor: pointer;

    width: 100%;
    height: var(--border-width-default);

    background-color: var(--colors-gray-2);
  }

  &:focus,
  &:active {
    border-color: transparent;
    &::-webkit-slider-thumb {
      background-color: var(--colors-primary);
      border-color: var(--colors-primary);
    }
  }
`;

const Input = styled.input`
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

  &[type='range'] {
    ${rangeCss}
  }
`;

export default Input;
