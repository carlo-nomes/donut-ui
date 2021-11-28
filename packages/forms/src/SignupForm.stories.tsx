import React, { useState, ChangeEvent, FormEvent } from 'react';

import CenterDecorator from '../../../.storybook/decorators/CenterDecorator';

import Button from '../../button';
import { Box } from '../../layout';
import { H2 } from '../../typography';

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

type SignupFormProps = {
  email?: string;
  name?: string;
  password?: string;
  onSubmit?: () => void;
  onCancel: () => void;
};
export const SignupForm = (props: SignupFormProps) => {
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
          <Input id="name-input" name="name" placeholder="Ash Ketchum" value={formData.name} onChange={handleChange} required />
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

        <Box direction="row" justify="end" space>
          <Button variant="text" type="button" onClick={onCancel}>
            Return to home
          </Button>
          <Button color="var(--colors-primary)" type="submit">
            Create Account
          </Button>
        </Box>
      </Box>

      <Box mt={1} direction="row" justify="end" as="b">
        Already have an account?&nbsp;
        <a href={window.location.href}>Sign in</a>
      </Box>
    </>
  );
};

export default story;
