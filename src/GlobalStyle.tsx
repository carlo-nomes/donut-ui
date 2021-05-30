import { createGlobalStyle, css } from 'styled-components';
import { normalize } from 'styled-normalize';

const variables = css`
  :root {
    // Gray Palette
    --colors-gray-100: hsl(200, 100%, 97%);
    --colors-gray-200: hsl(200, 50%, 85%);
    --colors-gray-300: hsl(200, 28%, 70%);
    --colors-gray-400: hsl(200, 15%, 50%);
    --colors-gray-500: hsl(200, 25%, 40%);
    --colors-gray-600: hsl(200, 30%, 30%);
    --colors-gray-700: hsl(200, 40%, 20%);
    --colors-gray-800: hsl(200, 60%, 15%);
    --colors-gray-900: hsl(200, 80%, 10%);
    --colors-gray: var(--colors-gray-500);

    // Primary Palette
    --colors-primary-100: hsl(175, 70%, 97%);
    --colors-primary-200: hsl(175, 70%, 80%);
    --colors-primary-300: hsl(175, 70%, 70%);
    --colors-primary-400: hsl(175, 60%, 60%);
    --colors-primary-500: hsl(175, 50%, 50%);
    --colors-primary-600: hsl(175, 70%, 30%);
    --colors-primary-700: hsl(175, 70%, 20%);
    --colors-primary-800: hsl(175, 70%, 10%);
    --colors-primary-900: hsl(175, 50%, 10%);
    --colors-primary: var(--colors-primary-500);

    // Secondary Palette
    --colors-secondary-100: hsl(225, 70%, 97%);
    --colors-secondary-200: hsl(225, 70%, 80%);
    --colors-secondary-300: hsl(225, 70%, 70%);
    --colors-secondary-400: hsl(225, 60%, 60%);
    --colors-secondary-500: hsl(225, 50%, 50%);
    --colors-secondary-600: hsl(225, 70%, 30%);
    --colors-secondary-700: hsl(225, 70%, 20%);
    --colors-secondary-800: hsl(225, 70%, 10%);
    --colors-secondary-900: hsl(225, 50%, 10%);
    --colors-secondary: var(--colors-secondary-500);

    // Warning Palette
    --colors-warning-100: hsl(60, 100%, 90%);
    --colors-warning-200: hsl(60, 95%, 75%);
    --colors-warning-300: hsl(55, 95%, 65%);
    --colors-warning-400: hsl(50, 95%, 65%);
    --colors-warning-500: hsl(45, 95%, 65%);
    --colors-warning-600: hsl(40, 95%, 65%);
    --colors-warning-700: hsl(40, 90%, 55%);
    --colors-warning-800: hsl(35, 80%, 55%);
    --colors-warning-900: hsl(35, 100%, 30%);
    --colors-warning: var(--colors-warning-500);

    // Danger Palette
    --colors-danger-100: hsl(0, 95%, 95%);
    --colors-danger-200: hsl(0, 85%, 85%);
    --colors-danger-300: hsl(0, 85%, 75%);
    --colors-danger-400: hsl(0, 85%, 65%);
    --colors-danger-500: hsl(0, 85%, 55%);
    --colors-danger-600: hsl(0, 90%, 45%);
    --colors-danger-700: hsl(0, 90%, 35%);
    --colors-danger-800: hsl(0, 90%, 25%);
    --colors-danger-900: hsl(0, 90%, 15%);
    --colors-danger: var(--colors-danger-500);

    --font-family-sans: 'Open Sans', sans-serif;
    --font-family-serif: 'Roboto Slab', serif;
    --font-family-mono: 'Source Code Pro', monospace;

    --transition-duration-default: 500ms;

    --colors-background: var(--colors-primary-100);
    --colors-text: var(--colors-gray-900);
    --colors-text-light: var(--colors-gray-100);

    --border-width-default: 0.0625rem; // 1 px
    --border-width-large: 0.15rem;
    --border-radius-default: 0.25rem;

    --colors-button-hover-overlay: rgba(0, 0, 0, 0.1);
    --colors-button-disabled: var(--colors-gray-300);

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
