import styled from 'styled-components';
import flexBox, { FlexBoxProps } from './css/flexBox';
import margin, { MarginProps } from './css/margin';
import padding, { PaddingProps } from './css/padding';
import size, { SizeProps } from './css/size';
import { columnSpacing, rowSpacing } from './css/spacing';

export type BoxProps = SizeProps &
  MarginProps &
  PaddingProps &
  FlexBoxProps & { space?: boolean | number };

const determineSpacing = ({ space, direction }: BoxProps) => {
  if (typeof space !== 'number' && space !== true) return;
  if (direction === 'row') return rowSpacing;
  return columnSpacing;
};

const Box = styled.div<BoxProps>`
  box-sizing: border-box;

  ${flexBox}

  ${determineSpacing}

  ${size}

  ${margin}

  ${padding}
`;

export default Box;
