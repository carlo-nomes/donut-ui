import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ColorSelector from './ColorSelector';

const story: ComponentMeta<typeof ColorSelector> = {
  title: 'General/Color Selector',
  component: ColorSelector,
};
export default story;

const Template: ComponentStory<typeof ColorSelector> = (args) => <ColorSelector {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'hsl(175, 50%, 50%)',
};
