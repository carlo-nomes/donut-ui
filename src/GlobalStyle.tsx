import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const variables = css`
  :root {
    --font-family-sans: 'Open Sans', sans-serif;
    --font-family-serif: 'Roboto Slab', serif;
    --font-family-mono: 'Source Code Pro', monospace;

    --colors-background: #f8f8f8;
    --colors-text: #262626;
    --colors-text-light: #f8f8f8;

    --colors-primary: #3cb7ae;
    --colors-secondary: #3c4fb7;
    --colors-warning: #b7af3c;
    --colors-danger: #b7403c;

    --colors-darken-1: rgba(0, 0, 0, 0.05);

    --colors-lighten-1: rgba(255, 255, 255, 0.05);

    --border-width-default: 0.05rem;
    --border-radius-default: 0.25rem;

    --spacing-default: 1rem;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${variables}

  body {
    background: var(--colors-background);
    color: var(--colors-text);

    font-family: var(--font-family-sans);
    font-size: 1rem;
  }
`;

export default GlobalStyle;
