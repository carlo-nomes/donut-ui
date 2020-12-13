import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const variables = css`
  :root {
    --font-family-sans: 'Open Sans', sans-serif;
    --font-family-serif: 'Roboto Slab', serif;
    --font-family-mono: 'Source Code Pro', monospace;

    --background-color: #f8f8f8;
    --foreground-color: #262626;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${variables}

  body {
    background: var(--background-color);
    color: var(--foreground-color);

    font-family: var(--font-family-serif);
    font-size: 1rem;
  }
`;

export default GlobalStyle;
