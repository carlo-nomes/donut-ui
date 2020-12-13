import styled, { css } from 'styled-components';

const headingCss = css`
  font-family: var(--font-family-sans);
  margin: 0 0 1rem 0;
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
