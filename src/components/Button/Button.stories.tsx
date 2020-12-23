import React from 'react';
import Button, { ButtonProps } from './Button';
import { Story } from '@storybook/react/types-6-0';

const story = {
  title: 'Button',
  component: Button,
  args: {
    children: 'Label',
    color: 'primary',
    width: 20,
  },
};
export default story;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = { variant: 'filled' };

export const Outline = Template.bind({});
Outline.args = { variant: 'outline' };

export const Text = Template.bind({});
Text.args = { variant: 'text' };
