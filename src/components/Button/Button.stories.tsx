import React from 'react';
import ButtonComponent, { ButtonProps } from './Button';
import { Story } from '@storybook/react/types-6-0';

const story = {
  title: 'Button',
  component: ButtonComponent,
  args: {
    variant: 'filled',
    children: 'Label',
    color: 'primary',
    width: 20,
  },
};
export default story;

const Template: Story<ButtonProps> = (args) => <ButtonComponent {...args} />;

export const Button = Template.bind({});
