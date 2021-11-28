import { css } from 'styled-components';

export const rowSpacing = css<{ space?: number | boolean }>`
  > * {
    margin-right: ${({ space }) => (typeof space === 'number' ? `${space}rem` : 'var(--spacing-default)')};
    &:last-child {
      margin-right: 0;
    }
  }
`;

export const columnSpacing = css<{ space?: number | boolean }>`
  > * {
    margin-bottom: ${({ space }) => (typeof space === 'number' ? `${space}rem` : 'var(--spacing-default)')};
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
