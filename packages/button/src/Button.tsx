import React, { HTMLProps } from 'react';

import { SizeProps } from '@donut-ui/layout/css/size';

import FilledButton from './FilledButton';
import OutlinedButton from './OutlineButton';
import TextButton from './TextButton';

export type ButtonVariants = 'filled' | 'outline' | 'text';

export type ButtonProps = HTMLProps<HTMLButtonElement> &
  SizeProps & {
    variant?: ButtonVariants;
    color?: string;
  };

const Button = (props: ButtonProps) => {
  const { variant, color, ...other } = props;

  switch (variant) {
    case 'text':
      return <TextButton color={color} {...(other as any)} />;
    case 'outline':
      return <OutlinedButton color={color} {...(other as any)} />;
    case 'filled':
    default:
      return <FilledButton color={color} {...(other as any)} />;
  }
};

export default Button;
