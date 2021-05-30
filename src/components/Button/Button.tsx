import React, { HTMLProps } from 'react';
import { SizeProps } from '../layout/css/size';

import { useColorPresets } from '../colors';
import { ColorPreset } from '../colors/useColorPresets';

import FilledButton from './FilledButton';
import OutlinedButton from './OutlineButton';
import TextButton from './TextButton';

export type ButtonVariants = 'filled' | 'outline' | 'text';

export type ButtonProps = HTMLProps<HTMLButtonElement> &
  SizeProps & {
    variant?: ButtonVariants;
    color?: ColorPreset | string;
  };

const Button = (props: ButtonProps) => {
  const { variant, color: presetColor, ...other } = props;
  const { color } = useColorPresets(presetColor || 'default');

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
