import React, { FormEvent } from 'react';
import { Story } from '@storybook/react/types-6-0';
import Input from './Input';
import FormGroup from './FormGroup';
import Label from './Label';
import Button from '../Button';
import Box from '../layout/Box';
import { H2, H5 } from '../typography/Heading';

const story = { title: 'Form' };
export default story;

export const Form = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) =>
    event.preventDefault();

  return (
    <Box
      as="form"
      width="500px"
      mx="auto"
      align="stretch"
      onSubmit={handleSubmit}
    >
      <H2>
        Get started <br />
        today!
      </H2>

      <FormGroup>
        <Label htmlFor="email-input">Email</Label>
        <Input
          id="email-input"
          name="email"
          type="email"
          autoComplete="username"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="name-input">Name</Label>
        <Input id="name-input" name="name" />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password-input">Password</Label>
        <Input
          id="password-input"
          name="password"
          type="password"
          autoComplete="new-password"
        />
      </FormGroup>

      <Box direction="row" justify="end" spacing>
        <Button variant="text">Return to home</Button>
        <Button color="primary" type="submit">
          Create Account
        </Button>
      </Box>

      <Box mt={1} direction="row" justify="end">
        <H5>
          Already have an account? <a href="#">Sign in</a>
        </H5>
      </Box>
    </Box>
  );
};
