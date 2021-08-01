import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import Alert from './Alert';
import Button from '../../button';
import { useColorPresets } from '../../colors';
import { ColorPreset } from '../../colors/src/useColorPresets';

const story = {
  title: 'Components/Alert',
  component: Alert,
};

const Template: Story<{ color: ColorPreset }> = (args) => {
  const { color, shades } = useColorPresets(args.color || 'gray');

  return (
    <Alert bg={shades[100]} fg={shades[500]}>
      <Alert.Title color={shades[700]}>Title</Alert.Title>
      <Alert.Message color={shades[600]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
        voluptatum eaque odit libero? Ex possimus eligendi magni voluptas nisi?
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
        repudiandae.
      </Alert.Message>
      <Alert.Actions>
        <Button color={color} variant="text">
          Cancel
        </Button>
        <Button color={color}>Resolve</Button>
      </Alert.Actions>
    </Alert>
  );
};

export const Default = Template.bind({});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
};

export const Warning = Template.bind({});
Warning.args = {
  color: 'warning',
};

export const Danger = Template.bind({});
Danger.args = {
  color: 'danger',
};

export default story;
