import { Story } from '@storybook/react/types-6-0';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import CenterDecorator from '../../../.storybook/decorators/CenterDecorator';
import Button from '../Button';
import Box from '../layout/Box';
import { H2, H5 } from '../typography/Heading';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

const story = {
  title: 'Components/Forms/Signup Form',
  argTypes: {
    email: { type: 'string' },
    name: { type: 'string' },
    password: { type: 'string' },
    onSubmit: { action: 'submitted' },
    onCancel: { action: 'cancelled' },
  },
  decorators: [CenterDecorator],
};
export default story;

export const SignupForm: Story = (props) => {
  const { email = '', name = '', password = '', onSubmit, onCancel } = props;

  const [formData, setFormData] = useState({
    email,
    name,
    password,
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <Box as="form" align="stretch" onSubmit={handleSubmit}>
        <H2 as="h1">Get your account started today!</H2>

        <FormGroup>
          <Label htmlFor="email-input">Email</Label>
          <Input
            id="email-input"
            name="email"
            type="email"
            placeholder="ash.ketchum@pokemon.com"
            autoComplete="username"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="name-input">Name</Label>
          <Input
            id="name-input"
            name="name"
            placeholder="Ash Ketchum"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="password-input">Password</Label>
          <Input
            id="password-input"
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="StrongPasswordsAreVeryLong!!!"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={16}
          />
        </FormGroup>

        <Box direction="row" justify="end" spacing>
          <Button variant="text" type="button" onClick={onCancel}>
            Return to home
          </Button>
          <Button color="primary" type="submit">
            Create Account
          </Button>
        </Box>
      </Box>
      <Box mt={1} direction="row" justify="end">
        <H5 as="b">
          Already have an account?&nbsp;
          <a href={window.location.href}>Sign in</a>
        </H5>
      </Box>
    </>
  );
};
