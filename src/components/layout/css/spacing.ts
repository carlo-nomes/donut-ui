import { css } from 'styled-components';

export type SpacingProps = {
  spacing?: boolean;
};

const spacing = css<SpacingProps>`
  ${({ spacing }) =>
    spacing &&
    `
 >*{
     margin-right: var(--spacing-default);
     &:last-child{
         margin-right: 0;
     }
 }
 `}
`;

export default spacing;
