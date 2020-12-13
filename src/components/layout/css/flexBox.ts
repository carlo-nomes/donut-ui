import { css } from 'styled-components';

export type FlexBoxProps = {
  align?: 'center' | 'start' | 'end';
  justify?: 'center' | 'start' | 'end';
};

const flexBox = css<FlexBoxProps>`
  display: flex;
  flex-direction: column;

  align-items: ${({ align }) => align || 'start'};
  justify-content: ${({ justify }) => justify || 'start'};
`;

export default flexBox;
