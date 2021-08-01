import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import ColorSelector, { ColorSelectorProps } from './ColorSelector';

const story = {
  title: 'General/Color Selector',
  component: ColorSelector,
};
export default story;

const Template: Story<ColorSelectorProps> = (args) => (
  <ColorSelector {...args} />
);

export const Default = Template.bind({});
Default.args = {
  color: 'hsl(175, 50%, 50%)',
};
