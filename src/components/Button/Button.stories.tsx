import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './Button';

const story = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Label',
    color: 'primary',
    width: 20,
    disabled: false,
  },
};
export default story;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
Filled.args = {
  variant: 'filled',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
};
