import React from 'react';
import Box from '../../src/components/layout/Box';
import { StoryFnReactReturnType } from '@storybook/react/dist/client/preview/types';

const CenterDecorator = (Story: () => StoryFnReactReturnType) => (
  <Box width="500px" mx="auto" align="stretch">
    {Story()}
  </Box>
);

export default CenterDecorator;
