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
    --colors-darken-2: rgba(0, 0, 0, 0.1);
    --colors-darken-3: rgba(0, 0, 0, 0.2);
    --colors-darken-4: rgba(0, 0, 0, 0.4);
    --colors-darken-5: rgba(0, 0, 0, 0.8);

    --colors-lighten-1: rgba(255, 255, 255, 0.05);
    --colors-lighten-2: rgba(255, 255, 255, 0.1);
    --colors-lighten-3: rgba(255, 255, 255, 0.2);
    --colors-lighten-4: rgba(255, 255, 255, 0.4);
    --colors-lighten-5: rgba(255, 255, 255, 0.8);

    --border-width-default: 0.05rem;
    --border-width-large: 0.15rem;
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
