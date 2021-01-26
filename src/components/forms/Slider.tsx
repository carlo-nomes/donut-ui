import React, { FC, HTMLProps } from 'react';
import Input from './Input';

//TODO: make actual slider

export type SliderProps = HTMLProps<HTMLInputElement>;

const Slider: FC<SliderProps> = ({ ...props }) => <Input {...(props as any)} />;

export default Slider;
