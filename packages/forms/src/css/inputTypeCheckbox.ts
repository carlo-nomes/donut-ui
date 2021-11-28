import { css } from 'styled-components';

const inputTypeCheckbox = css`
  &[type='checkbox'] {
    // Hide input
    position: absolute;
    opacity: 0;

    & + label {
      position: relative;
      cursor: pointer;
      padding: 0;
    }

    // Box.
    & + label:before {
      margin-right: 0.5rem;

      display: inline-block;
      content: '';

      box-sizing: border-box;
      width: 1.5rem;
      height: 1.5rem;

      background: var(--colors-gray-100);
      vertical-align: text-top;

      outline: none;

      border-style: solid;
      border-width: var(--border-width-default);
      border-radius: var(--border-radius-default);
      border-color: var(--colors-gray);

      background-color: var(--colors-gray-100);
    }

    &:active,
    &:focus {
      + label:before {
        border-color: var(--colors-primary);
      }
    }

    // Checkmark. Could be replaced with an image
    &:checked + label:after {
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'/></svg>");
      position: absolute;

      left: 0.25rem;
      top: 0.25rem;

      width: 1rem;
      height: 1rem;
    }
  }
`;

export default inputTypeCheckbox;
