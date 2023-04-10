import styled from 'styled-components';

import { rowSpacing, columnSpacing, flexBox, size, margin, padding } from './css';
import { FlexBoxProps } from './css/flexBox';
import { MarginProps } from './css/margin';
import { PaddingProps } from './css/padding';
import { SizeProps } from './css/size';

export type BoxProps = SizeProps & MarginProps & PaddingProps & FlexBoxProps & { space?: boolean | number };

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
