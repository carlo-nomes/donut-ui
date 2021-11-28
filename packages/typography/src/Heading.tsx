import styled, { css } from 'styled-components';

type AlignOptions = 'left' | 'right' | 'center' | 'justify' | 'justify-all' | 'start' | 'end' | 'match-parent';

type HeadingProps = {
  align?: AlignOptions;
};

const headingCss = css<HeadingProps>`
  font-family: var(--font-family-sans);
  margin: 0 0 1rem 0;
  text-align: ${({ align }) => align || 'start'};
`;

export const H1 = styled.h1`
  ${headingCss}
  font-size: 6rem;
`;

export const H2 = styled.h2`
  ${headingCss}
  font-size: 3rem;
`;

export const H3 = styled.h3`
  ${headingCss}
  font-size: 1.75rem;
`;

export const H4 = styled.h4`
  ${headingCss}
  font-size: 1.25rem;
`;

export const H5 = styled.h5`
  ${headingCss}
  font-size: .75rem;
`;
