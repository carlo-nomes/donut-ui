import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const variables = css`
  :root {
    --font-family-sans: 'Open Sans', sans-serif;
    --font-family-serif: 'Roboto Slab', serif;
    --font-family-mono: 'Source Code Pro', monospace;

    --transition-duration-default: 500ms;

    --colors-background: #f8f8f8;
    --colors-text: #262626;
    --colors-text-light: #f8f8f8;

    --colors-primary: #3cb7ae;
    --colors-secondary: #3c4fb7;
    --colors-warning: #b7af3c;
    --colors-danger: #b7403c;

    --colors-gray: #5e5e5e;
    --colors-gray-1: #f8f8f8;
    --colors-gray-2: #999999;
    --colors-gray-3: #5e5e5e;
    --colors-gray-4: #333333;
    --colors-gray-5: #262626;

    --border-width-default: 0.0625rem; // 1 px
    --border-width-large: 0.15rem;
    --border-radius-default: 0.25rem;
    --colors-button-hover-overlay: rgba(0, 0, 0, 0.1);

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
