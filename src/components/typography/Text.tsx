import React, { FC } from 'react';
import styled from 'styled-components';
import margin, { MarginProps } from '../layout/css/margin';

const StyledParagraph = styled.p<MarginProps>`
  ${margin}
  font-family: var(--font-family-serif);
`;

export type TextProps = MarginProps;
const Text: FC<TextProps> = ({ m, my, mb, ...other }) => {
  if ([m, my, mb].every((v) => v === undefined)) mb = 1;

  return <StyledParagraph m={m} my={my} mb={mb} {...other} />;
};

export default Text;
