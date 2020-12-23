import { css } from 'styled-components';
import size, { SizeProps } from '../layout/css/size';

const sharedButtonStyles = css<SizeProps>`
  ${size}

  cursor: pointer;

  padding: 0.5rem 1rem;

  font-family: var(--font-family-sans);
  text-transform: uppercase;

  border-style: solid;
  border-width: var(--border-width-default);
  border-radius: var(--border-radius-default);
`;

export default sharedButtonStyles;
