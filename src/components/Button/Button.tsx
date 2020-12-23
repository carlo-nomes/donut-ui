import React, { HTMLProps } from 'react';
import { SizeProps } from '../layout/css/size';
import useColorPresets, { Color } from '../colors/useColorPresets';
import FilledButton from './FilledButton';
import OutlinedButton from './OutlineButton';
import TextButton from './TextButton';

export type ButtonVariants = 'filled' | 'outline' | 'text';

export type ButtonProps = HTMLProps<HTMLButtonElement> &
  SizeProps & {
    variant?: ButtonVariants;
    color?: Color;
  };

const Button = (props: ButtonProps) => {
  const { variant = 'filled', color: presetColor, ...other } = props;
  const color = useColorPresets(presetColor);

  switch (variant) {
    case 'text':
      return <TextButton color={color} {...(other as any)} />;
    case 'outline':
      return <OutlinedButton color={color} {...(other as any)} />;
    case 'filled':
      return <FilledButton color={color} {...(other as any)} />;
  }
};

export default Button;
