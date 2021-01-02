import styled from 'styled-components';
import flexBox, { FlexBoxProps } from './css/flexBox';
import margin, { MarginProps } from './css/margin';
import padding, { PaddingProps } from './css/padding';
import size, { SizeProps } from './css/size';
import spacing, { SpacingProps } from './css/spacing';

export type BoxProps = SizeProps &
  MarginProps &
  PaddingProps &
  FlexBoxProps &
  SpacingProps;

const Box = styled.div<BoxProps>`
  box-sizing: border-box;

  ${flexBox}

  ${size}

  ${margin}

  ${padding}

  ${spacing}
`;

export default Box;
