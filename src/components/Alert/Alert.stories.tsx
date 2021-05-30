import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import Alert, { AlertProps } from './Alert';
import Button from '../Button';

const story = {
  title: 'Components/Alert',
  component: Alert,
};

const Template: Story<AlertProps> = (args) => (
  <Alert {...args}>
    <Alert.Title>Title</Alert.Title>
    <Alert.Message>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti
      voluptatum eaque odit libero? Ex possimus eligendi magni voluptas nisi?
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
      repudiandae.
    </Alert.Message>
    <Alert.Actions>
      <Button color="primary" variant="text">
        Cancel
      </Button>
      <Button color="primary">Resolve</Button>
    </Alert.Actions>
  </Alert>
);

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
