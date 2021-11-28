import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

const story: ComponentMeta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: { control: 'color' },
  },
};
export default story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
  children: 'Filled',
  color: 'hsl(175, 50%, 50%)',
  width: 20,
  disabled: false,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  children: 'Outline',
  color: 'hsl(175, 50%, 50%)',
  width: 20,
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  children: 'Text',
  color: 'hsl(175, 50%, 50%)',
  width: 20,
  disabled: false,
};
