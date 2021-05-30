import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import CenterDecorator from '../../../.storybook/decorators/CenterDecorator';
import FormGroup from './FormGroup';
import Label from './Label';
import Input from './Input';

const story = {
  title: 'Components/Forms/Input',
  component: Input,
  argTypes: {
    onFocus: { action: 'focussed' },
    onBlur: { action: 'blurred' },
    onChange: { action: 'changed' },
  },
};
export default story;

const Template: Story = ({ label, ...args }) => (
  <FormGroup>
    <Label htmlFor={args.id}>{label}</Label>
    <Input {...args} />
  </FormGroup>
);

export const All: Story = () => {
  const module = require('./Input.stories');
  const InputStories: Story[] = Object.keys(module)
    .filter((key) => key.match(/.*Input/))
    .map((key) => module[key]);

  return (
    <>
      {InputStories.map((Story, index) => (
        <Story key={index} {...Story.args} />
      ))}
    </>
  );
};
All.storyName = 'All Inputs';
All.decorators = [CenterDecorator];

export const TextInput = Template.bind({});
TextInput.decorators = [CenterDecorator];
TextInput.args = {
  label: 'Text',
  id: 'text-input',
  type: 'text',
  placeholder: 'some text',
};

export const NumberInput = Template.bind({});
NumberInput.decorators = [CenterDecorator];
NumberInput.args = {
  label: 'Number',
  id: 'number-input',
  type: 'number',
  placeholder: '100',
};

export const EmailInput = Template.bind({});
EmailInput.decorators = [CenterDecorator];
EmailInput.args = {
  label: 'Email',
  id: 'email-input',
  type: 'email',
  placeholder: 'ash.ketchum@pokemon.be',
};

export const PhoneInput = Template.bind({});
PhoneInput.decorators = [CenterDecorator];
PhoneInput.args = {
  label: 'Phone',
  id: 'phone-input',
  type: 'tel',
  placeholder: '+324000000',
};

export const PasswordInput = Template.bind({});
PasswordInput.decorators = [CenterDecorator];
PasswordInput.args = {
  label: 'Password',
  id: 'password-input',
  type: 'password',
};

export const DateInput = Template.bind({});
DateInput.decorators = [CenterDecorator];
DateInput.args = {
  label: 'Date',
  id: 'date-input',
  type: 'date',
};

export const UrlInput = Template.bind({});
UrlInput.decorators = [CenterDecorator];
UrlInput.args = {
  label: 'Url',
  id: 'url-input',
  type: 'url',
  placeholder: 'https://test.com',
};

export const TimeInput = Template.bind({});
TimeInput.decorators = [CenterDecorator];
TimeInput.args = {
  label: 'Time',
  id: 'time-input',
  type: 'time',
};

export const RangeInput = Template.bind({});
RangeInput.decorators = [CenterDecorator];
RangeInput.args = {
  label: 'Range',
  id: 'range-input',
  type: 'range',
  min: 0,
  max: 10,
};
