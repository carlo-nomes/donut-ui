import React, { ChangeEvent, FC } from 'react';
import FormGroup from './FormGroup';
import Input from './Input';
import Label from './Label';

//TODO: make actual slider

export type SliderProps = {
  label: string;
  id: string;
  min: number;
  max: number;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Slider: FC<SliderProps> = ({ label, ...props }) => {
  return (
    <FormGroup>
      <Label htmlFor={props.id}>{label}</Label>
      <Input type="number" {...props} />
    </FormGroup>
  );
};

export default Slider;
