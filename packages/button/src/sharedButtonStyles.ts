import { css } from 'styled-components';

import size from '@donut-ui/layout';
import { SizeProps } from '@donut-ui/layout/src/css/size';

export const DEFAULT_BUTTON_COLOR = 'var(--colors-gray, #4d6f80)';

const sharedButtonStyles = css<SizeProps>`
  ${size}

  cursor: pointer;

  padding: 0.5rem 1rem;

  font-family: var(--font-family-sans);
  text-transform: uppercase;

  border-style: solid;
  border-width: var(--border-width-default);
  border-radius: var(--border-radius-default);

  position: relative;
  overflow: hidden;

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transition: background-color var(--transition-duration-default);
  }

  &:hover,
  &:focus,
  &:active {
    outline: none;
    &::before {
      background-color: var(--colors-button-hover-overlay);
    }
  }

  &:disabled:hover {
    cursor: not-allowed;
  }
`;

export default sharedButtonStyles;
