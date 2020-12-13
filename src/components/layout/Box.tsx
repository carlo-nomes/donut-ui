import styled from 'styled-components';
import flexBox, { FlexBoxProps } from './css/flexBox';
import margin, { MarginProps } from './css/margin';
import padding, { PaddingProps } from './css/padding';
import size, { SizeProps } from './css/size';

export type BoxProps = SizeProps & MarginProps & PaddingProps & FlexBoxProps;

const Box = styled.div<BoxProps>`
  ${flexBox}

  ${size}

  ${margin}

  ${padding}
`;

export default Box;
