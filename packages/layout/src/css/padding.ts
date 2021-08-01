import { css } from 'styled-components';

export type PaddingProps = {
  p?: number;
  px?: number;
  py?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  pl?: number;
};

const padding = css<PaddingProps>`
  padding-top: ${({ pt, py, p }) => pt || py || p || 0}rem;
  padding-right: ${({ pr, px, p }) => pr || px || p || 0}rem;
  padding-bottom: ${({ pb, py, p }) => pb || py || p || 0}rem;
  padding-left: ${({ pl, px, p }) => pl || px || p || 0}rem;
`;

export default padding;
