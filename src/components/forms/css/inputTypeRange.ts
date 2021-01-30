import { css } from 'styled-components';

const thumb = css`
  cursor: pointer;

  height: 1rem;
  width: 1rem;

  background-color: var(--colors-gray-2);

  border-radius: 100%;

  &:focus {
  }
`;

const thumbFocus = css`
  background-color: var(--colors-primary);
  border-color: var(--colors-primary);
`;

const trackCss = css`
  cursor: pointer;

  width: 100%;
  height: var(--border-width-default);
  background-color: var(--colors-gray-2);
`;

const inputTypeRange = css`
  &[type='range'] {
    -webkit-appearance: none;

    height: 1rem;
    padding: 0.5rem 0;

    border-color: transparent;
    background-color: transparent;

    &::-webkit-slider-thumb {
      ${thumb}
      -webkit-appearance: none;
      transform: translateY(-50%);
    }

    &::-webkit-slider-runnable-track {
      ${trackCss}
    }

    &::-moz-range-thumb {
      ${thumb}
    }

    &::-moz-range-track {
      ${trackCss}
    }

    &:focus,
    &:active {
      border-color: transparent;

      &::-webkit-slider-thumb {
        ${thumbFocus}
      }

      &::-moz-range-thumb {
        ${thumbFocus}
      }
    }
  }
`;

export default inputTypeRange;
