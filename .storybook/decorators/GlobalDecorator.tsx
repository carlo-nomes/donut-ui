import React from 'react';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';
import GlobalStyle from '../../src/GlobalStyle';

const GlobalDecorator = (Story: () => StoryFnReactReturnType) => (
  <>
    <GlobalStyle />
    {Story()}
  </>
);

export default GlobalDecorator;
