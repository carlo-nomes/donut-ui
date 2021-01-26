import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Slider, { SliderProps } from './Slider';
import Box from '../layout/Box';

const story = {
  title: 'Slider',
  component: Slider,
  argTypes: { onChange: { action: 'changed' } },
};
export default story;

const Template: Story<SliderProps> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.decorators = [
  (Story) => (
    <Box width="500px" mx="auto" align="stretch">
      <Story />
    </Box>
  ),
];
Default.args = {
  id: 'default-slider',
  label: 'Default',
  min: 0,
  max: 100,
};
