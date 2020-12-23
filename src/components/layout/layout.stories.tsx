import { Story } from '@storybook/react/types-6-0';
import React from 'react';
import Box from './Box';

const story = { title: 'Layout' };
export default story;

export const BoxStory: Story = () => <Box />;
BoxStory.storyName = 'Box';
